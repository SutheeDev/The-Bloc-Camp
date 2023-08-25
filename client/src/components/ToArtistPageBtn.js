import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const ToArtistPageBtn = ({ id }) => {
  const { getArtist } = useAppContext();

  return (
    <Wrapper>
      {/* <Link to={`/artist/${id}`} className="btn"> */}
      <Link to={`/artist/`} onClick={() => getArtist(id)} className="btn">
        get tickets
      </Link>
    </Wrapper>
  );
};
export default ToArtistPageBtn;

const Wrapper = styled.div`
  .btn {
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    color: var(--reddish);
    border: 3px solid var(--reddish);
    background-color: transparent;
    border-radius: 1px;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 700;

    transition: all 0.3s ease;
  }
  .btn:hover {
    color: var(--white);
    border: 3px solid var(--darkRed);
  }
  @media screen and (max-width: 850px) {
    .btn {
      padding: 10px 18px;
    }
  }
  @media screen and (max-width: 450px) {
    .btn {
      display: block;
      width: 100%;
    }
  }
`;
