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
    border: none;
    margin: 10px 0 17px 0;
    font-family: sans-serif;
    color: var(--darkBlue);
  }
  input::file-selector-button {
    color: var(--darkBlue);
    min-width: 30%;
    height: 3.6em;
    border: none;
    border-radius: 2px;
    background-color: var(--grey-100);
    padding: 1rem;
    cursor: pointer;
    margin-right: 1em;

    transition: all 0.3s ease;
  }
  input::file-selector-button:hover {
    color: var(--reddish);
  }
  @media screen and (min-width: 450px) {
    .form-upload {
      margin: 10px 0 25px 0;
    }
  }
`;
