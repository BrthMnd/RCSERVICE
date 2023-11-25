import { useDispatch, useSelector } from "react-redux";
import {
  changeDataVoid,
  changeModalVoid,
} from "../../../features/modal/moda.slice";

export function ModalInfo() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.modal);
  const handleClick = () => {
    dispatch(changeDataVoid());
    dispatch(changeModalVoid());
  };

  return (
    <div
      className="modal fade"
      id="ModalInfo"
      tabIndex="-1"
      aria-labelledby="ModalInfoLabel"
      aria-hidden="true"
    >
      <div className={`modal-dialog modal-dialog-centered `}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalInfoLabel">
              {data.type}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClick}
            ></button>
          </div>
          <div className="modal-body">
            <InfoOfProperty property={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
function InfoOfProperty({ property }) {
  return (
    <TextSpecial value={property.data.nombreCompletoOwner} name={"Proveedor"} />
  );
}
function TextSpecial({ value, name }) {
  console.log(value);
  return (
    <p>
      <span className="fw-bold ">{name}:</span>
      {value}
    </p>
  );
}
