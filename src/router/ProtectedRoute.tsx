import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../components/LoginAuth/AuthContext";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const isAuth = useAuth({ children });

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
