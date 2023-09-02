import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import { OffersAside, PropertyAside, ContenedorAside } from "./aside_templates";
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

        {/* Servicios */}
        <li className="nav-item">
          <Link href="pages/widgets.html" className="nav-link">
            <i className="nav-icon fas fa-th"></i>
            <p>Sercvicios</p>
          </Link>
        </li>
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
