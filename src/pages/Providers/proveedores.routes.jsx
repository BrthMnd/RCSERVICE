import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { ApiGet } from "../../hooks/useApi";
import { ButtonAction } from "../../Utils/ActionsTable";
import { IconLoading } from "../../Utils/IconsLoading";
import { ConfigStyleEmail } from "../../Utils/EmailTable.style";
const ColumnsDefault = (list, url, title) => {
  return [
    {
      name: "documento",
      label: "documento",
    },
    {
      name: "name",
      label: "Nombre Proveedor",
      sort: true,
    },
    {
      name: "email",
      label: "email",
      options: ConfigStyleEmail,
    },
    {
      name: "phone",
      label: "Teléfono",
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

function Provider() {
  const url = import.meta.env.VITE_URL_USER;
  const title = "Proveedores";
  const [list, setList] = useState([]);

  let [data, loading, error] = ApiGet(url);

  useEffect(() => {
    if (data) {
      const newList = data
        .filter(
          (items) =>
            items.role == "Proveedores" && items.email != "admin@gmail.com"
        )
        .map((user, index) => {
          console.log("😁", user.roleRef.categoriaServicio);
          return {
            id: user._id,
            index: index + 1,
            documento: user.roleRef.documento,
            email: user.email,
            name: user.roleRef.nombre,
            phone: user.roleRef.telefono,
            Address: user.roleRef.direccion,
            categories: user.roleRef.categoriaServicio.map(
              (categoryId) => categoryId
            ),
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
