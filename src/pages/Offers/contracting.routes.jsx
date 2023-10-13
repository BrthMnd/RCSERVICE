import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { ApiGet } from "../../hooks/useApi";
import { ButtonAction } from "../../Utils/ActionsTable";
const ColumnsDefault = (list, url, title) => {
  return [
    {
      name: "index",
      label: "Index",
      options: {
        sort: true,
        sortIndex: 0,
        filter: true,
        customBodyRender: (value) => <div className="center-cell">{value}</div>,
      },
    },
    {
      name: "DateApplied",
      label: "Fecha de aplicación",
      sort: true,
    },
    {
      name: "description",
      label: "Descripción",
      sort: true,
    },
    {
      name: "name",
      label: "Nombre del candidato",
      sort: true,
    },
    {
      name: "Phone",
      label: "Teléfono",
      sort: true,
    },
    {
      name: "Status",
      label: "Estado del candidato",
      sort: true,
    },
    {
      name: "description",
      label: "Descripción de la propiedad",
      sort: true,
    },
    {
      name: "actions",
      label: "Acciones",
      options: {
        // sort: false,
        filter: false,
        customBodyRender: (value, tableMeta) =>
          ButtonAction({ value, tableMeta, list, url, title }),
      },
    },
  ];
};
function Contracting() {
  const url = "https://rcservice.onrender.com/api/ofertas/contrato";
  const title = "Contrato";
  const [list, setList] = useState([]);

  let [data, loading, error] = ApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data.map((items, index) => {
        return {
          id: items._id,
          index: index + 1,
        };
      });
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
export default Contracting;
