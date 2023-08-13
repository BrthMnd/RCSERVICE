import { NavLink } from "react-router-dom";

export function Aside() {
  return (
    <>
      <aside
        className="main-sidebar sidebar-dark-primary elevation-4"
        id="aside"
      >
        <NavLink to="/" className="brand-link">
          <img
            src="assets/img/LogoRc.png"
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
                <NavLink href="/" className="nav-link">
                  <i className="nav-icon fas fa-home"></i>
                  <p>Home</p>
                </NavLink>
              </li>
              {/* Inmuebles */}
              <li className="nav-item">
                <NavLink href="#" className="nav-link">
                  <i className="nav-icon fas fa-hotel "></i>
                  <p>Inmuebles</p>
                  <i className="right fas fa-angle-left"></i>
                </NavLink>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink
                      to="/inmueble"
                      className={`nav-link ${({ isActive }) => {
                        return isActive ? "active" : "";
                      }}`}
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Inmueble</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/encargado"
                      className={({ isActive }) => {
                        return isActive ? "active nav-link" : "nav-link";
                      }}
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Encargado</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/propietario"
                      className={`nav-link ${({ isActive }) => {
                        return isActive ? "active" : "";
                      }}`}
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Propietario</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              {/* Ofertas */}
              <li className="nav-item">
                <NavLink href="#" className="nav-link">
                  <i className="nav-icon fas fa-hotel "></i>
                  <p>
                    Oferta
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </NavLink>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink
                      to="/inmueble"
                      className={`nav-link ${({ isActive }) => {
                        return isActive ? "active" : "";
                      }}`}
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Ofertas</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/propietario"
                      className={`nav-link ${({ isActive }) => {
                        return isActive ? "active" : "";
                      }}`}
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Oferentes</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              {/* Servicios */}
              <li className="nav-item">
                <NavLink href="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Sercvicios</p>
                </NavLink>
              </li>
              {/* Proveedores */}
              <li className="nav-item">
                <NavLink href="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Proveedores</p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
