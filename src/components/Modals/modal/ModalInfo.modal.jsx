import { useDispatch } from "react-redux";
import {
  changeDataVoid,
  changeModalVoid,
} from "../../../features/modal/moda.slice";

export function ModalInfo({ Titulo, children }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeDataVoid());
    dispatch(changeModalVoid());
  };
  return (
    <div
      className="modal fade"
      id="ModalInfo"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div>
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
  );
}
