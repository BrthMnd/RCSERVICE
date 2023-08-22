import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: false,
};
export const ModalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    ChageValue: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { ChageValue } = ModalSlice.actions;
export default ModalSlice.reducer;
