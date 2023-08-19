import { Route, Routes } from "react-router-dom";
import { Managers, Property, Owners } from "./Property";
import { Offers, ContratingStatus } from "./Offers";
import { HeaderAndAside } from "./templates";
import { Home } from "./templates/Home.routes";

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
          <Route path="/estado_contrato" element={<ContratingStatus />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}
