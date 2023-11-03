import { configureStore } from "@reduxjs/toolkit";
import modalReducers from "./../features/modal/moda.slice";
import buttonAddReducers from "./../features/button/buttonAdd.slice";
import userReducer from "../features/user/userSlice";


export const store = configureStore({
  reducer: {
    modal: modalReducers,
    buttonAdd: buttonAddReducers,
    user: userReducer,
    devTools: process.env.NODE_ENV !== "production",
  },
});
