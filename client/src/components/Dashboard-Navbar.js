import styled from "styled-components";
import { Logo } from ".";
import { BiMenu, BiUserCircle } from "react-icons/bi";

const DashboardNavbar = () => {
  return (
    <Wrapper>
      <div className="dashboard--hamburger">
        <BiMenu />
      </div>
      <Logo />
      <div className="dropdown">
        <div className="dropdown-icon">
          <BiUserCircle />
        </div>
        <h3>Pete</h3>
      </div>
    </Wrapper>
  );
};
export default DashboardNavbar;

const Wrapper = styled.nav`
  background-color: var(--darkBlue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .dashboard--hamburger {
    font-size: 1.7rem;
  }
  .dropdown-icon {
    font-size: 1.4rem;
  }
`;
