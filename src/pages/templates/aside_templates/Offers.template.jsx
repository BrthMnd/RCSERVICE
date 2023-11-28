import { NavLink } from "react-router-dom";

import { useState } from "react";
import { OpenList } from "./Open.List";
function OffersAside() {
  const [isListOpen, setIsListOpen] = useState(false);
  return (
    <>
      <li className="nav-item" id="li-test">
        <a
          className="nav-link"
          onClick={() => OpenList(isListOpen, setIsListOpen)}
        >
          <i className="nav-icon fas fa-mail-bulk"></i>
          <p>
            Ofertas
            <i
              className={`right fas fa-angle-left ${
                isListOpen ? "rotate-icon" : ""
              }`}
            ></i>
          </p>
        </a>
        <ul
          className={`nav nav-treeview `}
          style={{ display: isListOpen ? "block" : "" }}
        >
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
