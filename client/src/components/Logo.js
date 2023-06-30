import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <h4>the</h4>
      <div class="logo">
        <h1>bloc camp</h1>
        <div class="block"></div>
      </div>
      <p>The Bay’s Premiere Concert Spot</p>
    </Wrapper>
  );
};
export default Logo;

const Wrapper = styled.div`
  text-transform: uppercase;
  text-align: center;
  background-color: transparent;
  width: 150px;
  .logo {
    position: relative;
    height: 40px;
    margin-bottom: -6px;
  }
  h4 {
    font-weight: 500;
    letter-spacing: 3.2px;

    font-size: 0.55rem;
    margin-bottom: -11px;
  }

  h1 {
    font-size: 1.425rem;
    margin-top: 5px;

    width: 100%;
    font-weight: 400;
    letter-spacing: 3px;
    color: var(--reddish);
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  .block {
    width: 10rem;
    height: 0.6rem;
    background-color: var(--darkBlue);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 60%);
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
    font-size: 0.325rem;
    margin-top: 5px;
    line-height: 12px;
  }
  @media screen and (min-width: 450px) {
    width: 300px;
    h4 {
      font-size: 17px;
      margin-bottom: -7px;
    }
    .logo {
      height: 70px;
      margin-bottom: -6px;
    }
    h1 {
      font-size: 44px;
      margin-top: 1px;
    }
    .block {
      width: 16.3rem;
      height: 1.05rem;
      transform: translate(-50%, 50%);
    }
    p {
      font-size: 12px;
      line-height: normal;
    }
  }
`;
