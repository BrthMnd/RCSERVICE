import { configureStore } from "@reduxjs/toolkit";
import modalReducers from "./../features/modal/moda.slice";
import buttonAddReducers from "./../features/button/buttonAdd.slice";
import AddressReducers from "./../features/modal/address.slice";
import userReducers from "../features/User/user.slice";
import user_registerReducers from "../features/User/user_register.slice";
export const store = configureStore({
  reducer: {
    modal: modalReducers,
    buttonAdd: buttonAddReducers,
    direction: AddressReducers,
    user: userReducers,
    user_register: user_registerReducers,
  },
});
