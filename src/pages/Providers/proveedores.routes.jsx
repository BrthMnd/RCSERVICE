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
      name: "nameProvider",
      label: "Nombre Proveedor",
      sort: true,
    },
    {
      name: "phone",
      label: "Telefono",
      sort: true,
    },
    {
      name: "Email",
      label: "Correo",
      sort: true,
    },
    {
      name: "Address",
      label: "Direccion",
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

//"_id": "64d7e61abdd040dd619ac0ba",
// "Nombre": "Elysee",
// "Apellido": "Brennand",
// "telefono": "504-762-5475",
// "Email": "ebrennandt@amazonaws.com",
// "Direccion": "Pýrgos"

function Provider() {
  const url = "https://rcservice.onrender.com/api/proveedores/proveedor";
  const [list, setList] = useState([]);

  let [data, loading, error] = useApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data.map((provider, index) => {
        let nombreCompleto = `${provider.Nombre} ${provider.Apellido}`;

        return {
          id: provider._id,
          index: index + 1,
          nameProvider: nombreCompleto,
          phone:provider.telefono,
          Email:provider.Email,
          Address:provider.Direccion
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
        <Datatables data={list} col={ColumnsDefault(list)} title="Proveedores" />
      )}
    </section>
  );
}
export default Provider;