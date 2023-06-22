import styled from "styled-components";
import { useAppContext } from "../../context/appContext";
import {
  FormRow,
  Message,
  ToggleSwitch,
  FormFileUpload,
  DatePickerComponent,
  TimePickerComponent,
} from "../../components";
import { useState } from "react";
import moment from "moment";

const CreateShow = () => {
  const {
    isLoading,
    handleInputChange,
    showMessage,
    displayMessage,
    uploadImage,
    isEditing,
    artist,
    artistInfo,
    ticketPrice,
    performDate,
    performTime,
    artistImage,
    featureImage,
    published,
    featured,
    createShow,
  } = useAppContext();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleInputChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!artist || !performDate || !performTime) {
    //   displayMessage();
    //   return;
    // }

    createShow();
  };

  const handleImageChange = (e) => {
    const imageType = e.target.name;
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    uploadImage(formData, imageType);
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form-title">
          {isEditing ? "edit show" : "create show"}
        </h3>
        {showMessage && <Message />}
        <div className="form-content">
          <div className="form-row-container">
            <FormRow
              type="text"
              name="artist"
              labelText="artist *"
              placeholder="artist name"
              handleChange={handleInput}
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
              ></textarea>
            </div>

            <FormRow
              type="number"
              name="ticketPrice"
              labelText="ticket price"
              placeholder={ticketPrice}
              handleChange={handleInput}
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
            />

            <FormFileUpload
              type="file"
              name="featureImage"
              labelText="featured image"
              id="featureImage"
              accept="image/*"
              handleChange={handleImageChange}
            />
            <ToggleSwitch text="publish on site?" name="publish" />
            <ToggleSwitch text="featured show?" name="featured" />
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
  .form-desc {
    width: 100%;
    outline: none;
    padding: 1rem;
    border: none;
    margin: 10px 0 25px 0;
    font-family: sans-serif;
    color: var(--darkBlue);
    background-color: var(--grey-100);
  }
  textarea::placeholder {
    text-transform: capitalize;
  }
  @media screen and (min-width: 950px) {
    .form-row-subcontainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2em;
    }
  }
`;
