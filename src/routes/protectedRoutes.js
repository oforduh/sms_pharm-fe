import { Redirect } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = sessionStorage.getItem("user");

  return !user ? children : <Redirect to="/" replace />;
}
