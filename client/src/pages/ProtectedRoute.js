import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Loading from "../components/Loading";
import styled from "styled-components";

const ProtectedRoute = ({ children }) => {
  const { user, logoutUser, userLoading } = useAppContext();
  if (userLoading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }

  if (!user || user.role !== "admin") {
    logoutUser();
    return <Navigate to="/register" />;
  }
  return children;
};
export default ProtectedRoute;

const Wrapper = styled.div`
  .loading-container {
    padding: 5em 0;
  }
`;
