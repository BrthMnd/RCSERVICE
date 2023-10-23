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
          ButtonAction({ tableMeta, list, url, title }),
      },
    },
  ];
};

function Provider() {
  const url = "https://rcservice.onrender.com/api/proveedores/proveedor";
  const title = "Proveedores";
  const [list, setList] = useState([]);

  let [data, loading, error] = ApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data.map((provider, index) => {
        let nombreCompleto = `${provider.Nombre} ${provider.Apellido}`;

        return {
          id: provider._id,
          index: index + 1,
          nameProvider: nombreCompleto,
          name: provider.Nombre,
          lastname: provider.Apellido,
          phone: provider.telefono,
          Email: provider.Email,
          Address: provider.Direccion,
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
export default Provider;
