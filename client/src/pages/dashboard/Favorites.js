import styled from "styled-components";
import { FavoritesContainer } from "../../components";

const Upcoming = () => {
  return (
    <Wrapper>
      <h3 className="form-title">Favorite Shows</h3>
      <FavoritesContainer />
    </Wrapper>
  );
};
export default Upcoming;

const Wrapper = styled.div`
  color: var(--black);
`;
