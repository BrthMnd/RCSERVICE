import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { OpenList } from "./Open.List";
function PropertyTemplate() {
  const [isListOpen, setIsListOpen] = useState(false);
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" onClick={()=>OpenList(isListOpen,setIsListOpen)}>
          <i className="nav-icon fas fa-hotel "></i>
          <p>
            Inmueble
            <i className="right fas fa-angle-left"></i>
          </p>
        </Link>
        <ul className="nav nav-treeview" style={{display:isListOpen ? 'block' : ''}}>
          <li className="nav-item">
            <NavLink
              to="/inmuebles/inmueble"
              className={`nav-link `}
            >
              <i className="far fa-circle nav-icon"></i>
              <p>Inmueble</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/inmuebles/encargado"
              className={`nav-link `}
            >
              <i className="far fa-circle nav-icon"></i>
              <p>Encargado</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/inmuebles/propietario"
              className={`nav-link `}
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
