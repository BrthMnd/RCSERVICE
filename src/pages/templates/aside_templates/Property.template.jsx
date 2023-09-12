import { Link, NavLink } from "react-router-dom";
function PropertyTemplate() {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link">
          <i className="nav-icon fas fa-hotel "></i>
          <p>
            Inmueble
            <i className="right fas fa-angle-left"></i>
          </p>
        </Link>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <NavLink
              to="/inmuebles/inmueble"
              className={`nav-link ${(isActive) => ChangeActive(isActive)}`}
            >
              <i className="far fa-circle nav-icon"></i>
              <p>Inmueble</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/inmuebles/encargado"
              className={`nav-link ${(isActive) => ChangeActive(isActive)}`}
            >
              <i className="far fa-circle nav-icon"></i>
              <p>Encargado</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/inmuebles/propietario"
              className={`nav-link ${(isActive) => ChangeActive(isActive)}`}
            >
              <i className="far fa-circle nav-icon"></i>
              <p>Propietario</p>
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );
}
export default PropertyTemplate;
