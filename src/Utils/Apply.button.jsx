/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
  changeData,
  changeModal,
  changeUrl,
} from "../features/modal/moda.slice";

export function ApplyButton({ title, URL, table }) {
  const dispatch = useDispatch();
  const HandleClick = () => {
    // dispatch(changeData(table));
    // dispatch(changeModal(title));
    // dispatch(changeUrl(URL));
  };
  return (
    <>
      <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Aplicar">
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#ModalFather"
          className="btn btn-success"
          onClick={HandleClick}
        >
          <i class="far fa-check-circle"></i>
          Aplicar
        </button>
      </span>
    </>
  );
}
