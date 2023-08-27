import styled from "styled-components";
import { useAppContext } from "../../context/appContext";
import { useEffect } from "react";
import {
  FormRow,
  Message,
  ToggleSwitch,
  FormFileUpload,
  DatePickerComponent,
  TimePickerComponent,
  FormRowSelect,
} from "../../components";

const CreateShow = () => {
  const {
    isLoading,
    handleInputChange,
    showMessage,
    displayMessage,
    uploadImage,
    artist,
    artistInfo,
    ticketPrice,
    status,
    published,
    featured,
    performDate,
    performTime,
    createShow,
    statusOptions,
    clearValues,
    closeAlertFromAnotherPage,
    clearFilters,
  } = useAppContext();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleInputChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!artist || !performDate || !performTime) {
      displayMessage();
      return;
    }

    createShow();
  };

  const handleImageChange = (e) => {
    const imageType = e.target.name;
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    console.log(imageType, formData);

    uploadImage(formData, imageType);
  };

  useEffect(() => {
    closeAlertFromAnotherPage();
    clearValues();
    clearFilters();
  }, []);

  return (
    <Wrapper>
      <form className="form">
        <h3 className="form-title">create show</h3>
        {showMessage && <Message />}
        <div className="form-content">
          <div className="form-row-container">
            <FormRow
              type="text"
              name="artist"
              labelText="artist *"
              placeholder="artist name"
              handleChange={handleInput}
              value={artist}
              required
            />

            <div className="form-row form-row-desc">
              <label htmlFor="artistInfo" className="form-label">
                artist info
              </label>
              <textarea
                name="artistInfo"
                id="artistInfo"
                rows="10"
                placeholder="artist info"
                className="form-desc"
                onChange={handleInput}
                value={artistInfo}
              ></textarea>
            </div>

            <FormRow
              type="number"
              name="ticketPrice"
              labelText="ticket price"
              placeholder="ticket price"
              handleChange={handleInput}
              value={ticketPrice}
            />

            <FormRowSelect
              name="status"
              placeholder="click to select a status"
              handleChange={handleInput}
              list={statusOptions}
              value={status}
            />

            <div className="form-row-subcontainer">
              <DatePickerComponent name="performDate" selected={performDate} />
              <TimePickerComponent name="performTime" selected={performTime} />
            </div>

            <FormFileUpload
              type="file"
              name="artistImage"
              labelText="thumbnail image"
              id="artistImage"
              accept="image/*"
              handleChange={handleImageChange}
              // value={artistImage}
            />

            <FormFileUpload
              type="file"
              name="featureImage"
              labelText="featured image"
              id="featureImage"
              accept="image/*"
              handleChange={handleImageChange}
              // value={featureImage}
            />
            <ToggleSwitch
              text="publish on site?"
              name="published"
              checked={published}
              defaultChecked={published}
            />
            <ToggleSwitch
              text="featured show?"
              name="featured"
              checked={featured}
              defaultChecked={featured}
            />
            <div className="btn-container">
              <button
                type="submit"
                className="btn update-btn"
                disabled={isLoading}
                onClick={handleSubmit}
              >
                save changes
              </button>
              <button
                className="btn clear-btn"
                onClick={(e) => {
                  e.preventDefault();
                  clearValues();
                }}
              >
                clear all
              </button>
            </div>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default CreateShow;

const Wrapper = styled.div`
  color: var(--black);
  .form-input {
    border: none;
    background-color: var(--grey-100);
    text-transform: capitalize;
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
  .btn-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .update-btn,
  .clear-btn {
    margin-top: 1.5em;
    width: 100%;
  }
  .switch-container {
    display: flex;
    align-items: center;
  }
  .form-desc {
    width: 100%;
    outline: none;
    padding: 1rem;
    border: none;
    margin: 10px 0 17px 0;
    font-family: sans-serif;
    color: var(--darkBlue);
    background-color: var(--grey-100);
  }
  .form-status {
    text-transform: capitalize;
  }
  textarea::placeholder {
    text-transform: capitalize;
  }
  @media screen and (min-width: 450px) {
    .form-desc {
      margin: 10px 0 25px 0;
    }
    .btn-container {
      display: block;
      text-align: right;
    }
    .update-btn,
    .clear-btn {
      width: 45%;
      max-width: 200px;
    }
    .clear-btn {
      margin-left: 1.5em;
    }
  }
  @media screen and (min-width: 950px) {
    .form-row-subcontainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2em;
    }
  }
`;
