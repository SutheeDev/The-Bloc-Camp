import styled from "styled-components";

const Loading = ({ center }) => {
  return (
    <Wrapper>
      <div
        className={center ? "loading-container center" : "loading-container"}
      >
        <div className="loading"></div>
      </div>
    </Wrapper>
  );
};
export default Loading;

const Wrapper = styled.div`
  height: 80px;
  .loading-container.center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loading {
    width: 80px;
    height: 80px;
    border: 9px solid var(--grey-300);
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: loading 1s normal ease infinite;
  }
  @keyframes loading {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(720deg);
    }
  }
`;
