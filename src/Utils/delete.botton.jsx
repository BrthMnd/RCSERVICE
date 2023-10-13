/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { AlertDelete } from "../assets/js/Alerts";

export function DeleteBotton({ title, URL, table }) {
  return (
    <>
      <button
        type="button"
        className="btn btn-danger"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Eliminar"
        onClick={() => AlertDelete(title, table, "Actualizado")}
      >
        <i className="fas fa-trash"></i>
      </button>
    </>
  );
}
