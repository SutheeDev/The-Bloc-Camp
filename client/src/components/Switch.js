import { Switch } from "antd";
import { FiX } from "react-icons/fi";
import { BiCheck } from "react-icons/bi";
import styled from "styled-components";

const ToggleSwitch = ({ text, name }) => {
  return (
    <Wrapper>
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {text}
        </label>
        <Switch
          className="form-switch"
          defaultChecked={false}
          checkedChildren={<BiCheck />}
          unCheckedChildren={<FiX />}
        />
      </div>
    </Wrapper>
  );
};

export default ToggleSwitch;

const Wrapper = styled.div`
  .form-switch {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.2em 0 2em 0;
  }
  .ant-switch-inner-checked {
    line-height: 24px;
  }
`;
