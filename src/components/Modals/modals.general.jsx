/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { changeModalVoid } from "../../features/modal/moda.slice";
// eslint-disable-next-line no-unused-vars
export function Modal({ children }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeModalVoid());
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal
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
