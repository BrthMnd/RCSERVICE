// OpenAdd.jsx
import React from "react";
import IconButton from "@mui/material/IconButton";

import { useDispatch, useSelector } from "react-redux"; // Aquí estás importando useDispatch
import { setModelValue } from "../../store/modalSlice";

export const OpenAdd = ({ children }) => {
  const dispatch = useDispatch();
  const modalsStatus = useSelector((state) => state.modals.status);

  const onClick = () => {
    dispatch(setModelValue());
    console.log(modalsStatus);
  };
  return (
    <>
      <IconButton name="Add" id="Add" onClick={() => onClick()}>
        {children}
      </IconButton>
    </>
  );
};
