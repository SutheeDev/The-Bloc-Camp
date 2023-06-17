import styled from "styled-components";
import { useAppContext } from "../../context/appContext";
import {
  FormRow,
  Message,
  ToggleSwitch,
  FormFileUpload,
} from "../../components";

const CreateShow = () => {
  const { isLoading, handleInputChange, showMessage } = useAppContext();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleInputChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Create Show");
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form-title">create show</h3>
        {showMessage && <Message />}
        <div className="form-content">
          <div className="form-row-container">
            <FormRow type="text" name="artist" />
            <FormRow type="date" name="date" />
            <FormRow type="time" name="performTime" labelText="start time" />

            <FormRow
              type="number"
              name="ticketPrice"
              labelText="ticket price"
            />

            <FormFileUpload
              type="file"
              name="smallImg"
              labelText="thumbnail image"
              id="smallImg"
              accept="image/*"
            />

            <FormFileUpload
              type="file"
              name="bigImg"
              labelText="featured image"
              id="bigImg"
              accept="image/*"
            />
            <ToggleSwitch text="publish on site?" name="publish" />
            <ToggleSwitch text="featured show?" name="featured" />
          </div>
          <div className="btn-container">
            <button
              type="submit"
              className="btn update-btn"
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default CreateShow;

const Wrapper = styled.div`
  color: var(--black);
  .form-title {
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 1.3em;
  }
  .form-input {
    border: none;
    background-color: var(--grey-100);
  }
  .form-input::placeholder {
    text-transform: capitalize;
  }
  .btn {
    text-transform: uppercase;
    padding: 1rem 3rem;
    color: var(--reddish);
    border: 3px solid var(--reddish);
    background-color: var(--white);
    border-radius: 1px;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 700;

    transition: all 0.3s ease;
  }
  .btn:hover {
    color: var(--white);
    border: 3px solid var(--darkBlue);
    background-color: var(--darkBlue);
  }
  .update-btn {
    margin-top: 1.5em;
  }
  .btn-container {
    text-align: right;
  }
  .switch-container {
    display: flex;
    align-items: center;
  }
  @media screen and (min-width: 950px) {
    .form-row-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2em;
    }
  }
`;
