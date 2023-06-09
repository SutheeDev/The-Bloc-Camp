import { Outlet } from "react-router-dom";
import { DashboardNavbar } from "../../components";
import styled from "styled-components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <DashboardNavbar />
      <Outlet />
    </Wrapper>
  );
};
export default SharedLayout;

const Wrapper = styled.main`
  background-color: var(--white);
`;
