export function Header() {
  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-dark navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="menu_bar_icons fas fa-bars" title="Expandir"></i>
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li
            className="
          "
          >
            <a className="nav-link" href="#" role="button">
              <i
                className="menu_bar_icons fas fa-user-circle fa-lg"
                title="Usuario"
              ></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
