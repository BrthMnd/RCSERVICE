/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { ApiGet } from "../../hooks/useApi";
import { ButtonAction } from "../../Utils/ActionsTable";
import { IconLoading } from "../../Utils/IconsLoading";
import { useDispatch, useSelector } from "react-redux";
import { ChangeStateOffers } from "../../features/offers.slice";
import { ButtonStatus } from "../../Utils/CambiarEstado";

const ColumnsDefault = (list, url, title, user) => {
  console.log(
    "👌👌👌👌👌👌👌🚀 ~ file: Offers.routes.jsx:13 ~ ColumnsDefault ~ user:",
    user
  );
  return [
    {
      name: "publicationDate",
      label: "Fecha de publicación",
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
      label: "Estado de oferta",
      sort: true,
    },
    {
      name: "estado",
      label: "Estado",
      sort: true,
      options: {
        customBodyRender: (value, tableMeta) => {
          if (user.role == "Proveedores") {
            return value ? "Activo" : "Inactivo";
          } else {
            return (
              <ButtonStatus
                value={value}
                tableMeta={tableMeta}
                list={list}
                url={url}
                title={title}
              />
            );
          }
        },
      },
    },
    {
      name: "actions",
      label: "Acciones",
      options: {
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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  let [data, loading, error] = ApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data.response_offers.map((items, index) => {
        return {
          id: items._id,
          index: index + 1,
          TypeOfProperty: items.id_property.tipoPropiedad,
          publicationDate: items.publicationDate,
          description: items.description,
          direction: items.id_property.direccion,
          service: items.id_Category_service.Nombre_Categoria,
          Status: items.state,
          estado: items.estado,
          //
          id_service: items.id_Category_service._id,
          id_property: items.id_property._id,
        };
      });
      dispatch(ChangeStateOffers(data.response_candidate));
      setList(newList);
    }
  }, [data, dispatch]);

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
          col={ColumnsDefault(list, url, title, user)}
          title={title}
          url={url}
        />
      )}
    </section>
  );
}
export default Offers;
