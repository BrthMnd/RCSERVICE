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
      name: "documento",
      label: "Documento",
    },
    {
      name: "name",
      label: "Nombre de Empleado",
      sort: true,
    },
    {
      name: "phone",
      label: "Teléfono",
      sort: true,
    },
    {
      name: "Email",
      label: "Correo",
      sort: true,
    },
    {
      name: "Address",
      label: "Dirección",
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

function Employed() {
  const url = import.meta.env.VITE_URL_USER;
  const title = "Empleados";
  const [list, setList] = useState([]);

  let [data, loading, error] = ApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data
        .filter((items) => items.role == "Employed")
        .map((user, index) => {
          return {
            id: user._id,
            index: index + 1,
            documento: user.roleRef.documento,
            //
            Email: user.email,
            name: user.roleRef.nombre,
            phone: user.roleRef.telefono,
            Address: user.roleRef.direccion,
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
export default Employed;
