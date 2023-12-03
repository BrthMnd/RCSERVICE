import axios from "../../libs/axios";
import { NavLink, useNavigate } from "react-router-dom";
export function Recovery() {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_URL_RECOVERY;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = {
        email: e.target.email.value,
      };
      console.log(formdata);
      const res = await axios.post(url, formdata);
      console.log(res);
      if (res.data) {
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
              type="email"
              placeholder="Usuario"
              name="email"
              required
            />
          </div>

          {/* <div className="d-flex justify-content-around mt-1">
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
          </div> */}
          <button className="btn btn-secondary text-white w-100 mt-4 fw-semibold shadow-sm">
            Ingresar
          </button>
          <div className="d-flex gap-1 justify-content-center mt-1">
            <div>Tienes cuenta?</div>
            <NavLink
              to="/register"
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
