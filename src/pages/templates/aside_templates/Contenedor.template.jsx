import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import Logo from "../../../assets/img/LogoRc.png";
function ContainerAside({ children }) {
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
              {children}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
export default ContainerAside;
