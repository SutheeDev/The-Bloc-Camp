import styled from "styled-components";
import { SearchContainer, EventsContainer } from "../../components";

const AllShows = () => {
  return (
    <Wrapper>
      <h2>All Shows</h2>
      <SearchContainer />
      <EventsContainer />
    </Wrapper>
  );
};
export default AllShows;

const Wrapper = styled.div`
  color: var(--black);
`;
