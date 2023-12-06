/* eslint-disable react/prop-types */
// OpenAdd.jsx
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { changeModal, changeUrl } from "../../features/modal/moda.slice";
import { Tooltip } from "react-tooltip";
export const OpenAdd = ({ children, IdModal, URL }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeModal(IdModal));
    URL;
    dispatch(changeUrl(URL));
  };

  return (
    <>
      <IconButton
      data-tooltip-id="botonAdd"
      data-tooltip-content="Crear"
        name="Add"
        id="Add"
        data-bs-toggle="modal"
        data-bs-target="#ModalFather"
        onClick={handleClick}
      >
        {children}
      </IconButton>
      <Tooltip id="botonAdd" place="right"></Tooltip>

    </>
  );
};
