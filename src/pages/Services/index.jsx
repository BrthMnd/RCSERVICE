import { Route, Routes } from "react-router-dom";
import CategorityService from "./Service.Categority.routes";
import Service from  "./Service.routes";
export function ServicesRoutes() {
  return (
    <Routes>
      <Route path="/categoriaServicio" element={<CategorityService />} />
      <Route path="/servicio" element={<Service />} />
    </Routes>
  );
}