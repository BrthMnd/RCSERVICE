import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { useApiGet } from "../../hooks/useApi";
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
      name: "nombres",
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
      label: "Telefono",
    },
    {
      name: "direccion",
      label: "Direccion",
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

// "fechCreacion": "2023-09-01T21:00:27.370Z",
// "_id": "64deb1be02ebf39a72715c3e",
// "documento": 67673048,
// "nombres": "Madge",
// "apellidos": "Stubbs",
// "correo": "mstubbsc@java.com",
// "gender": "Female",
// "telefono": "+1 850 185 2577",
// "direccion": "10-260 - Wall and Corner Guards"

export function Owners() {
  const url = "https://rcservice.onrender.com/api/inmuebles/propietario";
  const title = "Propietario";
  const [list, setList] = useState([]);

  let [data, loading, error] = useApiGet(url);

  useEffect(() => {
    if (data) {
      const newList = data.map((Owner, index) => {
        let nombreCompleto = `${Owner.nombres} ${Owner.apellidos}`;

        return {
          id: Owner._id,
          index: index + 1,
          nombres: nombreCompleto,
          documento: Owner.documento,
          email: Owner.correo,
          telefono: Owner.telefono,
          direccion: Owner.direccion,
        };
      });
      setList(newList);
    }
  }, [data]);

  return (
    <section className="sections" id="section__property">
      {loading && <div>CARGANDO.....</div>}
      {error && <div>{error}</div>}
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
export default Owners;
