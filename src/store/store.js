import { configureStore } from "@reduxjs/toolkit";
import modalReducers from "./../features/modal/moda.slice";

export const store = configureStore({
  reducer: {
    modal: modalReducers,
  },
});
