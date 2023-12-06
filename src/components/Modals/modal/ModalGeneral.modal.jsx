import { useDispatch } from "react-redux";
import {
  changeDataVoid,
  changeModalVoid,
} from "../../../features/modal/moda.slice";

import { Tooltip } from "react-tooltip";

export function ModalGeneral({ titleProperty, Titulo, children }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeDataVoid());
    dispatch(changeModalVoid());
  };

  return (
    <div
      className="modal fade"
      id="ModalFather"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div
        className={`modal-dialog modal-dialog-centered ${
          // Titulo == "Candidatos de Oferta" ? "modal-xl" : "modal-lg"
          titleProperty()
        }`}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {Titulo}
            </h5>
            <button
            data-tooltip-id="botonCerrar"
            data-tooltip-content="Cerrar"
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClick}
            ></button>
            <Tooltip id="botonCerrar" place="bottom" ></Tooltip>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
