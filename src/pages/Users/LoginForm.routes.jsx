import React, {useState} from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom"; // Importa NavLink
import "../../assets/style/partials/_auth.scss";
import { ApiPost } from "../../hooks/useApi";
const url = import.meta.env.VITE_URL_LOGIN;
import { useDispatch, useSelector } from 'react-redux'
import { Log } from "../../features/user/userSlice"


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    const usuario = {
      userName: e.target.usuario.value,
      password: e.target.password.value,
    };

    try {
      const res = await ApiPost(url, usuario);
      console.log(usuario);
      dispatch(Log(true));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <form
      className="login-container bg-gray d-flex justify-content-center align-items-center vh-100"
      onSubmit={handleSubmit}
    >
      <div
        className="login-content bg-white p-5 rounded-5 text-secondary"
        style={{ width: "25rem" }}
      >
        <div className="d-flex justify-content-center">
          <i
            className="far fa-user-circle fa-lg"
            style={{ fontSize: "100px", paddingBottom: "20px" }}
          ></i>
        </div>
        <div className="text-center fs-1 fw-bold">Iniciar Sesión</div>
        <div className="input-group mt-4">
          <div className="input-group-text bg-gray">
            <img
              src="../../assets/img/LogoRc.png"
              alt="username-icon"
              style={{ height: "1rem" }}
            />
          </div>
          <input
            className="form-control bg-light"
            type="email"
            placeholder="Usuario"
            name="usuario"
            required
          />
        </div>
        <div className="input-group mt-1">
          <div className="input-group-text bg-gray">
            <img
              src="../../assets/img/LogoRc.png"
              alt="password-icon"
              style={{ height: "1rem" }}
            />
          </div>
          <input
            className="form-control bg-light"
            type="password"
            placeholder="Contraseña"
            name="password"
            required
          />
        </div>
        <div className="d-flex justify-content-around mt-1">
          <div className="d-flex align-items-center gap-1">
            <input className="form-check-input" type="checkbox" />
            <div className="pt-1" style={{ fontSize: "0.9rem" }}>
              Recordarme
            </div>
          </div>
          <div className="pt-1">
            <NavLink
              to="/olvidar-contrasena"
              className="text-decoration-none text-info fw-semibold fst-italic"
            >
              ¿Olvidaste la contraseña?
            </NavLink>
          </div>
        </div>
        <button className="btn btn-secondary text-white w-100 mt-4 fw-semibold shadow-sm">
          Ingresar
        </button>
        <div className="d-flex gap-1 justify-content-center mt-1">
          <div>¿No tienes una cuenta?</div>
          <NavLink
            to="/registro"
            className="text-decoration-none text-info fw-semibold"
          >
            Registrarse
          </NavLink>
        </div>
      </div>
    </form>
  );
}

export default Login;
