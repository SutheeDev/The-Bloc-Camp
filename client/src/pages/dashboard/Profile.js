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
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);

  // const handleInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   handleInputChange({ name, value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("update user");
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form=title">profile</h3>
        {showMessage && <Message />}
        <div className="form-input">
          <FormRow
            type="text"
            name="name"
            placeholder="name"
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
            placeholder="email address"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type="text"
            name="location"
            placeholder="location"
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />

          <button type="submit" className="btn" disabled={isLoading}>
            update
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;

const Wrapper = styled.div`
  color: var(--black);
`;
