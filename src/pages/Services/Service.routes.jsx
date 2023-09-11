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
          ButtonAction(value, tableMeta, list),
      },
    },
  ];
};

// "_id": "64f8dede76c27a5043edc6b8",
// !"Nombre_Servicio": "Instalación Eléctrica",
// !"Descripcion": "Servicio de expertos en la colocación de cables, circuitos y dispositivos eléctricos, asegurando que los sistemas eléctricos estén correctamente conectados y cumplan con las normativas de seguridad.",
// !"estado": true,
// "Categoria_Servicio": {
// "_id": "64f8d9bb76c27a5043edc6a1",
// !"Nombre_Categoria": "Electricidad",
// "Descripcion": "Servicios que incluyen manejo de sistemas Electronicos",
// "Fecha_Creacion": "2023-09-06T19:55:15.846Z",
// "Estado": true,
// "__v": 0
// },
// "__v": 0

function Service() {
  const url = "https://rcservice.onrender.com/api/proveedores/Servicios";
  const [list, setList] = useState([]);

  let [data, loading, error] = useApiGet(url);
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
          nameCategority: service.Categoria_Servicio.Nombre_Categoria,
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
        <Datatables data={list} col={ColumnsDefault(list)} title="Servicios" />
      )}
    </section>
  );
}
export default Service;
