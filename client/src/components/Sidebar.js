import styled from "styled-components";
import { NavLinks } from ".";
import { useAppContext } from "../context/appContext";

const Sidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="sidebar-content">
          <h2 className="sidebar-title">dashboard</h2>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default Sidebar;

const Wrapper = styled.div`
  .sidebar-container {
    display: none;
    padding: 3em 2em 2em 2.8em;
  }
  @media (min-width: 950px) {
    .sidebar-container {
      display: block;
      background-color: var(--darkBlue);
      width: 300px;
      min-height: 100vh;
      height: 100%;
      margin-left: -300px;

      transition: all 0.3s ease;
    }
    .show-sidebar {
      margin-left: 0;
    }
    .sidebar-title {
      text-transform: capitalize;
      font-size: 3.5rem;
      font-weight: 400;
      margin-bottom: 1.35em;
    }
  }
`;
