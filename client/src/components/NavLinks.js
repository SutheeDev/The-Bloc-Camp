import adminLinks from "../utils/admin-links";
import userLinks from "../utils/user-links";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const NavLinks = ({ toggleSidebar }) => {
  const { isEditing, role } = useAppContext();

  let displayLinks;
  if (role === "admin" && isEditing) {
    displayLinks = adminLinks;
  } else if (role === "admin") {
    displayLinks = adminLinks.filter((link) => link.text !== "Edit Show");
  } else if (role === "user") {
    displayLinks = userLinks;
  }

  return (
    <Wrapper className="nav-links">
      {displayLinks.map((link) => {
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

  // if (isEditing) {
  //   return (
  //     <Wrapper className="nav-links">
  //       {adminLinks.map((link) => {
  //         const { text, path, icon, id } = link;

  //         return (
  //           <NavLink
  //             key={id}
  //             to={path}
  //             onClick={toggleSidebar}
  //             // Utilize isActive property to highlight an active link
  //             className={({ isActive }) => (isActive ? "link active" : "link")}
  //             end
  //           >
  //             <div className="link-icon">{icon}</div>
  //             {text}
  //           </NavLink>
  //         );
  //       })}
  //     </Wrapper>
  //   );
  // } else {
  //   const filterLinks = adminLinks.filter((link) => link.text !== "Edit Show");
  //   return (
  //     <Wrapper className="nav-links">
  //       {filterLinks.map((link) => {
  //         const { text, path, icon, id } = link;

  //         return (
  //           <NavLink
  //             key={id}
  //             to={path}
  //             onClick={toggleSidebar}
  //             // Utilize isActive property to highlight an active link
  //             className={({ isActive }) => (isActive ? "link active" : "link")}
  //             end
  //           >
  //             <div className="link-icon">{icon}</div>
  //             {text}
  //           </NavLink>
  //         );
  //       })}
  //     </Wrapper>
  //   );
  // }
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
