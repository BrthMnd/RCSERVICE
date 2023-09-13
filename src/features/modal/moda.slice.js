import { createSlice } from "@reduxjs/toolkit";

const modalStatus = {
  status: false,
  data: {},
  type: "",
  url: "",
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
  },
});

export const {
  changeModal,
  changeData,
  changeModalVoid,
  changeDataVoid,
  changeUrl,
  changeUrlVoid,
} = modalSlice.actions;
export default modalSlice.reducer;
