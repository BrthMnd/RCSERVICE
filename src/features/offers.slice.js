import { createSlice } from "@reduxjs/toolkit";

const initial = {
  Category: null,
};
const OffersSlice = createSlice({
  name: "offers",
  initialState: initial,
  reducers: {
    ChangeStateOffers: (state, actions) => {
      state.Category = actions.payload;
    },
  },
});

export const { ChangeStateOffers } = OffersSlice.actions;

export default OffersSlice.reducer;
