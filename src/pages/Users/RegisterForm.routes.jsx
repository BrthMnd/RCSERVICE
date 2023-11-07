// Importa tus estilos SCSS aquí
import "../../assets/style/partials/_auth.scss";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ApiPost } from "../../hooks/useApi";
const url = import.meta.env.VITE_URL_REGISTER;

function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const usuario = {
      userName: e.target.usuario.value,
      password: e.target.password.value,
      Rols: "6538921f2825a66bf05bab28"
    };

    try {
      const res = await ApiPost(url, usuario);
      console.log(usuario);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="login-container bg-gray d-flex justify-content-center align-items-center vh-100"
    onSubmit={handleSubmit}>
      <div
        className="login-content bg-white p-5 rounded-5 text-secondary"
        style={{ width: "25rem" }}
      >
        <div className="d-flex justify-content-center">
          <i className="far fa-user-circle fa-lg" style={{ fontSize: "100px", paddingBottom:"20px" }}></i>
        </div>
        <div className="text-center fs-1 fw-bold">Registro</div>
        <div className="input-group mt-4">
          <div className="input-group-text bg-gray">
          <i className="fas fa-at "></i>
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

        <button className="btn btn-secondary text-white w-100 mt-4 fw-semibold shadow-sm">
          Registrarse
        </button>
        <Link
          to="/login"
          className="btn btn-secondary text-white w-100 mt-2 fw-semibold "
        >
          <span style={{color:"white"}}>

          Ingresar
          </span>
        </Link>
      </div>
    </form>
  );
}

export default Register;
