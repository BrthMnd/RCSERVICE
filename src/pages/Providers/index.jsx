import Provider  from "./proveedores.routes";
import Rating from "./ratings.routes";
import { Route, Routes } from "react-router-dom";
export function ProviderRoutes() {
  return (
    <Routes>
      <Route path="/proveedor" element={<Provider />} />
      <Route path="/calificacion" element={<Rating />} />
    </Routes>
  );
}