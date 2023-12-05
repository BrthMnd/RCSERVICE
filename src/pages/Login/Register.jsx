import { NavLink, useNavigate } from "react-router-dom";
import axios from "../../libs/axios";
import { useState } from "react";
import { SaveUser } from "../../features/User/user_register.slice";
import { useDispatch } from "react-redux";
import { AlertInfo } from "../../assets/js/Alerts";
import { SchemeRegisterValidation } from "../../validations/loginSchemas.yup";
export function Register() {
  const dispatch = useDispatch();
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const url = import.meta.env.VITE_URL_VERIFY_REGISTER;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        password: e.target.password.value,
        password_verify: e.target.password_verify.value,
        email: e.target.email.value,
      };
      const isValid = await SchemeRegisterValidation.validate(formData);
      "🐸", isValid;
      if (formData.password != formData.password_verify) {
        setErr("las contraseñas no coinciden");
        return;
      }
      const res = await axios.post(url, formData);
      res.data;
      if (res.status && res.status === 200) {
        res.data.message;
        dispatch(SaveUser(formData));
        AlertInfo(
          "Confirma el correo...",
          "Revisa tu correo y confirma tu cuenta e-mail"
        );
        navigate("/login");
      } else {
        "hubo un error: " + res;
        setErr(res.data.message);
      }
    } catch (error) {
      if (error.errors) {
        setErr(error.errors);
      }
      ("Ha ocurrido un error");
      error;
      if (error.response && error.response.status == 409) {
        setErr(error.response.data.message);
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
          <div className="text-center fs-1 fw-bold">Registro</div>
          <div className="input-group mt-4">
            <div className="input-group-text bg-gray">
              <i className="fas fa-at "></i>
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
              <i className="fas fa-unlock"></i>
            </div>
            <input
              className="form-control bg-light"
              type="password"
              placeholder="Contraseña"
              name="password"
              required
            />
          </div>
          <div className="input-group mt-1">
            <div className="input-group-text bg-gray">
              <i className="fas fa-unlock"></i>
            </div>
            <input
              className="form-control bg-light"
              type="password"
              placeholder="Confirmar contraseña"
              name="password_verify"
              required
            />
          </div>

          <button className="btn btn-secondary text-white w-100 mt-4 fw-semibold shadow-sm">
            Registrarse
          </button>
          <div className="d-flex gap-1 justify-content-center mt-1">
            <div>Tienes Cuenta?</div>
            <NavLink
              to="/login"
              className="text-decoration-none text-info fw-semibold"
              onClick={() => dispatch(SaveUser({}))}
            >
              Ingresar
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
