import styled from "styled-components";
import SocialLinks from "./Social-media-links";

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
        <SocialLinks />
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
  background-color: var(--darkBlue);
  text-transform: uppercase;
  text-align: center;
  padding: 0px 0 85px 0;
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
    color: var(--reddish);
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    margin-top: 5px;
  }
  .block {
    width: 16.3rem;
    height: 1.05rem;
    background-color: var(--darkBlue);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    background-image: repeating-linear-gradient(
      60deg,
      #ffffff58 0px,
      #ffffff58 1px,
      var(--darkBlue) 1px,
      var(--darkBlue) 1px,
      var(--darkBlue) 1.5px
    );
  }
  p {
    font-weight: 200;
    letter-spacing: 4.7px;
    font-size: 12px;
    margin-top: 5px;
  }
  @media screen and (min-width: 850px) {
    position: relative;
    top: 0;
    left: 0;
    padding: 35px 0 45px 0;
    margin-top: 0;
  }
  @media screen and (max-width: 450px) {
    h4 {
      font-size: 12px;
      margin-bottom: -11px;
    }
    .logo {
      margin-bottom: -6px;
    }
    h1 {
      font-size: 34px;
      margin-top: 1px;
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
