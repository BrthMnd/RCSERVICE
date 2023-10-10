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
      name: "nameService",
      label: "Nombre Servicio",
      sort: true,
    },
    {
      name: "description",
      label: "Descripcion Servicio",
      sort: true,
    },
    {
      name: "nameCategority",
      label: "Categoria",
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
        // sort: false,
        filter: false,
        customBodyRender: (value, tableMeta) =>
          ButtonAction({ value, tableMeta, list, url, title }),
      },
    },
  ];
};

// "__v": 0

function Service() {
  const url = "https://rcservice.onrender.com/api/proveedores/Servicios";
  const title = "Servicio";
  const [list, setList] = useState([]);

  let [data, loading, error] = ApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data.map((service, index) => {
        let ServicioEstado = service.estado;
        let estado = ServicioEstado ? "Activo" : "Inactivo";

        return {
          id: service._id,
          index: index + 1,
          nameService: service.Nombre_Servicio,
          description: service.Descripcion,
          status: estado,
          nameCategority: service.Categoria_Servicio
            ? service.Categoria_Servicio.Nombre_Categoria
            : "N/A",
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
export default Service;
