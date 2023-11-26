/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { ApiGet } from "../../hooks/useApi";
import { ButtonAction } from "../../Utils/ActionsTable";
import { IconLoading } from "../../Utils/IconsLoading";
import { useDispatch, useSelector } from "react-redux";
import { ChangeStateOffers } from "../../features/offers.slice";

const ColumnsDefault = (list, url, title) => {
  return [
    {
      name: "index",
      label: "Index",
      sort: false,
      options: {
        customBodyRender: (value) => <div className="center-cell">{value}</div>,
      },
    },
    {
      name: "publicationDate",
      label: "Fecha de publicación",
    },
    {
      name: "description",
      label: "Descripción",
    },
    {
      name: "service",
      label: "Servicio",
    },
    {
      name: "TypeOfProperty",
      label: "Propiedad",
    },

    {
      name: "direction",
      label: "Dirección",
      sort: true,
    },
    {
      name: "Status",
      label: "Estado",
      sort: true,
    },
    {
      name: "actions",
      label: "Acciones",
      options: {
        sort: false,
        // filter: false,
        customBodyRender: (value, tableMeta) =>
          ButtonAction({ tableMeta, list, url, title }),
      },
    },
  ];
};
export function Offers() {
  const url = import.meta.env.VITE_URL_OFFERS;
  const title = "Ofertas";
  const [list, setList] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

  let [data, loading, error] = ApiGet(url);
  useEffect(() => {
    if (data) {
      console.log("☣");
      console.log(data);
      const newList = data.response_offers.map((items, index) => {
        
        return {
          id: items._id,
          index: index + 1,
          TypeOfProperty: items.id_property.tipoPropiedad,
          publicationDate: items.publicationDate,
          description: items.description,
          direction: items.id_property.direccion,
          service: items.id_service.Nombre_Servicio,
          Status: items.id_OfferStatus.name,
          //
          id_OfferStatus: items.id_OfferStatus.name,
          id_service: items.id_service._id,
          id_property: items.id_property._id,
        };
      });
      dispatch(ChangeStateOffers(data.response_candidate))
      setList(newList);
    }
  }, [data]);

  return (
    <section className="sections custom-mui-datatable" id="section__property">
      <IconLoading isLoading={loading} />
      {error && (
        <div>
          <p>{error.message}</p>
        </div>
      )}
      {!loading && !error && (
        <Datatables
          data={list}
          col={ColumnsDefault(list, url, title)}
          title={title}
          url={url}
        />
      )}
    </section>
  );
}
export default Offers;
