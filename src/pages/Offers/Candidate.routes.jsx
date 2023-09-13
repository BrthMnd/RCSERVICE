import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { useApiGet } from "../../hooks/useApi";
import { ButtonAction } from "../../Utils/ActionsTable";
const ColumnsDefault = (list) => {
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
      label: "Fecha de aplicacion",
      sort: true,
    },
    {
      name: "description",
      label: "Descripcion",
      sort: true,
    },
    {
      name: "name",
      label: "Nombre del candidato",
      sort: true,
    },
    {
      name: "email",
      label: "Email",
      sort: true,
    },
    {
      name: "Status",
      label: "Estado del candidato",
      sort: true,
    },
    {
      name: "description",
      label: "Descripcion de la propiedad",
      sort: true,
    },
    {
      name: "actions",
      label: "Acciones",
      options: {
        // sort: false,
        filter: false,
        customBodyRender: (value, tableMeta) =>
          ButtonAction(value, tableMeta, list),
      },
    },
  ];
};
function Candidate() {
  const url = "https://rcservice.onrender.com/api/ofertas/candidato";
  const [list, setList] = useState([]);

  let [data, loading, error] = useApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data.map((items, index) => ({
        id: items._id,
        index: index + 1,
        DateApplied: items.DateApplied,
        name: items.id_ServiceProvider.first_name,
        email: items.id_ServiceProvider.email,
        Status: items.id_ContratingStatus.name,
        description: items.id_offers.description,
        id_ServiceProvider: items.id_ServiceProvider._id,
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
        <Datatables data={list} col={ColumnsDefault(list)} title="Candidatos" />
      )}
    </section>
  );
}
export default Candidate;
