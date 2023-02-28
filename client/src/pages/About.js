import { Navbar, Header, Footer, PageTitle, Subscribe } from "../components";
import aboutImg from "../assets/images/img-about.jpg";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <Navbar />
      <Header />

      <section class="about">
        <div class="about-container">
          <PageTitle />
        </div>
      </section>

      <section class="about-info">
        <div class="about-info-container">
          <div></div>
          <img src={aboutImg} alt="" />
          <p>
            Live, local, and a little bit loud are the words the Bloc Camp lives
            by. A large space for standing and dancing to live music glows in
            rich ambient hues and a large full bar satiates as a diverse mix of
            local bands, dj's and headlining punk, alternative, rock, new wave,
            retro bands rock it. This is both a large and intimate venue that is
            open late and provides a great musical experience for the budget
            minded and the VIP crowd alike.
          </p>
        </div>
      </section>

      <Subscribe />
      <Footer />
    </Wrapper>
  );
};
export default About;

const Wrapper = styled.main`
  .about {
    background-color: #221333;
    padding: 70px 0;
    margin-top: -5px;
  }
  .about-container {
    width: 75vw;
    margin: 0 auto;
    @media screen and (max-width: 850px) {
      width: 80vw;
    }
  }

  .about-info {
    background-color: #221333;
    min-height: 50vw;
    padding: 40px 0;
  }
  .about-info-container {
    width: 75vw;
    max-width: 1200px;
    height: 40vw;
    padding: 40px 0;
    margin: 0 auto;
    position: relative;
  }
  .about-info-container div,
  .about-info-container img,
  .about-info-container p {
    position: absolute;
  }
  .about-info-container div {
    width: 250px;
    height: 90px;
    background-color: #ffffff;
    top: 0;
    right: 0;
    transform: translate(8px, -8px);
  }
  .about-info-container img {
    width: 70%;
    top: 0;
    right: 0;
    filter: brightness(60%) grayscale(100%);
  }
  .about-info-container p {
    font-family: sans-serif;
    width: 470px;
    top: 50%;
    left: 0;
    transform: translate(0, -70%);
    line-height: 2;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 850px) {
    .about-info {
      padding: 0 0 40px 0;
      height: fit-content;
      margin-top: -80px;
    }
    .about-info-container {
      width: 80vw;
      height: fit-content;
      padding: 40px 0 0 0;
      position: inherit;
      display: flex;
      flex-direction: column-reverse;
    }
    .about-info-container div {
      display: none;
    }
    .about-info-container div,
    .about-info-container img,
    .about-info-container p {
      position: inherit;
    }
    .about-info-container img,
    .about-info-container p {
      width: 100%;
      top: 0;
      left: 0;
      transform: translate(0, 0);
    }
    .about-info-container p {
      margin-bottom: 40px;
    }
  }
  @media screen and (max-width: 550px) {
    .about-info-container p {
      font-size: 12px;
      line-height: 1.7;
    }
  }
`;
