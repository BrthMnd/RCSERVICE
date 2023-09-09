import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { useApiGet } from "../../hooks/useApi";
import { ButtonAction } from "../../Utils/ActionsTable";

const ColumnsDefault = (list) => {
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
      label: "Fecha de Publicacion",
    },
    {
      name: "description",
      label: "Descripcion",
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
      name: "direcction",
      label: "Direccion",
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
          ButtonAction(value, tableMeta, list),
      },
    },
  ];
};
export function Offers() {
  const url = "https://rcservice.onrender.com/api/ofertas/oferta";
  const [list, setList] = useState([]);

  let [data, loading, error] = useApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data.map((offers, index) => ({
        id: offers._id,
        index: index,
        TypeOfProperty: offers.id_property.tipoPropiedad,
        publicationDate: offers.publicationDate,
        description: offers.description,
        direcction: offers.id_property.direccion,
        status: offers.id_status.name,
        service: offers.id_service.Nombre_Servicio
      }));
      setList(newList);
    }
  }, [data]);

  return (
    <section className="sections custom-mui-datatable" id="section__property">
      {loading && <div>CARGANDO.....</div>}
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      {!loading && !error && (
        <Datatables data={list} col={ColumnsDefault(list)} title="Ofertas" />
      )}
    </section>
  );
}
export default Offers;
