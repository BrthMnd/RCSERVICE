/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { Tooltip } from "react-tooltip";

import {
  changeData,
  changeModal,
  changeUrl,
} from "../features/modal/moda.slice";

export function EditButton({ title, URL, table }) {
  const dispatch = useDispatch();
  const handleClickEdit = () => {
    dispatch(changeData(table));
    dispatch(changeModal(title));
    dispatch(changeUrl(URL));
  };
  return (
    <>
    {title != "Empleados"&& title!="Proveedores"&&  title!="Mis Contratos"&&
      <span
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        
      >
        <button
          data-tooltip-id="botonEdit"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#ModalFather"
          className="btn btn-warning"
          data-tooltip-content="Actualizar"
          onClick={handleClickEdit}
        >
          <i className="fas fa-edit"></i>
        </button>
        <Tooltip id="botonEdit" place="bottom" opacity={0.3}></Tooltip>
      </span>}
    </>
  );
}
