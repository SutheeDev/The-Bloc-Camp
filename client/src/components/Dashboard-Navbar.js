import styled from "styled-components";
import { Dropdown, Logo } from ".";
import { BiMenu } from "react-icons/bi";

const DashboardNavbar = () => {
  return (
    <Wrapper>
      <div className="dashboard-hamburger">
        <BiMenu />
      </div>
      <Logo />
      <Dropdown />
    </Wrapper>
  );
};
export default DashboardNavbar;

const Wrapper = styled.nav`
  background-color: var(--darkBlue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 2em;
  .dashboard-hamburger {
    font-size: 1.7rem;
  }
`;
