import { HeaderAndAside } from "./templates/index.template";
import { Footer } from "./templates/Footer";
import { Route, Routes } from "react-router-dom";
import { Property } from "./Property.pages/Property.routes";
import { Home } from "./Home.routes";
export function Index() {
  return (
    <>
      <HeaderAndAside />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inmueble" element={<Property />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
