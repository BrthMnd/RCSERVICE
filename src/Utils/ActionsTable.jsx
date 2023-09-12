/* eslint-disable react/prop-types */
import { EditButton } from "./edit_button";
import { AlertDelete } from "../assets/js/Alerts";
export const ButtonAction = ({ tableMeta, list, url, title }) => {
  const rowData = list[tableMeta.rowIndex];

  return (
    <>
      <div className="buttons__actions">
        <EditButton title={title} table={rowData} URL={url} />
        <button
          type="button"
          className="btn btn-danger"
          // eslint-disable-next-line react-hooks/rules-of-hooks
          onClick={() => AlertDelete(url, rowData)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </>
  );
};
