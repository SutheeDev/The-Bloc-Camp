import styled from "styled-components";

const FormRowSelect = ({
  name,
  placeholder,
  value,
  handleChange,
  labelText,
  list,
}) => {
  return (
    <Wrapper>
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
        <select
          name={name}
          value={value}
          onChange={handleChange}
          className="form-input form-status"
          required
        >
          <option disabled selected value="">
            {placeholder}
          </option>
          {list.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </Wrapper>
  );
};
export default FormRowSelect;

const Wrapper = styled.div`
  select:required:invalid {
    color: var(--grey-200);
  }
`;
