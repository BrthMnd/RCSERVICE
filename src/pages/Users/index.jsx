import { Route, Routes } from "react-router-dom";
import Employed from "./Employed.routes";
import { Profile_routes } from "./Profile.routes";
export function UserRoutes() {
  return (
    <Routes>
      <Route path="/empleado" element={<Employed />} />
      <Route path="/perfil" element={<Profile_routes />} />
    </Routes>
  );
}
