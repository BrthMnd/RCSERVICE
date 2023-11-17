import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "../../libs/axios";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { SaveUser } from "../../features/User/user_register.slice";
export function Register_form() {
  const dispatch = useDispatch();
  const [err, setErr] = useState(null);
  const provider = useSelector((state) => state.user_register);
  const navigate = useNavigate();
  const url = import.meta.env.VITE_URL_REGISTER;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(provider);
      const formData = {
        email: provider.email,
        password: provider.password,
        nombre: e.target.name.value,
        documento: e.target.documento.value,
        direccion: e.target.address.value,
        telefono: e.target.phone.value,
      };
      console.log(formData);
      const res = await axios.post(url, formData);
      if (res.data) {
        console.log(res.data.message);
        navigate("/login");
      } else {
        console.log("error en resData");
        console.log(res);
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status == 409) {
        setErr(error.response.data.message);
      } else {
        setErr("Ocurrio un error");
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
          style={{ width: "27rem" }}
        >
          <div className="d-flex justify-content-center">
            <i
              className="far fa-user-circle fa-lg"
              style={{ fontSize: "100px", paddingBottom: "20px" }}
            ></i>
          </div>
          <div className="text-center fs-1 fw-bold">Datos Personales</div>
          <Form />

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
const Form = () => {
  return (
    <>
      <div className="input-group mt-4">
        <div className="input-group-text bg-gray">
          <i className="nav-icon fas fa-user-tag"></i>
        </div>
        <input
          className="form-control bg-light"
          type="text"
          placeholder="Nombres"
          name="name"
          required
          maxLength={80}
        />
      </div>
      <div className="input-group mt-1">
        <div className="input-group-text bg-gray">
          <i className="nav-icon fas fa-closed-captioning"></i>
        </div>
        <input
          className="form-control bg-light"
          type="text"
          placeholder="Documento"
          name="documento"
          required
        />
      </div>
      <div className="input-group mt-1">
        <div className="input-group-text bg-gray">
          <i className="nav-icon fas fa-mobile"></i>
        </div>
        <input
          className="form-control bg-light"
          type="tel"
          placeholder="Telefono"
          name="phone"
          maxLength={11}
          required
        />
      </div>
      <div className="input-group mt-1">
        <div className="input-group-text bg-gray">
          <i className="nav-icon fas fa-home"></i>
        </div>
        <input
          className="form-control bg-light"
          type="text"
          placeholder="Direccion"
          name="address"
          required
          maxLength={60}
        />
      </div>
    </>
  );
};
