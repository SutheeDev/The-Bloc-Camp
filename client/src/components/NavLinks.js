import adminLinks from "../utils/admin-links";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <Wrapper className="nav-links">
      {adminLinks.map((link) => {
        const { text, path, icon, id } = link;
        return (
          <NavLink
            key={id}
            to={path}
            onClick={toggleSidebar}
            // Utilize isActive property to highlight an active link
            className={({ isActive }) => (isActive ? "link active" : "link")}
            end
          >
            <div className="link-icon">{icon}</div>
            {text}
          </NavLink>
        );
      })}
    </Wrapper>
  );
};
export default NavLinks;

const Wrapper = styled.div`
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
`;
