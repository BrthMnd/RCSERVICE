import { EncargadoHelps } from "./templates/encargado.help";
import { LoginHelps } from "./templates/login.help";
import { OffersHelps } from "./templates/offers.help";
import { PropietarioHelps } from "./templates/propietario.help";
export default function Blog() {
  return (
    <>
      <section id="Blog">
        <ScrollSpy>
          <LoginHelps id="list-item-1" />
          <OffersHelps id="list-item-2" />
          <PropietarioHelps id="list-item-3"/>
          <EncargadoHelps id="list-item-4" />
        </ScrollSpy>
      </section>
    </>
  );
}
const ScrollSpy = ({ children }) => {
  return (
    <div class="ScrollSpy__custom" data-bs-theme="light">
      <nav data-bs-theme="light">
        <nav id="nav__items" class="nav nav-pills flex-column">
          <a class="nav-link" href="#list-item-1">
            Login
          </a>

          <a class="nav-link" href="#list-item-2">
            Ofertas
          </a>
          <a class="nav-link" href="#list-item-3">
           Propietario
          </a>
          <a class="nav-link" href="#list-item-4">
           Encargado
          </a>
        </nav>
      </nav>
      <div
        id="content__scrollSpy"
        data-bs-theme="light"
        data-bs-spy="scroll"
        data-bs-target="#navbar-example3"
        data-bs-smooth-scroll="true"
        class="scrollspy-example-2"
        tabindex="0"
      >
        {children}
      </div>
    </div>
  );
};
