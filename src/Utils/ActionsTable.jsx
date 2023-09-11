/* eslint-disable react/prop-types */
import { ApiDelete } from "../hooks/useApi";
import { EditButton } from "./edit_button";
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
          onClick={() => ApiDelete(url, rowData)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </>
  );
};
