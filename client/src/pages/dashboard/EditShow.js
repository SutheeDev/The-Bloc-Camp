import styled from "styled-components";
import { useAppContext } from "../../context/appContext";
import {
  FormRow,
  ToggleSwitch,
  FormFileUpload,
  DatePickerComponent,
  TimePickerComponent,
  FormRowSelect,
} from "../../components";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const EditShow = () => {
  const {
    isLoading,
    handleInputChange,
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
    statusOptions,
    status,
    editShow,
  } = useAppContext();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleInputChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editShow();
  };

  const handleImageChange = (e) => {
    const imageType = e.target.name;
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    uploadImage(formData, imageType);
  };

  useEffect(() => {
    if (!isEditing) {
      setTimeout(() => {
        navigate("/admin-dashboard/all-shows");
      }, 3000);
    }
  });

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form-title">edit show</h3>
        <div className="form-content">
          <div className="form-row-container">
            <FormRow
              type="text"
              name="artist"
              labelText="artist *"
              placeholder="artist name"
              handleChange={handleInput}
              required
              value={artist}
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
              labelText="status *"
              placeholder="click to select a status"
              handleChange={handleInput}
              list={statusOptions}
              value={status}
            />

            <div className="form-row-subcontainer">
              <DatePickerComponent name="performDate" selected={performDate} />
              <TimePickerComponent name="performTime" selected={performTime} />
            </div>

            <div className="image-uploader artist">
              <div className="artist-image">
                <img src={artistImage} alt="artist" />
              </div>
              <FormFileUpload
                type="file"
                name="artistImage"
                labelText="current thumbnail image"
                id="artistImage"
                accept="image/*"
                handleChange={handleImageChange}
              />
            </div>

            <div className="image-uploader feature">
              <img src={featureImage} alt="featured" />
              <FormFileUpload
                type="file"
                name="featureImage"
                labelText="current featured image"
                id="featureImage"
                accept="image/*"
                handleChange={handleImageChange}
              />
            </div>

            <ToggleSwitch
              text="publish on site?"
              name="published"
              defaultChecked={published}
            />
            <ToggleSwitch
              text="featured show?"
              name="featured"
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
              <Link to="/admin-dashboard/all-shows" className="btn clear-btn">
                cancel
              </Link>
            </div>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default EditShow;

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
    color: var(--reddish);
    border: 3px solid var(--reddish);
    background-color: var(--white);
    border-radius: 1px;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 700;

    transition: all 0.3s ease;
  }
  .update-btn {
    padding: 1rem 3rem;
  }
  .clear-btn {
    padding: 0.85rem 3rem;
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
  .image-uploader {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1em;
  }
  .artist-image {
    width: 100%;
    height: 200px;
    background-color: var(--grey-100);
    display: flex;
    justify-content: center;
  }
  .image-uploader.artist img {
    max-height: 100%;
  }

  .image-uploader.feature img {
    width: 100%;
  }
  .form-row-subcontainer,
  .image-uploader {
    margin-bottom: 8px;
  }
  @media screen and (min-width: 450px) {
    .form-desc {
      margin: 10px 0 25px 0;
    }
    .image-uploader {
      flex-direction: row;
    }
    .form-row-subcontainer,
    .image-uploader {
      margin-bottom: 0;
    }
    .artist-image {
      max-width: 135px;
      height: 76px;
    }
    .image-uploader.artist img {
      width: 76px;
    }
    .image-uploader.feature img {
      width: 135px;
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
