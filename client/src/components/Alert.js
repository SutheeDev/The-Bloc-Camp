// import { useAppContext } from "../context/appContext";
// import { FiX } from "react-icons/fi";
// import { BiCheck } from "react-icons/bi";
import { Message } from "../components";
import styled from "styled-components";

const Alert = () => {
  return (
    <Wrapper>
      <Message />
    </Wrapper>
  );
};
export default Alert;

const Wrapper = styled.div`
  background-color: var(--background);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  padding: 1.3em 0.9em;
  @media screen and (min-width: 450px) {
    padding: 2em 2em;
  }
  .message {
    position: sticky;
    top: 2em;
    z-index: 100;
  }
`;
