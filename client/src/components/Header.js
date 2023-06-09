import styled from "styled-components";
import SocialLinks from "./Social-media-links";
import { Logo } from ".";

const Header = () => {
  return (
    <Wrapper>
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
  top: 60px;
  left: 0;
  width: 100%;
  background-color: var(--darkBlue);
  text-transform: uppercase;
  text-align: center;
  padding: 0px 0 85px 0;
  margin-top: 14px;

  @media screen and (min-width: 850px) {
    position: relative;
    top: 0;
    left: 0;
    padding: 35px 0 45px 0;
    margin-top: 0;
  }
`;
