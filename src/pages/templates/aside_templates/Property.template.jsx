import { NavLink } from "react-router-dom";
function PropertyTemplate() {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link">
          <i className="nav-icon fas fa-hotel "></i>
          <p>
            Inmueble
            <i className="right fas fa-angle-left"></i>
          </p>
        </a>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <NavLink to="/inmuebles/inmueble" className={`nav-link `}>
              <i className="far fa-circle nav-icon"></i>
              <p>Inmueble</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/inmuebles/encargado" className={`nav-link`}>
              <i className="far fa-circle nav-icon"></i>
              <p>Encargado</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/inmuebles/propietario" className={`nav-link`}>
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
