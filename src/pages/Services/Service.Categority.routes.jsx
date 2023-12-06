import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { ApiGet } from "../../hooks/useApi";
import { ButtonAction } from "../../Utils/ActionsTable";
import { ButtonStatus } from "../../Utils/CambiarEstado";
import { IconLoading } from "../../Utils/IconsLoading";

const ColumnsDefault = (list, url, title) => {
  return [
    
    {
      name: "nombreCategoria",
      label: "Nombre Categoría",
    },
    {
      name: "descripcion",
      label: "Descripción Categoría",
    },
    {
      name: "Estado",
      label: "Estado Categoría",
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
        // sort: false,
        filter: false,
        customBodyRender: (value, tableMeta) =>
          ButtonAction({ value, tableMeta, list, url, title }),
      },
    },
  ];
};

function CategorityService() {
  const url = "/proveedores/Categoria";
  const title = "Categoría Servicio";
  const [list, setList] = useState([]);

  let [data, loading, error] = ApiGet(url); // trae en automatico

  useEffect(() => {
    if (data) {
      const newList = data.map((Categority, index) => {
        let CategoriaEstado = Categority.estado;
        let estado = CategoriaEstado ? "Activo" : "Inactivo";

        return {
          id: Categority._id,
          index: index + 1,
          nombreCategoria: Categority.Nombre_Categoria,
          descripcion: Categority.Descripcion,
          fechaCreacion: Categority.Fecha_Creacion,
          Estado: estado,
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
export default CategorityService;
