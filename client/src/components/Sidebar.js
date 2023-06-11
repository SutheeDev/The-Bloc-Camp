import styled from "styled-components";
import { Logo } from ".";
import adminLinks from "../utils/admin-links";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="sidebar-content">
          {/* <div className="logo-container">
            <Logo />
          </div> */}
          <h2 className="sidebar-title">dashboard</h2>
          <div className="links">
            {adminLinks.map((link) => {
              const { text, path, icon, id } = link;
              return (
                <NavLink
                  key={id}
                  to={path}
                  // Utilize isActive property to highlight an active link
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                >
                  <div className="link-icon">{icon}</div>
                  {text}
                </NavLink>
              );
            })}
          </div>
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
      /* font-family: var(--bodyFont); */
      font-size: 3.5rem;
      font-weight: 400;
      margin-bottom: 1.2em;
    }
    .link {
      font-size: 1.5rem;
      font-weight: 300;
      letter-spacing: 1.5px;
      display: flex;
      gap: 0.5em;
      align-items: center;
      margin-bottom: 1.3em;
      color: var(--blue);

      transition: all 0.3s ease;
    }
    .link-icon {
      display: flex;
    }
    /* Color an active link */
    .active {
      color: var(--white);
    }
    .link:hover {
      color: var(--reddish);
    }
  }
`;
