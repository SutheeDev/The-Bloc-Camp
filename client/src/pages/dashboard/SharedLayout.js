import { Outlet } from "react-router-dom";
import { DashboardNavbar, ModalSidebar, Sidebar } from "../../components";
import styled from "styled-components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <ModalSidebar />
      <Sidebar />
      <DashboardNavbar />
      <Outlet />
    </Wrapper>
  );
};
export default SharedLayout;

const Wrapper = styled.main`
  background-color: var(--white);
`;
