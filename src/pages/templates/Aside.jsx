/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import {
  OffersAside,
  PropertyAside,
  ContenedorAside,
  ServiceAside,
} from "./aside_templates";
export function Aside() {
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
