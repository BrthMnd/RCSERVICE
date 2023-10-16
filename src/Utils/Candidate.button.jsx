/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import {
  changeData,
  changeModal,
  changeUrl,
} from "../features/modal/moda.slice";

export function CandidateButton({ title, URL, table }) {
  const canditeTitule = "Candidatos de Oferta";
  const Location = useSelector((state) => state.buttonAdd.Location);
  const dispatch = useDispatch();
  const handleCLick = () => {
    dispatch(changeModal(canditeTitule));
    dispatch(changeUrl(URL));
    dispatch(changeData(table));
  };

  if (Location == "/ofertas/oferta") {
    return (
      <>
        <span
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Seleccionar Proveedor"
        >
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#ModalFather"
            className="btn btn-info"
            onClick={() => handleCLick}
          >
            <i className="fas fa-id-badge"></i>
          </button>
        </span>
      </>
    );
  } else {
    return <></>;
  }
}
