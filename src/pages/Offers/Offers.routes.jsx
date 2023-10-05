import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { ApiGet } from "../../hooks/useApi";
import { ButtonAction } from "../../Utils/ActionsTable";

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
      label: "Fecha de Publicación",
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
      label: "Tipo de propiedad",
    },

    {
      name: "direction",
      label: "Dirección",
      sort: true,
    },
    {
      name: "status",
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
	let api = import.meta.env.VITE_API_URL;
  const url = api+"/api/ofertas/oferta";
  const title = "Ofertas";
  const [list, setList] = useState([]);

  let [data, loading, error] = ApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data.map((offers, index) => {
        let status = offers.status ? "Activo" : "inactivo";

        return {
          id: offers._id,
          index: index + 1,
          TypeOfProperty: offers.id_property.tipoPropiedad,
          publicationDate: offers.publicationDate,
          description: offers.description,
          direction: offers.id_property.direccion,
          service: offers.id_service.Nombre_Servicio,
          status: status,
          //
          id_service: offers.id_service._id,
          id_property: offers.id_property._id,
        };
      });
      setList(newList);
    }
  }, [data]);

  return (
    <section className="sections custom-mui-datatable" id="section__property">
      {loading && <div className="spinner"></div>}
      {error && (
        <div>
          <p>{error}</p>
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
