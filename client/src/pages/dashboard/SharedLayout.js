import { Outlet } from "react-router-dom";
import {
  DashboardNavbar,
  ModalSidebar,
  Sidebar,
  Alert,
} from "../../components";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";

const SharedLayout = () => {
  const { showAlert } = useAppContext();
  return (
    <Wrapper>
      <div className="sharedLayout">
        <ModalSidebar />
        <Sidebar />
        <div className="content">
          <DashboardNavbar />
          <div className="dashboard-page">
            {showAlert && <Alert />}
            <Outlet />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SharedLayout;

const Wrapper = styled.main`
  background-color: var(--white);
  .sharedLayout {
    display: flex;
  }
  .content {
    width: 100%;
  }
  .dashboard-page {
    padding: 1.3em 0.9em;

    position: relative;
  }
  @media (min-width: 450px) {
    .dashboard-page {
      padding: 2em 2em;
    }
  }
`;
