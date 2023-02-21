import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import youtube from "../images/youtube.svg";
import styled from "styled-components";

const SocialLinks = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
export default SocialLinks;

const Wrapper = styled.nav`
  .social-links {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .social-links li {
    margin: 0 21px;
  }
  @media screen and (min-width: 850px) {
    .social-links {
      position: fixed;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background-color: #221333;
      flex-direction: column;
      margin-top: 0;
      border-radius: 2px;
      z-index: 10;
    }
    .social-links li {
      margin: 15px 15px;
    }
  }
`;
