import { Switch } from "antd";
import { FiX } from "react-icons/fi";
import { BiCheck } from "react-icons/bi";
import styled from "styled-components";

const ToggleSwitch = () => {
  return (
    <Wrapper>
      <Switch
        className="switch"
        defaultChecked={false}
        checkedChildren={<BiCheck />}
        unCheckedChildren={<FiX />}
      />
    </Wrapper>
  );
};

export default ToggleSwitch;

const Wrapper = styled.div`
  .switch {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-switch-inner-checked {
    line-height: 24px;
  }
`;
