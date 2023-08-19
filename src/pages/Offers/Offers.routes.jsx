import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { useApiGet } from "../../hooks/useApi";

function handleDelete(tabla) {
  console.log("borrar " + tabla);
}
function handleEdit(tabla) {
  console.log("edit " + tabla.id + " ");
}
const FilasActions = (value, tableMeta, list) => {
  const rowData = list[tableMeta.rowIndex];
  return (
    <div>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => handleEdit(rowData)}
      >
        <i className="fas fa-edit"></i>
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => handleDelete(tableMeta.rowIndex)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
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
      name: "owner",
      label: "Nombre del dueño",
      sort: true,
    },
    {
      name: "email",
      label: "Email",
      sort: true,
    },
    {
      name: "description",
      label: "Descripcion",
    },
    {
      name: "TypeOfProperty",
      label: "Tipo de propiedad",
    },

    {
      name: "city",
      label: "Ciudad",
      sort: true,
    },
    {
      name: "actions",
      label: "Acciones",
      options: {
        // sort: false,
        filter: false,
        customBodyRender: (value, tableMeta) =>
          FilasActions(value, tableMeta, list),
      },
    },
  ];
};
export function Offers() {
  const [list, setList] = useState([]);

  let [data, loading, error] = useApiGet(
    "https://rcservice.onrender.com/api/ofertas/oferta"
  );
  useEffect(() => {
    if (data) {
      const newList = data.map((offers, index) => ({
        id: offers._id,
        index: index,
        publicationDate: offers.publicationDate,
        description: offers.description,
        owner: offers.id_property.first_name,
        gender: offers.id_property.gender,
        city: offers.id_property.city,
        TypeOfProperty: offers.id_property.TypeOfProperty,
        email: offers.id_property.email,
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
