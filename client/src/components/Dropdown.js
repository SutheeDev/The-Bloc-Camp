import { BiUserCircle } from "react-icons/bi";
import styled from "styled-components";

const Dropdown = () => {
  return (
    <Wrapper>
      <div className="dropdown">
        <div className="dropdown--icon">
          <BiUserCircle />
        </div>
        <h3>Pete</h3>
      </div>
      <div className="dropdown__menu">
        <button>logout</button>
      </div>
    </Wrapper>
  );
};
export default Dropdown;

const Wrapper = styled.div`
  .dropdown--icon {
    font-size: 1.4rem;
  }
`;
