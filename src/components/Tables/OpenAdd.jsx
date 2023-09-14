/* eslint-disable react/prop-types */
// OpenAdd.jsx
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { changeModal, changeUrl } from "../../features/modal/moda.slice";
export const OpenAdd = ({ children, IdModal, URL }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeModal(IdModal));
    console.log(URL);
    dispatch(changeUrl(URL));
  };

  return (
    <>
      <IconButton
        name="Add"
        id="Add"
        data-bs-toggle="modal"
        data-bs-target="#ModalFather"
        onClick={handleClick}
      >
        {children}
      </IconButton>
    </>
  );
};
