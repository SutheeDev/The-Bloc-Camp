import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import youtube from "../images/youtube.svg";
import styled from "styled-components";

const SocialLinks = () => {
  return (
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
  );
};
export default SocialLinks;

const Wrapper = styled.nav``;
