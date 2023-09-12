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
      name: "name",
      label: "Nombre del estado",
      sort: true,
    },
    {
      name: "description",
      label: "Descripcion",
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
function ContratingStatus() {
  const url = "https://rcservice.onrender.com/api/ofertas/estadoDeContrato";
  const [list, setList] = useState([]);

  let [data, loading, error] = useApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data.map((items, index) => ({
        id: items._id,
        index: index,
        name: items.name,
        description: items.description,
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
export default ContratingStatus;
