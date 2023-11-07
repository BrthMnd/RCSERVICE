/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { ApiGet } from "../../hooks/useApi";
import { ButtonAction } from "../../Utils/ActionsTable";
import { IconLoading } from "../../Utils/IconsLoading";

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

  let [data, loading, error] = ApiGet(url);
  useEffect(() => {
    if (data.length > 0) {
      console.log(data);
      const newList = data.map((offers, index) => {
        return {
          id: offers._id,
          index: index + 1,
          TypeOfProperty: offers.id_property.tipoPropiedad,
          publicationDate: offers.publicationDate,
          description: offers.description,
          direction: offers.id_property.direccion,
          service: offers.id_service.Nombre_Servicio,
          Status: offers.id_OfferStatus.name,
          //
          id_OfferStatus: offers.id_OfferStatus.name,
          id_service: offers.id_service._id,
          id_property: offers.id_property._id,
        };
      });
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
