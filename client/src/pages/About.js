import { Navbar, Header, Footer, PageTitle, Subscribe } from "../components";
import aboutImg from "../assets/images/img-about.jpg";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <Navbar />
      <Header />

      <section class="calendar">
        <div class="calendar-container">
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

const Wrapper = styled.main``;
