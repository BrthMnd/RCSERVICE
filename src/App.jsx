/* eslint-disable react-hooks/exhaustive-deps */
import { Index } from "./pages/";
import Blog from "./pages/blogs";
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
import { IconLoading } from "./Utils/IconsLoading";
import { AlertErrorLog } from "./assets/js/Alerts";
import { Register_form } from "./pages/Login/register_form";
const url = import.meta.env.VITE_URL_VERIFYTOKEN;

function App() {
  const [authFinished, setAuthFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
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
        if (res.status == 400) {
          setErrors("Acceso Inautorizado...");
        }

        console.log("si autenticó!!! ");
        console.log(res.data);
        dispatch(setIsAuthenticate(true));
        dispatch(newUser(res.data));

        setAuthFinished(true);
      } catch (error) {
        if (error.status == 400) {
          setErrors("Acceso Denegado...");
        } else if (
          error.response.data.error &&
          error.response.data.error.name == "TokenExpiredError"
        ) {
          setErrors("Tu sesión a expirado...");
        } else {
          console.log(error);
          setErrors("A ocurrido un error");
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    }
    Pass();
  }, []);

  if (errors) {
    AlertErrorLog(errors);
  }
  return (
    <>
      {loading && (
        <div style={{ height: "100vh" }}>
          <IconLoading isLoading={loading} />
        </div>
      )}
      {!loading && (
        <Routes>
          {!authFinished && (
            <>
              <Route path="/login" element={<Login />} exact />
              <Route path="/register" element={<Register />} exact />
              <Route path="/register_form" element={<Register_form />} exact />
            </>
          )}
          {authFinished && (
            <Route element={<ProtectedRoutes />}>
              <Route path="/*" element={<Index />} />
            </Route>
          )}
          <Route path="/ayuda" element={<Blog />} />
        </Routes>
      )}
    </>
  );
}

export default App;
