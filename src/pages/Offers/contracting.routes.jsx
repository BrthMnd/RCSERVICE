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
      options: {
        sort: true,
        sortIndex: 0,
        filter: true,
        customBodyRender: (value) => <div className="center-cell">{value}</div>,
      },
    },
    {
      name: "status",
      label: "Estado",
    },
    {
      name: "fecha",
      label: "Fecha de inicio",
    },
    {
      name: "description",
      label: "Descripcion",
      sort: true,
    },
    {
      name: "direccion",
      label: "Direccion",
    },
    {
      name: "name_provider",
      label: "Nombre del Proveedor",
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
  const url = import.meta.env.VITE_URL_CONTRACTING;
  const title = "Contrato";
  const [list, setList] = useState([]);

  let [data, loading, error] = ApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data.map((items, index) => {
        return {
          id: items._id,
          index: index + 1,
          status: items.id_contractingStatus.name,
          fecha: items.DateApplied,
          description: items.id_offers.description,
          name_provider: items.id_proveedor.nombre,
          telefono: items.id_proveedor.telefono,
          direccion: "por inplementar",
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
