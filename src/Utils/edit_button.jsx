/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { changeData, changeModal } from "../features/modal/moda.slice";

export function EditButton({ title, URL, table }) {
  const dispatch = useDispatch();
  const modal = useSelector((State) => State.modal.type);
  const handleClickEdit = () => {
    console.log(modal, ":EDIT");
    console.log(title, "<->", URL, "<->", table);
    dispatch(changeData(table));
    dispatch(changeModal(title));
  };
  return (
    <>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        className="btn btn-warning"
        onClick={handleClickEdit}
      >
        <i className="fas fa-edit"></i>
      </button>
    </>
  );
}
