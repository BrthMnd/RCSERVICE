import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export function ProtectedRoute({ children }) {
  // Obtén el valor de isAuthenticate del estado global
  const isAuthenticate = useSelector((state) => state.user.isAuthenticate);

  if (!isAuthenticate) {
    return <Navigate to="/login" />;
  }

  return children ? children : <Outlet />;
}

