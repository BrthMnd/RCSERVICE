import Provider  from "./proveedores.routes";
import { Route, Routes } from "react-router-dom";
export function ProviderRoutes() {
  return (
    <Routes>
      <Route path="/proveedor" element={<Provider />} />
    </Routes>
  );
}