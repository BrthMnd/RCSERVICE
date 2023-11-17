import { createSlice } from "@reduxjs/toolkit";

const statebasic = {
  password: "",
  email: "",
};
const User_Register_Slice = createSlice({
  name: "user_register",
  initialState: statebasic,
  reducers: {
    SaveUser: (state, action) => {
      let data = action.payload;
      state.password = data.password;
      state.email = data.email;
    },
  },
});
export const { SaveUser } = User_Register_Slice.actions;
export default User_Register_Slice.reducer;
