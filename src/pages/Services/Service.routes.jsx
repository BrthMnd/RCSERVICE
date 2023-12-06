import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { ApiGet } from "../../hooks/useApi";
import { ButtonAction } from "../../Utils/ActionsTable";
import { ButtonStatus } from "../../Utils/CambiarEstado";
import { IconLoading } from "../../Utils/IconsLoading";
const ColumnsDefault = (list, url, title) => {
  return [
    
    {
      name: "nameService",
      label: "Nombre Servicio",
      sort: true,
    },
    {
      name: "description",
      label: "Descripción Servicio",
      sort: true,
    },
    {
      name: "nameCategority",
      label: "Categoría",
      sort: true,
    },
    {
      name: "estado",
      label: "Estado",
      sort: true,
      options: {
        // sort: false,
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
        // sort: false,<A
        filter: false,
        customBodyRender: (value, tableMeta) =>
          ButtonAction({ tableMeta, list, url, title, value }),
      },
    },
  ];
};

// "__v": 0

function Service() {
  const url = "/proveedores/Servicios";
  const title = "Servicio";
  const [list, setList] = useState([]);

  let [data, loading, error] = ApiGet(url);
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
          estado: estado,
          nameCategority: service.Categoria_Servicio
            ? service.Categoria_Servicio.Nombre_Categoria
            : "N/A",
          id_category: service.Categoria_Servicio._id,
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
export default Service;
