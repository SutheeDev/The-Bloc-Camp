import styled from "styled-components";
import { Link } from "react-router-dom";

const QuickTipsItem = ({ icon, title, text, btn }) => {
  return (
    <Wrapper>
      <div className="icon">{icon}</div>
      <div className="tip-info">
        <h3>{title}</h3>
        <p>{text}</p>
        <Link></Link>
      </div>
    </Wrapper>
  );
};
export default QuickTipsItem;

const Wrapper = styled.div``;
