import { Link, NavLink } from "react-router-dom";
function OffersAside() {
  const ChangeActive = (isActive) => {
    return isActive ? "active" : "";
  };
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
            <NavLink
              to="/oferta"
              className={`nav-link ${(isActive) => ChangeActive(isActive)}`}
            >
              <i className="far fa-circle nav-icon"></i>
              <p>Ofertas</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/estado_contrato"
              className={`nav-link ${(isActive) => ChangeActive(isActive)}`}
            >
              <i className="far fa-circle nav-icon"></i>
              <p>Estados de Contrato</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/candidato"
              className={`nav-link ${(isActive) => ChangeActive(isActive)}`}
            >
              <i className="far fa-circle nav-icon"></i>
              <p>Candidato</p>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/estado_oferta"
              className={`nav-link ${(isActive) => ChangeActive(isActive)}`}
            >
              <i className="far fa-circle nav-icon"></i>
              <p>Estados de Ofertas</p>
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );
}

export default OffersAside;
