/* eslint-disable react-hooks/exhaustive-deps */
import { Index } from "./pages/";
import Blog from "./pages/blogs";
import "./assets/style/style.scss";
import "./assets/js/CloseModal";
import {
  Route,
  Routes,
  useNavigate,
  Navigate,
  useParams,
} from "react-router-dom";
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
import { Recovery } from "./pages/Login/Recovery";
import { ChangePassword } from "./pages/Login/ChangePassword";
import { CodeVerify } from "./pages/Login/CodeVerify";
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
        //logica de recarga y redirecciona a login
        if (!cookie.token) {
          ("no hay token");
          dispatch(setIsAuthenticate(false), resetUser());

          return;
        }
        ("hay token ");
        const res = await axios.post(url);
        if (!res.data) return dispatch(setIsAuthenticate(false));
        if (res.status == 400) {
          setErrors("Acceso Denegado...");
        }

        ("si autenticó!!! ");
        res.data;
        dispatch(setIsAuthenticate(true));
        dispatch(newUser(res.data));

        setAuthFinished(true);
      } catch (error) {
        if (error.status == 400) {
          setErrors("Acceso Denegado...");
        } else if (error.response && error.response.status == 400) {
          setErrors(error.response.data.message);
          Cookie.remove("token");
          navigate("/login");
        } else if (error.message && error.message == "Network Error") {
          setErrors("Error en la conexión a internet");
          navigate("/login");
        } else if (
          error.response.data.error &&
          error.response.data.error.name == "TokenExpiredError"
        ) {
          setErrors("Tu sesión a expirado...");
          Cookie.remove("token");
          navigate("/login");
        } else {
          error;
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
  const { token } = useParams();
  token;
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
              <Route path="/register" element={<Register />} exact />
              <Route path="/recuperar_correo" element={<Recovery />} exact />
              <Route path="/login" element={<Login />} exact />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}
          {authFinished && (
            <Route element={<ProtectedRoutes />}>
              <Route path="/*" element={<Index />} />
            </Route>
          )}
          <Route path="/ayuda" element={<Blog />} />
          {/*logica que me da el link de correo*/}
          <Route
            path="/confirmacion_correo/:token"
            element={<Register_form />}
          />
          <Route path="/recuperar_correo/:tokenKey" element={<CodeVerify />} />
          <Route path="/actualizar_contrasena" element={<ChangePassword />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
}

export default App;
