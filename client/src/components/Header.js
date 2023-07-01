import styled from "styled-components";
import SocialLinks from "./Social-media-links";
import { Logo } from ".";

const Header = () => {
  return (
    <Wrapper className="header">
      <div>
        <Logo />
        <SocialLinks />
      </div>
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.header`
  position: relative;
  top: 45px;
  left: 0;
  width: 100%;
  background-color: var(--darkBlue);
  padding: 0px 0 85px 0;
  /* margin-top: 14px; */
  padding-top: 14px;
  div {
    width: 100%;
  }
  @media screen and (min-width: 450px) {
    top: 60px;
  }
  @media screen and (min-width: 850px) {
    position: relative;
    top: 0;
    left: 0;
    padding: 35px 0 45px 0;
    margin-top: 0;
  }
`;
