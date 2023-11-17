/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
export function ProtectedRoles({ children }) {
  const user = useSelector((state) => state.user);
  if (user.role != "Employed") {
    return <Navigate to="/ofertas/oferta" />;
  }
  return children ? children : <Outlet />;
}
