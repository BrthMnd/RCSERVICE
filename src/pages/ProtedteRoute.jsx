/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export function ProtectedRoute({ children }) {
  // Obtén el valor de isAuthenticate del estado global
  const isAuthenticate = useSelector((state) => state.user.isAuthenticate);

  // Inicializa el estado local con el valor del estado global
  const [localIsAuthenticate, setLocalIsAuthenticate] =
    useState(isAuthenticate);

  // Escucha cambios en el estado global y actualiza el estado local
  useEffect(() => {
    setLocalIsAuthenticate(isAuthenticate);
  }, [isAuthenticate]);

  if (localIsAuthenticate) {
    return <Navigate to="/login" />;
  }

  return children ? children : <Outlet />;
}
