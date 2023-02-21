import hamburger from "../assets/svg/hamburger.svg";
import closeHamburger from "../assets/svg/close-hamburger.svg";
import login from "../assets/svg/login.svg";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper class="navigation">
      <div class="container">
        <div>
          <nav>
            <ul class="links">
              <li class="hamburger">
                <img
                  src={hamburger}
                  alt="hamburger menu icon"
                  className="hamburger-open"
                />
                <img
                  src={closeHamburger}
                  alt="close hamburger menu icon"
                  className="hamburger-close"
                />
              </li>
              <li class="link">
                <a href="#">home</a>
              </li>
              <li class="link">
                <a href="#">shows</a>
              </li>
              <li class="link">
                <a href="#">about</a>
              </li>
              <li class="link">
                <a href="#">contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="logIn">
          <img src={login} alt="login icon" />
          <a href="#">log in</a>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.section`
  background-color: #221333;
  padding: 37px 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  overflow: hidden;
  z-index: 10;
  transition: all 0.2s ease;

  .container {
    width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .links {
    padding: 0;
  }
  nav {
    width: 100%;
  }
  .links li {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
  }
  .links li svg {
    margin-bottom: 100px;
    fill: #df3311;
  }
  .logIn {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .logIn a {
    text-transform: capitalize;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 1px;
    margin-left: 8px;
    color: #df3311;
  }
  .link {
    display: block;
    margin-bottom: 40px;
  }
  .open-nav {
    height: auto;
  }
  .hamburger {
    display: grid;
    place-items: left;
  }
  .hamburger-open,
  .hamburger-close {
    grid-area: 1/1;
    transition: all 0.2s ease;
  }
  .hamburger-close {
    opacity: 0;
  }
  .open-nav .hamburger-open {
    opacity: 0;
  }
  .open-nav .hamburger-close {
    opacity: 1;
  }
  @media screen and (min-width: 850px) {
    background-color: transparent;
    padding: 10px 0;
    position: fixed;
    top: 19px;
    left: 0;
    width: 100%;

    .container {
      align-items: center;
    }
    nav {
      background-color: #221333;
      width: 40vw;
      border-radius: 2px;
      padding-left: 10px;
    }
    .links {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 8px 0 10px 0;
    }
    .links li {
      margin-right: 40px;
      font-size: 14px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .links li:first-child {
      margin-right: 0;
    }
    .links li svg {
      display: none;
    }
    .link {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 450px) {
    .logIn a {
      font-size: 12px;
    }
  }
`;
