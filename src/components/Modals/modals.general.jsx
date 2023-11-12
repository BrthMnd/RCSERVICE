/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import {
  changeDataVoid,
  changeModalVoid,
} from "../../features/modal/moda.slice";
// eslint-disable-next-line no-unused-vars
export function Modal({ children }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeDataVoid());
    dispatch(changeModalVoid());
  };
  const Titulo = useSelector((state) => state.modal.type);
  const titleProperty = () => { 
    if(Titulo == 'Candidatos de Oferta' || Titulo == 'Inmueble' || Titulo == 'Encargado' || Titulo == 'Propietario'){
    return "modal-xl"
  }else{
    return "modal-lg"
  } 
}
  return (
    <>
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
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClick}
              ></button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
