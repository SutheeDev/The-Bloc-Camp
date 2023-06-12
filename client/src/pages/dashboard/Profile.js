import styled from "styled-components";
import { useAppContext } from "../../context/appContext";
import { FormRow, Message } from "../../components";
import { useState } from "react";

const Profile = () => {
  // const { handleChange } = useAppContext();
  const { user, showMessage, displayMessage, updateUser, isLoading } =
    useAppContext();

  const [name, setname] = useState(user?.name);
  const [lastname, setLastname] = useState(user?.lastname);
  const [email, setEmail] = useState(user?.email);
  const [location, setLocation] = useState(user?.location);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // handleChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("update user");
  };

  return (
    <Wrapper>
      <h2>Profile</h2>
    </Wrapper>
  );
};
export default Profile;

const Wrapper = styled.div`
  color: var(--black);
`;
