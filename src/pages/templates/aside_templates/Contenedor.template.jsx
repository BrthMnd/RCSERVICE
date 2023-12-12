/* eslint-disable react/prop-types */
import { NavLink, Link } from "react-router-dom";
import Logo from "../../../assets/img/LogoRc.png";
import { useSelector } from "react-redux";
function ContainerAside({ children }) {
  const role = useSelector((state) => state.user.role);

  return (
    <>
      <aside
        className="main-sidebar sidebar-dark-primary elevation-4"
        // id="aside"
      >
        <NavLink
          to="/"
          className="brand-link"
          style={{ textDecoration: "none" }}
        >
          <img
            src={Logo}
            alt="Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: 0.8 }}
          />

          <span
            className="brand-text font-weight-light"
            style={{ textDecoration: "none" }}
          >
            Rc Service
          </span>
        </NavLink>

        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="true"
            >
              {/* home */}
              <li className="nav-item">
                <Link
                  to={role == "Proveedores" ? "/ofertas/oferta" : "/"}
                  className="nav-link"
                >
                  <i className="nav-icon fas fa-home"></i>
                  <p>Inicio</p>
                </Link>
              </li>

              {role == "Proveedores" && (
                <li className="nav-item">
                  <Link to="/ofertas/contrato_proveedor" className="nav-link">
                    <i className="nav-icon far fa-id-card"></i>
                    <p>Mis Contratos</p>
                  </Link>
                </li>
              )}

              {children}
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  <i className="nav-icon fas fa-info"></i>
                  <p>Ayuda</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
export default ContainerAside;
