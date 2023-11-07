import Login from "./LoginForm.routes";
import Register from "./RegisterForm.routes";
import { Route, Routes } from "react-router-dom";
export function UsersRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Register />} />
    </Routes>
  );
}
