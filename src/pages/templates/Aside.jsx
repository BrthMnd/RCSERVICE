import { NavLink, Link } from "react-router-dom";
import {
  OffersAside,
  PropertyAside,
  ContenedorAside,
  ServiceAside,
} from "./aside_templates";
import Logo from "../../assets/img/LogoRc.png";
export function Aside() {
  const ChangeActive = (isActive) => {
    return isActive ? "active" : "";
  };
  return (
    <>
      <ContenedorAside>
        <PropertyAside />

        <OffersAside />

        <ServiceAside />

        {/* Proveedores */}
        <li className="nav-item">
          <Link href="pages/widgets.html" className="nav-link">
            <i className="nav-icon fas fa-th"></i>
            <p>Proveedores</p>
          </Link>
        </li>
      </ContenedorAside>
    </>
  );
}
