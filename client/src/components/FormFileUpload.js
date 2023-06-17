import styled from "styled-components";

const FormFileUpload = ({
  type,
  name,
  placeholder,
  handleChange,
  labelText,
  id,
}) => {
  return (
    <Wrapper className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={handleChange}
        className="form-upload"
      />
    </Wrapper>
  );
};
export default FormFileUpload;

const Wrapper = styled.div`
  .form-upload {
    width: 100%;
    outline: none;
    padding: 1rem 1.5rem 1rem 0;
    border: none;
    margin: 10px 0 25px 0;
    font-family: sans-serif;
    color: var(--darkBlue);
  }
`;
