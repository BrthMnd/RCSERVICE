import { Route, Routes } from "react-router-dom";
import { Profile_routes } from "./profile.routes";
export function UsersRoutes() {
  return (
    <Routes>
      <Route path="/perfil" element={<Profile_routes />} />
    </Routes>
  );
}
