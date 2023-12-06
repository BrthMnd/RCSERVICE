/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { AlertDelete } from "../assets/js/Alerts";
import { changeReload } from "../features/modal/moda.slice";
import { Tooltip } from "react-tooltip";

export function DeleteBottom({ URL, table }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    AlertDelete(URL, table, "Actualizado")
      .then((res) => {
        res;
        if (res.isConfirmed) {
          dispatch(changeReload());
        }
      })
      .catch((e) => {
        e + "<- <-";
      });
  };
  return (
    <>
      <button
      data-tooltip-id="botonDelete"
      data-tooltip-content="Eliminar"
        type="button"
        className="btn btn-danger"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        
        onClick={handleClick}
      >
        <i className="fas fa-trash"></i>
      </button>
      <Tooltip id="botonDelete" place="bottom" opacity={0.3}></Tooltip>
    </>
  );
}
