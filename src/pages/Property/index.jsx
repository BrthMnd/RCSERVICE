import Manager from "./manager.routes";
import Owner from "./owners.routes";
import Property from "./Property.routes";
import { Route, Routes } from "react-router-dom";
export function PropertyRoutes() {
  return (
    <Routes>
      <Route path="/inmueble" element={<Property />} />
      <Route path="/propietario" element={<Owner />} />
      <Route path="/encargado" element={<Manager />} />
    </Routes>
  );
}
