import { createSlice } from "@reduxjs/toolkit";

const modalStatus = {
  status: false,
  data: {},
  type: "",
};
export const modalSlice = createSlice({
  name: "modal",
  initialState: modalStatus,
  reducers: {
    changeModal: (state, action) => {
      console.log(action.payload, "<- CAMBIO DE ESTADO DE MODAL");
      state.type = action.payload;
    },
    changeModalVoid: (state) => {
      console.log("-> CAMBIO DE ESTADO DE MODAL A VACIO <-");
      state.type = "";
    },
    changeData: (state, action) => {
      console.log(action.payload, "<- Log de datos");
      state.data = action.payload;
    },
    changeDataVoid: (state) => {
      console.log("-> CAMBIO DE Datos DE MODAL A VACIO <-");
      state.type = "";
    },
  },
});

export const { changeModal, changeData, changeModalVoid, changeDataVoid } =
  modalSlice.actions;
export default modalSlice.reducer;
