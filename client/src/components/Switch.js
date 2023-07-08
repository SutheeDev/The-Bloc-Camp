import { Switch } from "antd";
import { FiX } from "react-icons/fi";
import { BiCheck } from "react-icons/bi";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const ToggleSwitch = ({ text, name, defaultChecked }) => {
  const { handleInputChange } = useAppContext();

  const handleSwitchChange = (checked) => {
    const value = checked.toString();
    handleInputChange({ name, value });
  };

  return (
    <Wrapper>
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {text}
        </label>
        <Switch
          className="form-switch"
          defaultChecked={defaultChecked || false}
          checkedChildren={<BiCheck />}
          unCheckedChildren={<FiX />}
          onClick={handleSwitchChange}
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
    margin: 0.6em 0 1.5em 0;
  }
  .ant-switch-inner-checked {
    line-height: 24px;
  }
  @media screen and (min-width: 450px) {
    .form-switch {
      margin: 1.2em 0 2em 0;
    }
  }
`;
