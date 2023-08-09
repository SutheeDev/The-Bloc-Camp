import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const ProtectedRoute = ({ children }) => {
  const { user, logoutUser } = useAppContext();
  if (!user || user.role !== "admin") {
    logoutUser();
    return <Navigate to="/register" />;
  }
  return children;
};
export default ProtectedRoute;
