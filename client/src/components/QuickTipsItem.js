import styled from "styled-components";
import { Link } from "react-router-dom";

const QuickTipsItem = ({ icon, title, text, btn }) => {
  return (
    <Wrapper>
      {/* <div className="icon">{icon}</div> */}
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className="tip-info">
        <h3>{title}</h3>
        <p>{text}</p>
        <Link className="btn link-btn">{btn}</Link>
      </div>
    </Wrapper>
  );
};
export default QuickTipsItem;

const Wrapper = styled.div`
  /* background-color: wheat; */
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
  padding: 2em 2em 2em 0;
  border-radius: 3px;
  /* box-shadow: 0px 0.2px 0.2px rgba(0, 0, 0, 0.014),
    0px 0.4px 0.5px rgba(0, 0, 0, 0.02), 0px 0.8px 1px rgba(0, 0, 0, 0.025),
    0px 1.3px 1.8px rgba(0, 0, 0, 0.03), 0px 2.5px 3.3px rgba(0, 0, 0, 0.036),
    0px 6px 8px rgba(0, 0, 0, 0.05);

  transition: all 0.2s ease;
  :hover {
    box-shadow: 0px 0.7px 1.7px rgba(0, 0, 0, 0.014),
      0px 1.8px 4.1px rgba(0, 0, 0, 0.02), 0px 3.4px 7.8px rgba(0, 0, 0, 0.025),
      0px 6px 13.8px rgba(0, 0, 0, 0.03), 0px 11.3px 25.9px rgba(0, 0, 0, 0.036),
      0px 27px 62px rgba(0, 0, 0, 0.05);
  } */
  .icon {
    /* background-color: red; */
    /* display: flex;
    justify-content: center;
    font-size: 3.5em; */
    color: var(--blue);
    /* width: 65px; */
    width: 95px;
    flex-shrink: 0;
  }
  img {
    width: 100%;
  }
  .tip-info {
    width: 90%;
    font-family: var(--bodyFont);
  }
  .tip-info h3 {
    text-transform: capitalize;
    margin-bottom: 0.5em;
  }
  .tip-info p {
    /* margin-bottom: 2.5em; */
    height: 60px;
  }
  .btn {
    font-size: 0.7rem;
    text-transform: uppercase;
    padding: 0.7em 1.6em;
    color: var(--blue);
    border: 2px solid var(--blue);
    background-color: transparent;
    border-radius: 1px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.5px;

    transition: all 0.2s ease;
  }
  .link-btn:hover {
    color: var(--white);
    background-color: var(--blue);
    border: 2px solid var(--blue);
  }
  @media screen and (min-width: 450px) {
    gap: 2em;
    padding: 0 0 2em 0;
  }
  @media screen and (min-width: 850px) {
    .tip-info p {
      height: 70px;
    }
  }
`;
