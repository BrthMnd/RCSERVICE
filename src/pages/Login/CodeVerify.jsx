import { useDispatch } from "react-redux";
import axios from "../../libs/axios";
import { useNavigate, useParams } from "react-router-dom";
import { SaveUser } from "../../features/User/user_register.slice";
export function CodeVerify() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tokenKey } = useParams();
  console.log(tokenKey);
  const url = `${import.meta.env.VITE_URL_RECOVERY}/${tokenKey}`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = {
        code: e.target.code.value,
      };
      console.log(formdata);
      const res = await axios.post(url, formdata);
      // aqui viene el email
      console.log(res);
      if (res.data) {
        dispatch(SaveUser(res.data));
        navigate("/actualizar_contrasena");
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
              className="fas fa-lock fa-lg"
              style={{ fontSize: "100px", paddingBottom: "20px" }}
            ></i>
          </div>
          <div className="text-center fs-1 fw-bold">Codigo de Verificacion</div>
          <div className="input-group mt-1">
            <div className="input-group-text bg-gray">
              <i className="fas fa-lock"></i>
            </div>
            <input
              className="form-control bg-light"
              type="text"
              placeholder="1234"
              name="code"
              maxLength="4"
              required
            />
          </div>
          <button className="btn btn-secondary text-white w-100 mt-4 fw-semibold shadow-sm">
            Ingresar
          </button>
        </div>
      </form>
    </>
  );
}
