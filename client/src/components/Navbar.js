import { useState } from "react";
import hamburger from "../assets/svg/hamburger.svg";
import closeHamburger from "../assets/svg/close-hamburger.svg";
import login from "../assets/svg/login.svg";
import styled from "styled-components";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper className={isMenuOpen ? "navigation open-nav" : "navigation"}>
      <div className="container">
        <div>
          <nav>
            <ul className="links">
              <li
                className="hamburger"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
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
              <li className="link">
                <a href="/">home</a>
              </li>
              <li className="link">
                <a href="/shows">shows</a>
              </li>
              <li className="link">
                <a href="/about">about</a>
              </li>
              <li className="link">
                <a href="/contact">contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="logIn">
          <img src={login} alt="login icon" />
          <a href="/register">log in</a>
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
  overflow: hidden;
  z-index: 10;
  transition: all 0.2s ease;

  .container {
    width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    li {
      text-transform: uppercase;
      font-size: 20px;
      font-weight: 400;
      cursor: pointer;
    }
    li.hamburger {
      display: grid;
      place-items: left;
      .hamburger-open,
      .hamburger-close {
        width: 17px;
        margin-bottom: 100px;
        grid-area: 1/1;
        transition: all 0.2s ease;
      }
    }
    li.link {
      display: block;
      margin-bottom: 40px;
    }
  }

  .logIn {
    display: flex;
    align-items: center;
    cursor: pointer;
    a {
      text-transform: capitalize;
      font-weight: 400;
      font-size: 12px;
      letter-spacing: 1px;
      margin-left: 8px;
      color: #df3311;
    }
  }

  @media screen and (min-width: 450px) {
    .logIn a {
      font-size: 16px;
    }
    .container {
      li.hamburger {
        .hamburger-open,
        .hamburger-close {
          width: 28px;
        }
      }
    }
  }

  @media screen and (min-width: 850px) {
    background-color: transparent;
    padding: 10px 0;
    position: fixed;
    top: 19px;
    left: 0;

    .container {
      nav {
        background-color: #221333;
        width: 40vw;
        border-radius: 2px;
        padding-left: 10px;

        .links {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 8px 0 10px 0;

          .hamburger,
          .link {
            margin-right: 40px;
            font-size: 14px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          .hamburger {
            margin-right: 0;
            display: none;
          }
          .link {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;
