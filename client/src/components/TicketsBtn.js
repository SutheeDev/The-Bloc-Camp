import styled from "styled-components";

const TicketsBtn = () => {
  return (
    <Wrapper href="/shows">
      <button class="btn">get tickets</button>
    </Wrapper>
  );
};
export default TicketsBtn;

const Wrapper = styled.a`
  .btn {
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    color: #df3311;
    border: 3px solid #df3311;
    background-color: transparent;
    border-radius: 1px;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 700;

    transition: all 0.3s ease;
  }
  .btn:hover {
    color: #ffffff;
    border: 3px solid #8f210c;
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
