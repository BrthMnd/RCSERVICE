import axios from "axios";
import { AlertSuccess } from "../../assets/js/Alerts";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetUser, setIsAuthenticate } from "../../features/User/user.slice";
import Cookie from "js-cookie";
const url = import.meta.env.VITE_URL_LOGOUT;
export function Header() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = async () => {
    try {
      const res = await axios.post(url);
      if (res.status == 200) {
        AlertSuccess(res.data);
        dispatch(resetUser());
        dispatch(setIsAuthenticate(false));
        Cookie.remove("token");
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
          <li className="" style={{ display: "flex", flexDirection: "row" }}>
            <p>{user.email}</p>
            <i
              className="menu_bar_icons fas fa-user-circle fa-lg"
              title="Usuario"
            ></i>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              role="button"
              style={{ cursor: "pointer" }}
              onClick={() => handleClick()}
            >
              Salir
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
