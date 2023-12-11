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
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputCalificacion" className="form-label">
            Calificación
          </label>
          <input
            type="float"
            className="form-control"
            id="inputCalificacion"
            placeholder="Ingrese la calificación"
            name="Rating"
          />
        </div>
      </div>
      {err && (
        <div className="alert alert-danger" id="alert__login" role="alert">
          {err}
        </div>
      )}

      <div className="col-12 text-end">
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </div>
    </form>
  );
};
