import { NavLink } from "react-router-dom";
import { handleNavbar } from "../../../assets/js/CloseModal";
function OffersAside() {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" onClick={()=>{
handleNavbar()
        }}>
          <i className="nav-icon fas fa-mail-bulk"></i>
          <p>
            Ofertas
            <i className="right fas fa-angle-left"></i>
          </p>
        </a>
        <ul className="nav nav-treeview" id="ul-test">
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
