import { HeaderAndAside } from "./templates/index.template";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home.routes";
import { Managers, Property, Owners } from "./Property.pages/";
import { Offers } from "./Offers";
export function Index() {
  return (
    <>
      <HeaderAndAside />
      <div className="content-wrapper" id="Content-global">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inmueble" element={<Property />} />
          <Route path="/propietario" element={<Owners />} />
          <Route path="/encargado" element={<Managers />} />
          <Route path="/oferta" element={<Offers />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}
