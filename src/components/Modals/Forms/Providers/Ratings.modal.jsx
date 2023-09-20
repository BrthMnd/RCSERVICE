import { useDispatch, useSelector } from "react-redux";
import { ApiPost } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import { changeDataVoid } from "../../../../features/modal/moda.slice";

export const RatingsModal = () => {
  const URLPropia =
    "https://rcservice.onrender.com/api/proveedores/calificacion";
  const [empty, setEmpty] = useState(true);
  const dispatch = useDispatch();

  let data = useSelector((state) => state.modal.data);

  const HandlePost = (e) => {
    e.preventDefault();

    const resultado = {
      Comentarios: e.target.Comments.value,
      CalificacionesFloat: e.target.Rating.value,
    };

    ApiPost(URLPropia, resultado);
    dispatch(changeDataVoid());
  };

  useEffect(() => {
    console.log("effect");
    if (Object.keys(data).length !== 0) {
      setEmpty(false);
    }
  }, [data]);

  return (
    <>
      <form className="row g-3" onSubmit={HandlePost}>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="inputComentarios" className="form-label">
              Comentarios
            </label>
            <input
              type="text"
              className="form-control"
              id="inputComentarios"
              placeholder="Ingrese los comentarios"
              name="Comments"
              defaultValue={empty ? "" : data.Comentarios}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputCalificacion" className="form-label">
              Calificación
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCalificacion"
              placeholder="Ingrese la calificación"
              name="Rating"
              defaultValue={empty ? "" : data.CalificacionesFloat}
            />
          </div>
        </div>

        <div className="col-12 text-end">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};
