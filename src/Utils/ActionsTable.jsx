/* eslint-disable react/prop-types */
import { EditButton } from "./edit_button";
// import { AlertDelete } from "../assets/js/Alerts";
import { CandidateButton } from "./Candidate.button";
import { DeleteBottom } from "./delete.botton";
import { useSelector } from "react-redux";
import { ApplyButton } from "./Apply.button";
import { InfoButton } from "./Info.button";
import { useLocation } from "react-router-dom";
export const ButtonAction = ({ tableMeta, list, url, title }) => {
  const rowData = list[tableMeta.rowIndex];

  return <Permisos rowData={rowData} list={list} url={url} title={title} />;
};

function Permisos({ rowData, list, url, title }) {
  const location = useLocation();
  const role = useSelector((state) => state.user.role);

  return (
    <div className="buttons__actions">
      {role == "Proveedores" ? (
        <ApplyButton title={title} table={rowData} URL={url} />
      ) : (
        <>
          <InfoButton title={title} table={rowData} URL={url} />
          <CandidateButton title={title} table={rowData} URL={url} />
          {location.pathname !== "/ofertas/contrato" && (
            <EditButton title={title} table={rowData} URL={url} />
          )}
          {rowData.Status && rowData.Status != "Disponible" ? (
            <></>
          ) : (
            <DeleteBottom title={title} table={rowData} URL={url} />
          )}
        </>
      )}
    </div>
  );
}
