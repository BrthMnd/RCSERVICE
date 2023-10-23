import { Link, NavLink } from "react-router-dom";
function OffersAside() {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link">
          <i className="nav-icon fas fa-mail-bulk"></i>
          <p>
            Oferta
            <i className="right fas fa-angle-left"></i>
          </p>
        </Link>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <NavLink to="/ofertas/oferta" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Oferta</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/ofertas/estado_oferta" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Estados de Oferta</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/ofertas/contrato" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Contrato</p>
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );
}

export default OffersAside;
