import { createSlice } from "@reduxjs/toolkit";

const initial = {
  Location: "",
};
export const buttonAdd = createSlice({
  name: "buttonAdd",
  initialState: initial,
  reducers: {
    ChangeLocation: (state, action) => {
      state.Location = action.payload;
    },
  },
});

export const { ChangeLocation } = buttonAdd.actions;
export default buttonAdd.reducer;
