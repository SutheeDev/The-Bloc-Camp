import styled from "styled-components";
import { useAppContext } from "../../context/appContext";
import { FormRow, Message } from "../../components";
import { useState } from "react";

const Profile = () => {
  const { user, showMessage, displayMessage, updateUser, isLoading } =
    useAppContext();

  const [name, setname] = useState(user?.name);
  const [lastname, setLastname] = useState(user?.lastname);
  const [email, setEmail] = useState(user?.email);
  const [location, setLocation] = useState(user?.location);
  // const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);

  // const handleInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   handleInputChange({ name, value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!name || !lastname || !email || !location) {
    //   displayMessage();
    //   return;
    // }
    updateUser({ name, lastname, email, location });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form-title">profile</h3>
        {showMessage && <Message />}
        <div className="form-content">
          <div className="form-row-container">
            <FormRow
              type="text"
              name="name"
              value={name}
              handleChange={(e) => setname(e.target.value)}
            />
            <FormRow
              type="text"
              name="lastname"
              labelText="last name"
              placeholder="last name"
              value={lastname}
              handleChange={(e) => setLastname(e.target.value)}
            />
            <FormRow
              type="text"
              name="email"
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
            />
            <FormRow
              type="text"
              name="location"
              placeholder="city"
              value={location}
              handleChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="btn-container">
            <button
              type="submit"
              className="btn update-btn"
              disabled={isLoading}
            >
              update
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;

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
  @media screen and (min-width: 1050px) {
    .form-row-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2em;
    }
  }
`;
