import { Link, NavLink } from "react-router-dom";
function ServiceTemplate() {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link">
          <i className="nav-icon fas fa-tools"></i>
          <p>
            Servicio
            <i className="right fas fa-angle-left"></i>
          </p>
        </Link>
        <ul className="nav nav-treeview">
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
