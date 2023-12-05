import { createSlice } from "@reduxjs/toolkit";
import { comentariosConCalificacion } from "../DATAFAKE.SCORE";

const user = {
  id: "",
  email: "",
  name: "",
  password: "",
  direction: "",
  cc: "",
  phone: "",
  role: "",
  id_provider: "",
  category: null,
  score: null,
  Authorization: false,
  Loading: true,
};
const UserSlice = createSlice({
  name: "user",
  initialState: user,
  reducers: {
    newUser: (state, action) => {
      let data = action.payload;
      console.log(data);// aqui 🐱‍🏍
      state.id = data.id;
      state.id_provider = data.id_provider;
      state.email = data.email;
      state.name = data.name;
      state.cc = data.cc;
      state.direction = data.direction;
      state.phone = data.phone;
      state.role = data.role;
      state.score = data.score
      if (data.role == "Proveedores") {
        state.category = data.category;
      }
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
