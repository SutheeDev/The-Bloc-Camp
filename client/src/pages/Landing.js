import {
  Navbar,
  Header,
  Footer,
  Slideshow,
  PageTitle,
  Shows,
} from "../components";
import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper>
      <Navbar />
      <Header />
      <Slideshow />
      <section class="upcoming">
        <div class="upcoming-container">
          <div class="line1"></div>
          <PageTitle />
          <div class="line3"></div>
          <div class="upcoming-info">
            <p>All shows are 18+ to enter and 21+ to purchase alcohol.</p>
            <p>No smoking inside. Please bring a valid form of ID.</p>
          </div>
        </div>
      </section>
      <Shows />
      <Footer />
    </Wrapper>
  );
};
export default Landing;

const Wrapper = styled.main`
  .upcoming {
    background-color: #221333;
    padding: 70px 0;
    margin-top: -5px;
  }
  .upcoming-container {
    width: 65vw;
    margin: 0 auto;
  }
  .line1 {
    width: 20vw;
    height: 3px;
    margin: 0 auto;
    background-color: #ffffff;
    margin-bottom: 30px;
  }
  .upcoming-info {
    width: 100%;
    color: #221333;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .upcoming-info p {
    background-color: #df3311;
    margin-bottom: 10px;
    padding: 0 10px;
  }
  .line3 {
    height: 30px;
    border-right: 2px solid #df3311;
    border-bottom: 2px solid #df3311;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 850px) {
    .upcoming {
      margin-top: 55px;
    }
    .upcoming-container {
      width: 80vw;
    }
    .upcoming-info {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 450px) {
    .upcoming {
      padding: 50px 0;
    }
  }
`;
