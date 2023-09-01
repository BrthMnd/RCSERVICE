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
      name: "email",
      label: "Correo",
      sort: true,
    },
    {
      name: "nombres",
      label: "Nombres",
    },
    {
      name: "telefono",
      label: "Telefono",
    },
    {
      name: "fechCreacion",
      label: "Fecha de creacion",
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

// "_id": "64e0891b02ebf39a72484b13",
//         "documento": 1039315667,
//         "nombres": "Gabriella",
//         "apellidos": "Baversor",
//         "correo": "gbaversor7@elegantthemes.com",
//         "telefono": "163-575-3414",
//         "estado": true,
//         "direccion": "422 Monterey Park",
// "fechCreacion": "2022-09-28T19:54:57.000Z"
function Manager() {
  const url = "https://rcservice.onrender.com/api/inmuebles/encargado";
  const [list, setList] = useState([]);

  let [data, loading, error] = useApiGet(url); // trae en automatico

  useEffect(() => {
    if (data) {
      const newList = data.map((Manager, index) => {
        let nombreCompleto = `${Manager.nombres} ${Manager.apellidos}`
        
        return{
        id: Manager._id,
        index: index + 1,
        nombres: nombreCompleto,
        email: Manager.correo,
        telefono: Manager.telefono,
        fechCreacion: Manager.fechCreacion


      }});
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
        <Datatables data={list} col={ColumnsDefault(list)} title="Encargado" />
      )}
    </section>
  );
}
export default Manager;
