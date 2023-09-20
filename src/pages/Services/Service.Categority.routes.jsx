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
      name: "nombreCategoria",
      label: "Nombre Categoria",
    },
    {
      name: "descripcion",
      label: "Descripcion Categoria",
    },
    {
      name: "fechaCreacion",
      label: "Fecha de Creacion",
    },
    {
      name: "Estado",
      label: "Estado Categoria",
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

// "_id": "64f8d9bb76c27a5043edc6a1",
// "Nombre_Categoria": "Electricidad",
// "Descripcion": "Servicios que incluyen manejo de sistemas Electronicos",
// "Fecha_Creacion": "2023-09-06T19:55:15.846Z",
// "Estado": true,
// "__v": 0

function CategorityService() {
  const url = "https://rcservice.onrender.com/api/proveedores/Categoria";
  const title = "Categoria Servicio";
  const [list, setList] = useState([]);

  let [data, loading, error] = ApiGet(url); // trae en automatico

  useEffect(() => {
    if (data) {
      const newList = data.map((Categority, index) => {
        let CategoriaEstado = Categority.Estado;
        let estado = CategoriaEstado ? "Activo" : "Inactivo";

        return {
          id: Categority._id,
          index: index + 1,
          nombreCategoria: Categority.Nombre_Categoria,
          descripcion: Categority.Descripcion,
          fechaCreacion: Categority.Fecha_Creacion,
          Estado: estado,
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
        />
      )}
    </section>
  );
}
export default CategorityService;
