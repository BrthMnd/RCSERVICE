import { createSlice } from "@reduxjs/toolkit";

const modalStatus = {
  data: {},
  type: "",
  url: "",
  reload: 0,
};
export const modalSlice = createSlice({
  name: "modal",
  initialState: modalStatus,
  reducers: {
    changeModal: (state, action) => {
      state.type = action.payload;
    },
    changeModalVoid: (state) => {
      state.type = "";
    },
    changeData: (state, action) => {
      state.data = action.payload;
    },
    changeUrl: (state, action) => {
      state.url = action.payload;
    },
    changeUrlVoid: (state) => {
      state.url = "";
    },
    changeDataVoid: (state) => {
      state.data = {};
    },
    changeReload: (state) => {
      state.reload = state.reload + 1;
    },
  },
});

export const {
  changeModal,
  changeData,
  changeModalVoid,
  changeDataVoid,
  changeUrl,
  changeUrlVoid,
  changeReload,
} = modalSlice.actions;
export default modalSlice.reducer;
