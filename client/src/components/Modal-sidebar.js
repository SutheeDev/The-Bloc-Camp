import styled from "styled-components";
import { Logo, NavLinks } from ".";
import { FiX } from "react-icons/fi";
import { useAppContext } from "../context/appContext";

const ModalSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="sidebar-content">
          <div onClick={toggleSidebar} className="close-icon">
            <FiX />
          </div>
          <div className="logo-container">
            <Logo />
          </div>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};
export default ModalSidebar;

const Wrapper = styled.div`
  @media (min-width: 950px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background-color: var(--white-transparent);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;

    transition: all 0.3s ease;
  }
  .show-sidebar {
    z-index: 100;
    opacity: 1;
  }
  .sidebar-content {
    background-color: var(--darkBlue);
    width: 95vw;
    height: 95vh;
    border-radius: 5px;
    box-shadow: 0px 1.3px 1.7px rgba(0, 0, 0, 0.028),
      0px 4.2px 5.6px rgba(0, 0, 0, 0.042), 0px 19px 25px rgba(0, 0, 0, 0.07);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 2em;
  }
  .close-icon {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 2rem;
    cursor: pointer;

    transition: all 0.2s ease;
  }
  .close-icon:hover {
    color: var(--reddish);
  }
  .logo-container {
    margin-bottom: 5em;
  }
`;
