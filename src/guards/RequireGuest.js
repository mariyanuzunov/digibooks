import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RequireGuest({ children }) {
  const { token } = useSelector((state) => state.auth);

  if (token) {
    return <Navigate to="/" />;
  }

  return children;
}
