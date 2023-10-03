import Offers from "./Offers.routes";
import ContratingStatus from "./ContratingStatus.routes";
import { Routes, Route } from "react-router-dom";
import CandidateStatus from "./candidateStatus.routes";
import Contracting from "./contracting.routes";
export const OffersRoutes = () => {
  return (
    <Routes>
      <Route path="/oferta" element={<Offers />} />
      <Route path="/estado_contrato" element={<ContratingStatus />} />
      <Route path="/estado_candidato" element={<CandidateStatus />} />
      <Route path="/contrato" element={<Contracting />} />
    </Routes>
  );
};
