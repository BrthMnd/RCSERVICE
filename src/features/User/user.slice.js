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
    newUser: () => {
      console.log("entro");
    },
  },
});
export const { newUser } = UserSlice.actions;
export default UserSlice.reducer;
