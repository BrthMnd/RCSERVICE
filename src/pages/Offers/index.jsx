import Offers from "./Offers.routes";
import ContratingStatus from "./ContratingStatus.routes";
import Candidate from "./Candidate.routes";
import OffersStatus from "./Estados_de_oferta.routes";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ChangeLocation } from "../../features/button/buttonAdd.slice";

export const OffersRoutes = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ChangeLocation(location.pathname));
  }, [location, dispatch]);

  return (
    <Routes>
      <Route path="/oferta" element={<Offers />} />
      <Route path="/OfertaEstado" element={<Offers />} />
      <Route path="/estado_oferta" element={<OffersStatus />} />
      <Route path="/estado_contrato" element={<ContratingStatus />} />
      <Route path="/candidato" element={<Candidate />} />
    </Routes>
  );
};
