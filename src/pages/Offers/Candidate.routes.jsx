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
function Candidate() {
	let api = import.meta.env.VITE_API_URL;
  const url = api+"/api/ofertas/candidato";
  const title = "Candidato";
  const [list, setList] = useState([]);

  let [data, loading, error] = ApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data.map((items, index) => {
        let names =
          items.id_ServiceProvider.Nombre +
          " " +
          items.id_ServiceProvider.Apellido;
        return {
          id: items._id,
          index: index + 1,
          id_ServiceProvider: items.id_ServiceProvider._id,
          id_ContratingStatus: items.id_ContratingStatus._id,
          id_offers: items.id_offers._id,
          //
          DateApplied: items.DateApplied,
          name: names,
          Phone: items.id_ServiceProvider.telefono,
          Status: items.id_ContratingStatus.name,
          description: items.id_offers.description,
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
export default Candidate;
