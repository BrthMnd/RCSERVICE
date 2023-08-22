import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: false,
};
export const ModalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setModelValue: (state) => {
      state.status = true;
      console.log(state.status);
    },
  },
});

export const { setModelValue } = ModalSlice.actions;
export default ModalSlice.reducer;
