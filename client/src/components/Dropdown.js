import { BiUserCircle, BiCaretDown } from "react-icons/bi";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import adminLinks from "../utils/admin-links";
import userLinks from "../utils/user-links";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
  const { user, logoutUser, isEditing, role } = useAppContext();

  let displayLinks;
  if (role === "admin" && isEditing) {
    displayLinks = adminLinks;
  } else if (role === "admin") {
    displayLinks = adminLinks.filter((link) => link.text !== "Edit Show");
  } else if (role === "user") {
    displayLinks = userLinks;
  }

  return (
    <Wrapper>
      <div className="dropdown">
        <div className="dropdown-user">
          <div className="user-icon">
            <BiUserCircle />
          </div>
          <h3 className="username">{user?.name}</h3>
          <div className="arrow-icon">
            <BiCaretDown />
          </div>
        </div>
        <div className="dropdown-menu">
          {displayLinks.map((link) => {
            const { text, path, id } = link;
            return (
              <NavLink
                key={id}
                to={path}
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                end
              >
                <div className="btn">{text}</div>
              </NavLink>
            );
          })}
          <button onClick={logoutUser} className="btn logout-btn">
            logout
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Dropdown;

const Wrapper = styled.div`
  .dropdown {
    position: relative;
    z-index: 50;
  }
  .dropdown-user {
    display: flex;
    align-items: center;
    gap: 0.2em;
    padding: 0.2em 0.4em;
    border-bottom: 2px solid var(--darkBlue);
    border-radius: 2px;
  }
  .dropdown-user:hover {
    border-bottom: 2px solid var(--reddish);
  }
  .user-icon {
    display: flex;
  }
  .username {
    font-size: 0.75rem;
    text-transform: capitalize;
    font-family: var(--bodyFont);
    font-weight: 400;
    display: none;
  }
  .user-icon {
    font-size: 0.9rem;
  }
  .arrow-icon {
    font-size: 0.7rem;
    display: none;
  }
  .dropdown-menu {
    position: absolute;
    top: 20px;
    right: 0;
    width: 195px;
    background-color: var(--white);
    border-radius: 2px;
    box-shadow: 0px 1.3px 1.7px rgba(0, 0, 0, 0.028),
      0px 4.2px 5.6px rgba(0, 0, 0, 0.042), 0px 19px 25px rgba(0, 0, 0, 0.07);
    display: none;
  }
  .dropdown:hover .dropdown-menu {
    display: block;
    top: 35px;
  }
  .link,
  .logout-btn {
    color: var(--darkBlue);
    background-color: transparent;
  }
  .link:hover {
    color: var(--white);
  }
  .link:hover .btn {
    background-color: var(--reddish);
  }
  .logout-btn:hover {
    color: var(--white);
    background-color: var(--reddish);
  }
  .active .btn {
    color: var(--reddish);
  }
  .active .btn:hover {
    color: var(--white);
  }
  .btn {
    /* color: var(--darkBlue); */
    width: 100%;
    padding: 0.5em 1.4em;
    text-transform: capitalize;
    text-align: right;
    font-family: var(--bodyFont);
    /* background-color: transparent; */
    border: 7px solid var(--white);
    cursor: pointer;
  }
  /* .btn:hover {
    background-color: var(--reddish);
    color: var(--white);
  } */
  @media screen and (min-width: 450px) {
    .user-icon {
      font-size: 1.4rem;
    }
    .arrow-icon {
      font-size: 1rem;
    }
    .username {
      font-size: 1.024rem;
    }
    .dropdown-user {
      gap: 0.5em;
      border-bottom: 7px solid var(--darkBlue);
    }
    .dropdown-user:hover {
      border-bottom: 7px solid var(--reddish);
    }
  }
  @media screen and (min-width: 850px) {
    .arrow-icon {
      display: block;
    }
    .username {
      display: block;
    }
  }
`;
