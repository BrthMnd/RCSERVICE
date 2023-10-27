/* eslint-disable react-hooks/exhaustive-deps */
import { Index } from "./pages/";
import "./assets/style/style.scss";
import "./assets/js/CloseModal";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { ProtectedRoutes } from "./pages/ProtectedRoutes";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import axios from "./libs/axios";
import { useDispatch } from "react-redux";
import {
  newUser,
  resetUser,
  setIsAuthenticate,
} from "./features/User/user.slice";
import { Register } from "./pages/Login/Register";
const url = import.meta.env.VITE_URL_VERIFYTOKEN;

function App() {
  const [authFinished, setAuthFinished] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    async function Pass() {
      const cookie = Cookie.get();
      try {
        if (!cookie.token) {
          console.log("no hay token");
          dispatch(setIsAuthenticate(false), resetUser());
          navigate("/login");
          return;
        }
        console.log("hay token ");
        const res = await axios.post(url);
        if (!res.data) return dispatch(setIsAuthenticate(false));

        console.log("si autenticó!!! ");
        console.log(res.data);
        dispatch(setIsAuthenticate(true), newUser(res.data));
        setAuthFinished(true);
      } catch (error) {
        console.log("ERROR !!! ");
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
        {authFinished && (
          <Route element={<ProtectedRoutes />}>
            <Route path="/*" element={<Index />} />
          </Route>
        )}
      </Routes>
    </>
  );
}

export default App;
