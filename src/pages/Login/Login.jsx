import axios from "../../libs/axios";
import LogoRc from "../../assets/img/LogoRc.png";

import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AlertIngresandoLogin } from "../../assets/js/Alerts";
import { SchemeLoginValidation } from "../../validations/loginSchemas.yup";
export function Login() {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const url = import.meta.env.VITE_URL_LOGIN;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = {
        password: e.target.password.value,
        email: e.target.email.value,
      };
      const isValid = await SchemeLoginValidation.validate(formdata);
      isValid;

      formdata;
      const res = await axios.post(url, formdata);
      ("paso...");

      if (res.data) {
        Cookies.set("token", res.data.token);
        ("todo bien...");
        navigate("/", { replace: true });
        window.location.reload();
      }
      res;
    } catch (error) {
      if (error.response && error.response.status == 500) {
        ("error 500");
        setErr(error.response.data.error);
      }
      if (error.response && error.response.status == 404) {
        ("error 404");
        setErr(error.response.data);
      }
      if (error.response && error.response.status == 400) {
        ("error 400");
        setErr(error.response.data.response);
      }
      if (error.errors) {
        setErr(error.errors);
      }
      error;
    }
  };
  return (
    <>
      <form
        className="login-container bg-gray d-flex justify-content-center align-items-center vh-100"
        onSubmit={handleSubmit}
      >
        <div
          className="login-content bg-white p-5 rounded-5 text-secondary"
          style={{ width: "25rem" }}
        >
          <div className="d-flex justify-content-center">
            <img
              src={LogoRc}
              alt="IMG LOGO"
              style={{
                width: "40%",
                backgroundColor: "black",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="text-center fs-1 fw-bold">Iniciar Sesión</div>
          <div className="input-group mt-4">
            <div className="input-group-text bg-gray">
              <i className="far fa-envelope"></i>
            </div>
            <input
              className="form-control bg-light"
              type="text"
              placeholder="Usuario"
              name="email"
            />
          </div>
          <div className="input-group mt-1">
            <div className="input-group-text bg-gray">
              <i className="fas fa-lock"></i>
            </div>
            <input
              className="form-control bg-light"
              type="password"
              placeholder="Contraseña"
              name="password"
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
                to="/recuperar_correo"
                className="text-decoration-none text-info fw-semibold fst-italic"
              >
                ¿Olvidaste la contraseña?
              </NavLink>
            </div>
          </div>
          <button
            className="btn btn-secondary text-white w-100 mt-4 fw-semibold shadow-sm"
            // onClick={AlertIngresandoLogin}
          >
            Ingresar
          </button>
          <div className="d-flex gap-1 justify-content-center mt-1">
            <div>¿No tienes una cuenta?</div>
            <NavLink
              to="/register"
              className="text-decoration-none text-info fw-semibold"
            >
              Registrarse
            </NavLink>
          </div>
          {err && (
            <div className="alert alert-danger" id="alert__login" role="alert">
              {err}
            </div>
          )}
        </div>
      </form>
    </>
  );
}
