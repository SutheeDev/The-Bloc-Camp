import styled from "styled-components";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import youtube from "../images/youtube.svg";

const Header = () => {
  return (
    <Wrapper>
      <div>
        <h4>the</h4>
        <div class="logo">
          <h1>bloc camp</h1>
          <div class="block"></div>
        </div>
        <p>The Bay’s Premiere Concert Spot</p>
        <nav>
          <ul class="social-links">
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <img src={facebook} alt="facebook icon" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank">
                <img src={twitter} alt="twitter icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <img src={instagram} alt="instagram icon" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <img src={youtube} alt="youtube icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.header`
  position: relative;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: #221333;
  text-transform: uppercase;
  text-align: center;
  padding: 0px 0 45px 0;
  margin-top: 14px;

  h4 {
    font-weight: 500;
    font-size: 17px;
    letter-spacing: 3.2px;
    margin-bottom: -7px;
  }
  .logo {
    position: relative;
    height: 70px;
  }
  h1 {
    font-weight: 400;
    font-size: 44px;
    letter-spacing: 3px;
    color: #df3311;
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  .block {
    width: 16.3rem;
    height: 1.05rem;
    background-color: #221333;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    background-image: repeating-linear-gradient(
      60deg,
      #ffffff58 0px,
      #ffffff58 1px,
      #221333 1px,
      #221333 1px,
      #221333 1.5px
    );
  }
  p {
    font-weight: 200;
    letter-spacing: 4.7px;
    font-size: 12px;
  }
  @media screen and (min-width: 850px) {
    position: relative;
    top: 0;
    left: 0;
    padding: 35px 0 45px 0;
    margin-top: 0;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: 30px;

    h4 {
      font-size: 12px;
      margin-bottom: -11px;
    }
    .logo {
      margin-bottom: -6px;
    }
    h1 {
      font-size: 34px;
    }
    .block {
      height: 0.8rem;
      transform: translate(-50%, 25%);
    }
    p {
      font-size: 10px;
    }
  }
`;
