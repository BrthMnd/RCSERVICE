import { Link, NavLink } from "react-router-dom";
import { OpenList } from "./Open.List";
import { useState } from "react";
function ProvidersTemplate() {
  const [isListOpen, setIsListOpen] = useState(false);
  return (
    
      <li className="nav-item">
        <Link className="nav-link" onClick={()=>OpenList(isListOpen,setIsListOpen)}>
          <i className="nav-icon fas fa-tools"></i>
          <p>
            Proveedores
            <i className="right fas fa-angle-left"></i>
          </p>
        </Link>
        <ul className="nav nav-treeview" style={{display:isListOpen ? 'block' : ''}}>
          <li className="nav-item">
            <NavLink
              to="/proveedores/proveedor"
              className="nav-link"
            >
              <i className="far fa-circle nav-icon"></i>
              <p>Proveedores</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/proveedores/calificacion"
              className="nav-link"
            >
              <i className="far fa-circle nav-icon"></i>
              
              <p>Calificaciones</p>
            </NavLink>
          </li>
        </ul>
      </li>
    
  );
}
export default ProvidersTemplate;