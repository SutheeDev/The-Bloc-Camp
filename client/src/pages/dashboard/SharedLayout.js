import { Outlet } from "react-router-dom";
import { DashboardNavbar, ModalSidebar, Sidebar } from "../../components";
import styled from "styled-components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <div className="sharedLayout">
        <ModalSidebar />
        <Sidebar />
        <div className="content">
          <DashboardNavbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SharedLayout;

const Wrapper = styled.main`
  .sharedLayout {
    display: flex;
  }
  .content {
    width: 100%;
  }
  .dashboard-page {
    padding: 1.3em 0.9em;
  }
  @media (min-width: 450px) {
    .dashboard-page {
      padding: 2em 2em;
    }
  }
`;
