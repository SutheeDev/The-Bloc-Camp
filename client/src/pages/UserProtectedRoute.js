import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const UserProtectedRoute = ({ children }) => {
  const { user, logoutUser } = useAppContext();
  if (!user || user.role !== "user") {
    logoutUser();
    return <Navigate to="/register" />;
  }
  return children;
};
export default UserProtectedRoute;
