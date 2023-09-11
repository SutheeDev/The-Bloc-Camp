import styled from "styled-components";
import { Link } from "react-router-dom";

const TicketsBtn = () => {
  return (
    <Wrapper>
      <Link to="/shows" className="btn">
        get tickets
      </Link>
    </Wrapper>
  );
};
export default TicketsBtn;

const Wrapper = styled.a`
  .btn {
    text-transform: uppercase;
    padding: 0.87rem 1.5rem;
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
      /* padding: 10px 18px; */
      padding: 7.6px 18px;
    }
  }
  @media screen and (max-width: 450px) {
    .btn {
      display: block;
      width: 100%;
    }
  }
`;
