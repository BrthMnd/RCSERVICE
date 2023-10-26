/* eslint-disable react-hooks/exhaustive-deps */
import { Index } from "./pages/";
import "./assets/style/style.scss";
import "./assets/js/CloseModal";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { ProtectedRoutes } from "./pages/ProtectedRoutes";
import { useEffect } from "react";
import Cookie from "js-cookie";
import axios from "./libs/axios";
import { useDispatch } from "react-redux";
import { newUser } from "./features/User/user.slice";
import { Register } from "./pages/Login/Register";
const url = import.meta.env.VITE_URL_VERIFYTOKEN;
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function Pass() {
      try {
        const cookie = Cookie.get();
        if (cookie.token) {
          console.log("entro a verificar el token " + url);
          const VerifyToken = await axios.get(url);
          console.log("verify token" + VerifyToken);
          if (VerifyToken.data) {
            dispatch(newUser());
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    Pass();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} replace />
        <Route path="/register" element={<Register />} replace />
        <Route element={<ProtectedRoutes />}>
          <Route path="/*" element={<Index />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
