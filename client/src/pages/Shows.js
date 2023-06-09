import {
  Navbar,
  Header,
  Footer,
  PageTitle,
  Show,
  Subscribe,
} from "../components";
import styled from "styled-components";

const Shows = () => {
  return (
    <Wrapper>
      <Navbar />
      <Header />

      <section class="calendar">
        <div class="calendar-container">
          <PageTitle />
        </div>
      </section>

      <section class="calendar-shows">
        <Show />
        <Show />
        <Show />
        <Show />
        <Show />
        <Show />
      </section>

      <Subscribe />
      <Footer />
    </Wrapper>
  );
};

export default Shows;

const Wrapper = styled.main`
  background-color: var(--backgroundColor);
  .calendar {
    background-color: #221333;
    padding: 70px 0;
    margin-top: -5px;
  }
  .calendar-container {
    width: 75vw;
    margin: 0 auto;
    @media screen and (max-width: 850px) {
      width: 80vw;
    }
  }

  .calendar-shows {
    width: 75vw;
    max-width: 980px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 20px;
    row-gap: 40px;
    @media screen and (max-width: 850px) {
      width: 80vw;
    }
    @media screen and (max-width: 550px) {
      .calendar-shows {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    }
  }
`;
