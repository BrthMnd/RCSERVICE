/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { ApiPost } from "../../../hooks/useApi";
import { useEffect, useState } from "react";
import { changeDataVoid } from "../../../features/modal/moda.slice";
import { CalificationValidation } from "../../../validations/validation.yup";

export const ModalCalificar = () => {
  const URLPropia = "/proveedores/calificacion";
  const [err, setErr] = useState(null);
  const dispatch = useDispatch();

  let data = useSelector((state) => state.modal.data);

  const HandlePost = async (e) => {
    e.preventDefault();
    try {
      const resultado = {
        id: data.id, // <-
        Comentarios: e.target.Comments.value,
        CalificacionesFloat: e.target.Rating.value,
      };
      const isValid = await CalificationValidation.validate(resultado);

      isValid && setErr(null);

      const res = await ApiPost(URLPropia, resultado);
      console.log("🚀 ~ file: Calificar.modal.jsx:28 ~ HandlePost ~ res:", res);

      dispatch(changeDataVoid());

      // Recargar la página después de un envío exitoso
      window.location.reload();
    } catch (error) {
      console.log(error);
      if (error.errors) {
        setErr(error.errors);
        return;
      }
    }
  };

  return (
    <div
      className="modal fade"
      id="CalificarModal"
      aria-hidden="true"
      aria-labelledby="CalificarModalLabel"
      tabIndex="-2"
    >
      <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content">
          <Form HandlePost={HandlePost} err={err} />
        </div>
      </div>
    </div>
  );
};
const Form = ({ HandlePost, err }) => {
  return (
    <div class="card">
      <div class="card-header">Calificación y Comentario</div>
      <div class="card-body">
        <form className="row g-3" onSubmit={HandlePost}>
          <div className="col-md-12">
            <div className="mb-3">
              <label htmlFor="inputCalificacion" className="form-label">
                Calificación
              </label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                className="form-control"
                id="inputCalificacion"
            
                name="Rating"
                required
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="mb-3">
              <label htmlFor="inputComentarios" className="form-label">
                Comentarios
              </label>
              <textarea
              style={{ resize: "none", height: "100px" }}
                className="form-control"
                id="inputComentarios"
                
                name="Comments"
                rows="3"
              ></textarea>
            </div>
          </div>

          {err && (
            <div className="col-md-12">
              <div className="alert alert-danger" role="alert">
                {err}
              </div>
            </div>
          )}

          <div className="col-md-12 text-center">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
