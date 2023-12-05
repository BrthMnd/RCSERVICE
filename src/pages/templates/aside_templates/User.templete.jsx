import { Link, NavLink } from "react-router-dom";
import { OpenList } from "./Open.List";
import { useState } from "react";
function UserTemplete() {
  const [isListOpen, setIsListOpen] = useState(false);
  return (
    <li className="nav-item">
      <Link
        className="nav-link"
        onClick={() => OpenList(isListOpen, setIsListOpen)}
      >
        <i className="nav-icon fas fa-users"></i>
        <p>
          Usuarios
          <i className="right fas fa-angle-left"></i>
        </p>
      </Link>
      <ul
        className="nav nav-treeview"
        style={{ display: isListOpen ? "block" : "" }}
      >
        <li className="nav-item">
          <NavLink to="/usuarios/empleado" className="nav-link">
            <i className="far fa-circle nav-icon"></i>
            <p>Empleados</p>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/proveedores/proveedor" className="nav-link">
            <i className="far fa-circle nav-icon"></i>
            <p>Proveedores</p>
          </NavLink>
        </li>
      </ul>
    </li>
  );
}
export default UserTemplete;
