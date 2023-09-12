import Offers from "./Offers.routes";
import ContratingStatus from "./ContratingStatus.routes";
import Candidate from "./Candidate.routes";
import OffersStatus from "./Estados_de_oferta.routes";
import { Routes, Route } from "react-router-dom";

export const OffersRoutes = () => (
  <Routes>
    <Route path="/oferta" element={<Offers />} />
    <Route path="/estado_oferta" element={<OffersStatus />} />
    <Route path="/estado_contrato" element={<ContratingStatus />} />
    <Route path="/candidato" element={<Candidate />} />
  </Routes>
);
