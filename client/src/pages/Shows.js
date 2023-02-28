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

      <section class="upcoming">
        <div class="upcoming-container">
          <PageTitle />
        </div>
      </section>

      <section class="calendar-shows">
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
  .upcoming {
    background-color: #221333;
    padding: 70px 0;
    margin-top: -5px;
  }
  .upcoming-container {
    width: 65vw;
    margin: 0 auto;
  }

  .calendar-shows {
    width: 65vw;
    max-width: 980px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 20px;
    row-gap: 40px;
    @media screen and (max-width: 850px) {
      .calendar-shows {
        width: 80vw;
      }
    }
    @media screen and (max-width: 550px) {
      .calendar-shows {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
