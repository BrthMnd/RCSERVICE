import { configureStore } from "@reduxjs/toolkit";
import modalsReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    modals: modalsReducer,
  },
});
