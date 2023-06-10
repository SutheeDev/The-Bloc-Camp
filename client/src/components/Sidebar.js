import styled from "styled-components";

const Sidebar = () => {
  return (
    <Wrapper>
      <div>
        <h3>Sidebar</h3>
      </div>
    </Wrapper>
  );
};
export default Sidebar;

const Wrapper = styled.div`
  color: black;
  display: none;
  @media (min-width: 950px) {
    display: block;
  }
`;
