import { createSlice } from "@reduxjs/toolkit";

const user = {
  id: "",
  email: "",
  token: "",
  Authorization: false,
  Loading: true,
};
const UserSlice = createSlice({
  name: "user",
  initialState: user,
  reducers: {
    newUser: (state, action) => {
      let data = action.payload;
      state.id = data.id;
      state.email = data.email;
    },
    resetUser: (state) => {
      state.id = "";
      state.email = "";
    },
    setIsAuthenticate: (state, action) => {
      state.Authorization = action.payload;
    },
    setIsLoading: (state, action) => {
      state.Loading = action.payload;
    },
  },
});
export const { newUser, resetUser, setIsAuthenticate, setIsLoading } =
  UserSlice.actions;
export default UserSlice.reducer;
