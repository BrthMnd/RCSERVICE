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
      label: "documento",
    },
    {
      name: "name",
      label: "Nombre Proveedor",
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
      name: "nameCategority",
      label: "Categoría",
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
  const url = "/proveedores/proveedor";
  const title = "Proveedores";
  const [list, setList] = useState([]);

  let [data, loading, error] = ApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data.map((provider, index) => {
        function getCategoriasServicio(listaCategorias) {
          if (listaCategorias.length > 0) {
            return listaCategorias
              .map((categoria) => categoria.Nombre_Categoria)
              .join(" - ");
          } else {
            return "Sin Categoría";
          }
        }
        console.log(provider.documento);

        return {
          id: provider._id,
          index: index + 1,
          documento: provider.documento,
          //
          name: provider.nombre,
          phone: provider.telefono,
          Email: provider.email,
          Address: provider.direccion,
          nameCategority: getCategoriasServicio(provider.categoriaServicio),
          // ids
          id_category: provider.categoriaServicio,
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
