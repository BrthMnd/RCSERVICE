/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import {
  changeData,
  changeModal,
  changeUrl,
} from "../features/modal/moda.slice";
import { Tooltip } from "react-tooltip";

export function CandidateButton({ table }) {
  const CandidateTitule = "Candidatos de Oferta";
  const Location = useSelector((state) => state.buttonAdd.Location);
  const dispatch = useDispatch();
  const handleCLick = () => {
    dispatch(changeModal(CandidateTitule));
    dispatch(changeUrl(import.meta.env.VITE_URL_CANDIDATE_FOR_OFFER));
    dispatch(changeData(table));
  };

  if (Location == "/ofertas/oferta" && table.Status == 'Disponible') {
    return (
      <>
        <span
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Seleccionar Proveedor"
        >
          <button
          data-tooltip-id="botonCandidato"
          data-tooltip-content="Candidatos"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#ModalFather"
            className="btn btn-info"
            onClick={handleCLick}
          >
            <i className="fas fa-id-badge"></i>
          </button>
          <Tooltip id="botonCandidato" place="bottom" opacity={0.4}></Tooltip>
        </span>
      </>
    );
  } else {
    return <></>;
  }
}
