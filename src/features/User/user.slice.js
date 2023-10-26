import { createSlice } from "@reduxjs/toolkit";

const user = {
  id: "",
  name: "",
  token: "",
  Authorization: false,
};
const UserSlice = createSlice({
  name: "user",
  initialState: user,
  reducers: {
    newUser: (state, payload) => {
      state.id = payload.id;
      state.name = payload.email;
      state.Authorization = true;
    },
    resetUser: (state) => {
      state.id = "";
      state.name = "";
      state.Authorization = false;
    },
  },
});
export const { newUser, resetUser } = UserSlice.actions;
export default UserSlice.reducer;
