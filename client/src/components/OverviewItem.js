import styled from "styled-components";

const OverviewItem = ({ title, count, icon, color, bcg }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span>{count}</span>
        <div className="icon">{icon}</div>
      </header>
      <h3 className="title">{title}</h3>
    </Wrapper>
  );
};
export default OverviewItem;

const Wrapper = styled.div`
  padding: 2em 2em;
  margin-bottom: 2em;
  border-bottom: 7px solid ${(props) => props.color};
  border-radius: 3px;
  box-shadow: 0px 0.2px 0.2px rgba(0, 0, 0, 0.014),
    0px 0.4px 0.5px rgba(0, 0, 0, 0.02), 0px 0.8px 1px rgba(0, 0, 0, 0.025),
    0px 1.3px 1.8px rgba(0, 0, 0, 0.03), 0px 2.5px 3.3px rgba(0, 0, 0, 0.036),
    0px 6px 8px rgba(0, 0, 0, 0.05);

  transition: all 0.2s ease;
  :hover {
    box-shadow: 0px 0.7px 1.7px rgba(0, 0, 0, 0.014),
      0px 1.8px 4.1px rgba(0, 0, 0, 0.02), 0px 3.4px 7.8px rgba(0, 0, 0, 0.025),
      0px 6px 13.8px rgba(0, 0, 0, 0.03), 0px 11.3px 25.9px rgba(0, 0, 0, 0.036),
      0px 27px 62px rgba(0, 0, 0, 0.05);
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    margin-bottom: 0.5em;
  }
  span {
    color: ${(props) => props.color};
    font-weight: 700;
    font-size: 2.5rem;
  }
  .icon {
    color: ${(props) => props.color};
    background-color: ${(props) => props.bcg};
    display: flex;
    padding: 0.2em;
    border-radius: 3px;
  }
  .title {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: capitalize;
  }
  @media screen and (min-width: 950px) {
    padding: 2em 1.5em;
  }
`;
