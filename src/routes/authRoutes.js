import { Redirect, useLocation } from "react-router-dom";

export default function AuthRoute({ children }) {
  const user = sessionStorage.getItem("userProfile");

  const location = useLocation();

  return user ? (
    children
  ) : (
    <Redirect to="/login" replace state={{ path: location.pathname }} />
  );
}
