import styled from "styled-components";

const ModalSidebar = () => {
  return (
    <Wrapper>
      <div>
        <h3>Modal</h3>
      </div>
    </Wrapper>
  );
};
export default ModalSidebar;

const Wrapper = styled.div`
  color: black;
  @media (min-width: 950px) {
    display: none;
  }
`;
