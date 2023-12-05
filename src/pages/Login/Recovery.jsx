import { useState } from "react";
import axios from "../../libs/axios";
import { NavLink, useNavigate } from "react-router-dom";
import { AlertInfo } from "../../assets/js/Alerts";
import { SchemeRecoveryValidation } from "../../validations/loginSchemas.yup";
export function Recovery() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const url = import.meta.env.VITE_URL_RECOVERY;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = {
        email: e.target.email.value,
      };
      const validate = await SchemeRecoveryValidation.validate(formdata);
      validate;
      const res = await axios.post(url, formdata);
      res;
      if (res.data) {
        AlertInfo(
          "Correo enviado",
          "Tu correo para la recuperacion de contraseña a sido enviado."
        );
        navigate("/login");
      }
    } catch (error) {
      error;
      if (error.errors) {
        setError(error.errors);
      }
      if (error.response.data.message) {
        setError(error.response.data.message);
      }
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
            <i
              className="far fa-user-circle fa-lg"
              style={{ fontSize: "100px", paddingBottom: "20px" }}
            ></i>
          </div>
          <div className="text-center fs-1 fw-bold">Recuperar contraseña</div>
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
          {error && (
            <div className="alert alert-danger">
              <strong>{error}</strong>
            </div>
          )}

          <button
            className={`btn btn-secondary text-white w-100 ${
              error ? "mt-2" : "mt-4"
            } fw-semibold shadow-sm`}
          >
            Enviar Correo
          </button>
          <div className="d-flex gap-1 justify-content-center mt-1">
            <div>Tienes cuenta?</div>
            <NavLink
              to="/login"
              className="text-decoration-none text-info fw-semibold"
            >
              Ingresar
            </NavLink>
          </div>
          <div className="d-flex gap-1 justify-content-center mt-1">
            <div>No tienes una cuenta?</div>
            <NavLink
              to="/register"
              className="text-decoration-none text-info fw-semibold"
            >
              Registrar
            </NavLink>
          </div>
        </div>
      </form>
    </>
  );
}
