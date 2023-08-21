import { Route, Routes } from "react-router-dom";
import { OffersRoutes } from "./Offers";
import { PropertyRoutes } from "./Property";
import { HeaderAndAside } from "./templates";
import { Home } from "./templates/Home.routes";

export const Index = () => (
  <>
    <HeaderAndAside />
    <div className="content-wrapper" id="Content-global">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ofertas/*" element={<OffersRoutes />} />
        <Route path="/inmuebles/*" element={<PropertyRoutes />} />
      </Routes>
    </div>
    {/* <Footer /> */}
  </>
);
