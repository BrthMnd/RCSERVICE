import { Link } from "react-router-dom";

export function Aside() {
  return (
    <>
      <aside
        className="main-sidebar sidebar-dark-primary elevation-4"
        id="aside"
      >
        <Link to="/" className="brand-link">
          <img
            src="assets/img/LogoRc.png"
            alt="Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: 0.8 }}
          />

          <span className="brand-text font-weight-light">Rc Service</span>
        </Link>

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
                <Link href="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-home"></i>
                  <p>Home</p>
                </Link>
              </li>
              {/* Inmuebles */}
              <li className="nav-item menu-open">
                <li href="#" className="nav-link">
                  <i className="nav-icon fas fa-hotel "></i>
                  <p>
                    Inmueble
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </li>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link
                      to="/inmueble"
                      className={`nav-link ${({ isActive }) => {
                        return isActive ? "active" : "";
                      }}`}
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Inmuebles</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/encargado"
                      className={`nav-link ${({ isActive }) => {
                        return isActive ? "active" : "";
                      }}`}
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Encargado</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/propietario"
                      className={`nav-link ${({ isActive }) => {
                        return isActive ? "active" : "";
                      }}`}
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Propietarios</p>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Ofertas */}
              <li className="nav-item menu-open">
                <li href="#" className="nav-link">
                  <i className="nav-icon fas fa-hotel "></i>
                  <p>
                    Oferta
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </li>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link
                      to="/inmueble"
                      className={`nav-link ${({ isActive }) => {
                        return isActive ? "active" : "";
                      }}`}
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Ofertas</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/propietario"
                      className={`nav-link ${({ isActive }) => {
                        return isActive ? "active" : "";
                      }}`}
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Oferentes</p>
                    </Link>
                  </li>
                </ul>
              </li>
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
