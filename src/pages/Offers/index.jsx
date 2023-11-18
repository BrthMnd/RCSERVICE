import { Routes, Route } from "react-router-dom";
import Offers from "./Offers.routes";
import OfferStatus from "./offerStatus.routes";
import Contracting from "./contracting.routes";
import { ProtectedRoles } from "../ProtectedRoles.routes";
export const OffersRoutes = () => {
  return (
    <Routes>
      <Route path="/oferta" element={<Offers />} />

      <Route element={<ProtectedRoles />}>
        <Route path="/estado_oferta" element={<OfferStatus />} />
        <Route path="/contrato" element={<Contracting />} />
      </Route>
    </Routes>
  );
};
