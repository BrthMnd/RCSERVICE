import { Routes, Route } from "react-router-dom";
import Offers from "./Offers.routes";
import OfferStatus from "./offerStatus.routes";
import Contracting from "./contracting.routes";
export const OffersRoutes = () => {
  return (
    <Routes>
      <Route path="/oferta" element={<Offers />} />
      <Route path="/estado_oferta" element={<OfferStatus />} />
      <Route path="/contrato" element={<Contracting />} />
    </Routes>
  );
};
