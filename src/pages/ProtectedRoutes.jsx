/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
export function ProtectedRoutes({ children }) {
  const user = useSelector((state) => state.user);
  if (!user.Authorization) {
    return <Navigate to="/login" />;
  }
  return children ? children : <Outlet />;
}
