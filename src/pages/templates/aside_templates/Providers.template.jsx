import { Link, NavLink } from "react-router-dom";
function ProvidersTemplate() {
  return (
    
      <li className="nav-item">
        <Link className="nav-link" onClick={()=>console.log("hola")}>
          <i className="nav-icon fas fa-tools"></i>
          <p>
            Proveedores
            <i className="right fas fa-angle-left"></i>
          </p>
        </Link>
        <ul className="nav nav-treeview">
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