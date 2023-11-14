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
      name: "nombreCompleto",
      label: "Nombres",
    },
    {
      name: "documento",
      label: "Documento",
    },
    {
      name: "email",
      label: "Correo",
      sort: true,
    },
    {
      name: "telefono",
      label: "Teléfono",
    },

    {
      name: "direccion",
      label: "Dirección",
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
  const title = "Encargado";
  const [list, setList] = useState([]);
  let [data, loading, error] = ApiGet(url); // trae en automatico

  useEffect(() => {
    if (data) {
      const newList = data.map((Manager, index) => {
        let nombreCompleto = Manager.nombre;
        let email = `${Manager.correo}`;
        let status = Manager.estado ? "Activo" : "inactivo";
        return {
          id: Manager._id,
          index: index + 1,
          nombreCompleto: nombreCompleto,
          nombre: Manager.nombre,
          apellidos: Manager.apellidos,
          documento: Manager.documento,
          email: email,
          correo: Manager.correo,
          telefono: Manager.telefono,
          direccion: Manager.direccion,
          estadoEncargado: status,
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
export default Manager;
