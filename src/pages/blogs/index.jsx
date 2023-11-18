import { LoginHelps } from "./templates/login.help";
import { OffersHelps } from "./templates/offers.help";
import { NavLink } from "react-router-dom";
export default function Blog() {
  return (
    <>
      <section id="Blog">
        <ScrollSpy>
          <LoginHelps id="list-item-1" />
          <OffersHelps id="list-item-2" />
        </ScrollSpy>
      </section>
    </>
  );
}
const ScrollSpy = ({ children }) => {
  return (
    <div class="ScrollSpy__custom" data-bs-theme="dark">
      <nav data-bs-theme="dark">
        <nav id="nav__items" class="nav nav-pills flex-column">
          <a class="nav-link" href="#list-item-1">
            Login
          </a>

          <a class="nav-link" href="#list-item-2">
            Ofertas
          </a>
          <a class="nav-link" href="#item-3">
            Item 3
          </a>
        </nav>
      </nav>
      <div
        id="content__scrollSpy"
        data-bs-theme="dark"
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
