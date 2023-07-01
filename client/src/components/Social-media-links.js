import facebook from "../assets/svg/facebook.svg";
import twitter from "../assets/svg/twitter.svg";
import instagram from "../assets/svg/instagram.svg";
import youtube from "../assets/svg/youtube.svg";
import styled from "styled-components";

const SocialLinks = () => {
  return (
    <Wrapper>
      <ul class="social-links">
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={facebook} alt="facebook icon" className="social-icon" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src={twitter} alt="twitter icon" className="social-icon" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="instagram icon" className="social-icon" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src={youtube} alt="youtube icon" className="social-icon" />
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};
export default SocialLinks;

const Wrapper = styled.nav`
  .social-links {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .social-links li {
    margin: 0 21px;
  }
  .social-icon {
    height: 13px;
  }
  @media screen and (min-width: 450px) {
    .social-links {
      margin-top: 30px;
    }
    .social-icon {
      height: 18px;
    }
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
