import { configureStore } from "@reduxjs/toolkit";
import modalReducers from "./../features/modal/moda.slice";
import buttonAddReducers from "./../features/button/buttonAdd.slice";

export const store = configureStore({
  reducer: {
    modal: modalReducers,
    buttonAdd: buttonAddReducers,
  },
});
