import axios from "axios";
import { AlertSuccess } from "../../assets/js/Alerts";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetUser, setIsAuthenticate } from "../../features/User/user.slice";
const url = import.meta.env.VITE_URL_LOGOUT;
export function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = async () => {
    try {
      const res = await axios.post(url);
      if (res.status == 200) {
        AlertSuccess(res.data);
        dispatch(resetUser(), setIsAuthenticate(false));
        navigate("/login");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-dark navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="menu_bar_icons fas fa-bars" title="Expandir"></i>
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li
            className="
          "
          >
            <Link className="nav-link" to={"/login"}>
              <i
                className="menu_bar_icons fas fa-user-circle fa-lg"
                title="Usuario"
              ></i>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" role="button" onClick={() => handleClick()}>
              Salir
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
