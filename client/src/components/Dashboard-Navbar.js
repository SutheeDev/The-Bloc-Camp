import styled from "styled-components";
import { Dropdown, Logo } from ".";
import { BiMenu } from "react-icons/bi";
import { useAppContext } from "../context/appContext";

const DashboardNavbar = () => {
  const { toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div className="dashboard-hamburger" onClick={toggleSidebar}>
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
  padding: 1.3em 0.9em;
  .dashboard-hamburger {
    font-size: 1rem;
    cursor: pointer;
    z-index: 1;

    transition: all 0.3s ease;
  }
  .dashboard-hamburger:hover {
    color: var(--reddish);
  }
  @media (min-width: 450px) {
    padding: 2em 2em;
    .dashboard-hamburger {
      font-size: 1.7rem;
    }
  }
`;
