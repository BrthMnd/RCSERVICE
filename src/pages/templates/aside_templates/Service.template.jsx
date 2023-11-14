import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { OpenList } from "./Open.List";
function ServiceTemplate() {
  const [isListOpen, setIsListOpen] = useState(false);
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link"
          onClick={() => OpenList(isListOpen, setIsListOpen)}
        >
          <i className="nav-icon fas fa-tools"></i>
          <p>
            Servicio
            <i className="right fas fa-angle-left"></i>
          </p>
        </Link>
        <ul
          className="nav nav-treeview"
          style={{ display: isListOpen ? "block" : "" }}
        >
          <li className="nav-item">
            <NavLink to="/servicios/categoriaServicio" className={`nav-link `}>
              <i className="far fa-circle nav-icon"></i>
              <p>Categorias Servicios</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/servicios/servicio" className={`nav-link `}>
              <i className="far fa-circle nav-icon"></i>
              <p>Servicios</p>
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );
}
export default ServiceTemplate;
