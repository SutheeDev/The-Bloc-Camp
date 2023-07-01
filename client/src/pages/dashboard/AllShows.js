import styled from "styled-components";
import { SearchContainer, EventsContainer } from "../../components";

const AllShows = () => {
  return (
    <Wrapper>
      <h3 className="form-title">All Shows</h3>
      <SearchContainer />
      <EventsContainer />
    </Wrapper>
  );
};
export default AllShows;

const Wrapper = styled.div`
  color: var(--black);
`;
