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
`;
