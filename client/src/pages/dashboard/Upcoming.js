import styled from "styled-components";
import { SearchContainer, EventsContainer } from "../../components";

const Upcoming = () => {
  return (
    <Wrapper>
      <h3 className="form-title">Upcoming Shows</h3>
      <SearchContainer />
      <EventsContainer />
    </Wrapper>
  );
};
export default Upcoming;

const Wrapper = styled.div`
  color: var(--black);
`;
