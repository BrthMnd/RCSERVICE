/* eslint-disable react/prop-types */
import { EditButton } from "./edit_button";
import { AlertDelete } from "../assets/js/Alerts";
import { CandidateButton } from "./Candidate.button";
export const ButtonAction = ({ tableMeta, list, url, title }) => {
  const rowData = list[tableMeta.rowIndex];
  return (
    <>
      <div className="buttons__actions">
        <CandidateButton title={title} table={rowData} URL={url} />
        <EditButton title={title} table={rowData} URL={url} />
        <button
          type="button"
          className="btn btn-danger"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Eliminar"
          onClick={() => AlertDelete(url, rowData, "Actualizado")}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </>
  );
};
