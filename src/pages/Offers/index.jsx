import { Routes, Route } from "react-router-dom";
import Offers from "./Offers.routes";
import OfferStatus from "./offerStatus.routes";
import Contracting from "./contracting.routes";
import Contracting_Provider from "./contratingProveedor.routes";
import { ProtectedRoles } from "../ProtectedRoles.routes";
import { useSelector } from "react-redux";
export const OffersRoutes = () => {
  const user = useSelector((state) => state.user);
  return (
    <Routes>
      <Route path="/oferta" element={<Offers />} />
      {user.role == "Proveedores" && (
        <Route path="/contrato_proveedor" element={<Contracting_Provider />} />
      )}

      <Route element={<ProtectedRoles />}>
        <Route path="/estado_oferta" element={<OfferStatus />} />
        <Route path="/contrato" element={<Contracting />} />
      </Route>
    </Routes>
  );
};
