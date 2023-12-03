import { useSelector } from "react-redux";
import { AlertSuccess } from "../../assets/js/Alerts";
import axios from "../../libs/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export function ChangePassword() {
  const user = useSelector((state) => state.user_register);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const url = import.meta.env.VITE_URL_UPDATE_PASSWORD;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (e.target.password.value !== e.target.confirm_password.value) {
        return setError("Las constrasenas no coinciden...");
      }
      const formdata = {
        email: user.email,
        password: e.target.password.value,
      };
      console.log(formdata);
      const res = await axios.post(url, formdata);
      console.log(res);
      if (res.data) {
        AlertSuccess("Contraseña actualizada");
        navigate("/", { replace: true });
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
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
              className="fas fa-unlock fa-lg"
              style={{ fontSize: "100px", paddingBottom: "20px" }}
            ></i>
          </div>
          <div className="text-center fs-1 fw-bold">Cambio de Contraseña</div>
          <div className="input-group mt-4">
            <div className="input-group-text bg-gray">
              <i className="fas fa-lock"></i>
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
              <i className="fas fa-lock"></i>
            </div>
            <input
              className="form-control bg-light"
              type="password"
              placeholder="Confirmar Contrasena"
              name="confirm_password"
              required
            />
          </div>

          <button className="btn btn-secondary text-white w-100 mt-5 fw-semibold shadow-sm">
            Ingresar
          </button>
          {error && (
            <div className="alert alert-danger">
              <strong>{error}</strong>
            </div>
          )}
        </div>
      </form>
    </>
  );
}
