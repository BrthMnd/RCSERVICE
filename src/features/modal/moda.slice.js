import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react"

const modalStatus = {
  status: false,
  type: "",
};
export const modalSlice = createSlice({
  name: "modal",
  initialState: modalStatus,
  reducers: {
    changeModal: (state, action) => {
      console.log(action.payload, "<- hola");
      state.type = action.payload;
    },
  },
});

export const { changeModal } = modalSlice.actions;
export default modalSlice.reducer;
