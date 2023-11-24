import { useDispatch } from "react-redux";
import {
  changeData,
  changeModal,
  changeUrl,
} from "../features/modal/moda.slice";

export function InfoButton({ title, URL, table }) {
  const dispatch = useDispatch();
  const handleClickEdit = () => {
    dispatch(changeData(table));
    dispatch(changeModal(title));
    dispatch(changeUrl(URL));
  };
  return (
    <>
      <span
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Mas información"
      >
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#ModalFather"
          className="btn btn-primary"
          onClick={handleClickInfo}
        >
          <i className="fas fa-info"></i>
        </button>
      </span>
    </>
  );
}