import {
  Navbar,
  Header,
  Footer,
  Slideshow,
  PageTitle,
  Events,
  Subscribe,
} from "../components";
import styled from "styled-components";

const Shows = () => {
  return (
    <Wrapper>
      <Navbar />
      <Header />
      <PageTitle />
    </Wrapper>
  );
};

export default Shows;

const Wrapper = styled.main``;
