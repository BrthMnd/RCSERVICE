import { Route, Routes } from "react-router-dom";
import User from "./user.routes";
import { Profile_routes } from "./Profile.routes";
export function UserRoutes() {
  return (
    <Routes>
      <Route path="/usuario" element={<User />} />
      <Route path="/perfil" element={<Profile_routes />} />
    </Routes>
  );
}
