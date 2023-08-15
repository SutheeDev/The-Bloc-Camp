import styled from "styled-components";
import { Link } from "react-router-dom";

const QuickTipsItem = ({ icon, title, text, btn, path }) => {
  return (
    <Wrapper>
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className="tip-info">
        <h3>{title}</h3>
        <p>{text}</p>
        <Link to={path} className="btn link-btn">
          {btn}
        </Link>
      </div>
    </Wrapper>
  );
};
export default QuickTipsItem;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
  padding: 2em 2em 2em 0;
  border-radius: 3px;
  .icon {
    color: var(--blue);
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
