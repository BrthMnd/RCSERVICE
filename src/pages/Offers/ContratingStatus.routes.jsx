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
      name: "name",
      label: "Nombre del estado",
      sort: true,
    },
    {
      name: "description",
      label: "Descripción",
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
function ContratingStatus() {
	let api = import.meta.env.VITE_API_URL;
  const url = api+"/api/ofertas/estado_contrato";
  const title = "Estados De Contrato";
  const [list, setList] = useState([]);

  let [data, loading, error] = ApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data.map((items, index) => ({
        id: items._id,
        index: index + 1,
        name: items.name,
        description: items.description,
      }));
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
export default ContratingStatus;
