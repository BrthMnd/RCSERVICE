import { Route, Routes } from "react-router-dom";
import Employed from "./Employed.routes";
import { Profile_routes } from "./Profile.routes";
import { ProtectedRoles } from "../ProtectedRoles.routes";
export function UserRoutes() {
  return (
    <Routes>
      <Route
        path="/empleado"
        element={
          <ProtectedRoles>
            <Route path="/empleado" element={<Employed />} />
          </ProtectedRoles>
        }
      />
      <Route path="/perfil" element={<Profile_routes />} />
    </Routes>
  );
}
