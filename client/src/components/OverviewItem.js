import styled from "styled-components";

const OverviewItem = ({ title, count, icon, color, bcg }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span>{count}</span>
        <div>{icon}</div>
      </header>
      <h3>{title}</h3>
    </Wrapper>
  );
};
export default OverviewItem;

const Wrapper = styled.div`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bcg};
`;
