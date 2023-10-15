/* eslint-disable react/prop-types */
import { EditButton } from "./edit_button";
// import { AlertDelete } from "../assets/js/Alerts";
import { CandidateButton } from "./Candidate.button";
import { DeleteBottom } from "./delete.botton";
export const ButtonAction = ({ tableMeta, list, url, title }) => {
  const rowData = list[tableMeta.rowIndex];
  return (
    <>
      <div className="buttons__actions">
        <CandidateButton title={title} table={rowData} URL={url} />
        <EditButton title={title} table={rowData} URL={url} />
        <DeleteBottom title={title} table={rowData} URL={url} />
      </div>
    </>
  );
};
