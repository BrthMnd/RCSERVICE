import { NavLink } from "react-router-dom";
import { OffersAside } from "./aside_templates";
import { Link } from "@mui/material";
import Logo from "../../assets/img/LogoRc.png";
export function Aside() {
  const ChangeActive = (isActive) => {
    return isActive ? "active" : "";
  };
  return (
    <>
      <aside
        className="main-sidebar sidebar-dark-primary elevation-4"
        id="aside"
      >
        <NavLink to="/" className="brand-link">
          <img
            src={Logo}
            alt="Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: 0.8 }}
          />

          <span className="brand-text font-weight-light">Rc Service</span>
        </NavLink>

        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* home */}
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  <i className="nav-icon fas fa-home"></i>
                  <p>Home</p>
                </Link>
              </li>
              {/* Inmuebles */}
              <li className="nav-item">
                <Link className="nav-link">
                  <i className="nav-icon fas fa-hotel "></i>
                  <p>
                    Inmueble
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink
                      to="/inmueble"
                      className={`nav-link ${(isActive) =>
                        ChangeActive(isActive)}`}
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Inmueble</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/encargado"
                      className={`nav-link ${(isActive) =>
                        ChangeActive(isActive)}`}
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Encargado</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/propietario"
                      className={`nav-link ${(isActive) =>
                        ChangeActive(isActive)}`}
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Propietario</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              {/* Ofertas */}
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
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
