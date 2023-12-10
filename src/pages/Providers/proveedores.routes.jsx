import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { ApiGet } from "../../hooks/useApi";
import { ButtonAction } from "../../Utils/ActionsTable";
import { IconLoading } from "../../Utils/IconsLoading";
import { ButtonStatus } from "../../Utils/CambiarEstado";
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
      label: "Correo",
      options: ConfigStyleEmail,
    },
    {
      name: "phone",
      label: "Teléfono",
      sort: true,
    },
    {
      name: "contratado",
      label: "Estado Disponibilidad",
      sort: true,
    },
    {
      name: "estado",
      label: "Estado Cuenta",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta) => (
          <ButtonStatus
            value={value}
            tableMeta={tableMeta}
            list={list}
            url={url}
            title={title}
          />
        ),
      },
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
  console.log("🐩", data);

  useEffect(() => {
    if (data) {
      const newList = data
        .filter(
          (items) =>
            items.role == "Proveedores" && items.email != "admin@gmail.com"
        )
        .map((user, index) => {
          let Estado = user.estado;
          let estado = Estado ? "Activo" : "Inactivo";
          let Contratado = user.roleRef.Contratado;
          let contratado = Contratado ? "Contratado" : "Disponible";

          return {
            id: user._id,
            index: index + 1,
            documento: user.roleRef.documento,
            email: user.email,
            name: user.roleRef.nombre,
            phone: user.roleRef.telefono,
            Address: user.roleRef.direccion,
            contratado: contratado,
            estado: estado,
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
