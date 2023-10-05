import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { ApiGet } from "../../hooks/useApi";
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
      name: "comments",
      label: "Comentarios",
      sort: true,
    },
    {
      name: "rating",
      label: "Calificacion",
      sort: true,
      options: {
        customBodyRender: (value) => {
          const stars = "⭐".repeat(value); // Generar estrellas basadas en el valor de calificación
          return <div className="star-rating">{stars}</div>;
        },
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

// "_id": "64e90b3b99913205881b8187",
// "Comentarios": "muy mal servicio,deben mejorar",
// "CalificacionesFloat": 3,
// "__v": 0

function Rating() {
	let api = import.meta.env.VITE_API_URL;
  const url = api+"/api/proveedores/calificacion";
  const title = "Calificaciones";
  const [list, setList] = useState([]);

  let [data, loading, error] = ApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data.map((ratings, index) => {
        return {
          id: ratings._id,
          index: index + 1,
          comments: ratings.Comentarios,
          rating: ratings.CalificacionesFloat,
        };
      });
      setList(newList);
    }
  }, [data]);

  return (
    <section className="sections custom-mui-datatable" id="section__property">
      {loading && <div className="spinner"></div>}
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
export default Rating;
