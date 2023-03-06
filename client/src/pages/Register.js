import { Header, Footer } from "../components";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { FormRow, Message } from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isRegistered: true,
  showMessage: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const toggleForm = () => {
    setValues({ ...values, isRegistered: !values.isRegistered });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper>
      <Header />

      <section class="login">
        <div class="login-container">
          <h1>Register</h1>
          {values.showMessage && <Message />}

          <form onSubmit={onSubmit} class="login-form">
            <FormRow
              type="text"
              name="name *"
              placeholder="Your name"
              handleChange={handleChange}
              value={values.name}
            />
            <FormRow
              type="text"
              name="email *"
              placeholder="Email Address"
              handleChange={handleChange}
              value={values.email}
            />
            <FormRow
              type="text"
              name="password *"
              placeholder="Password"
              handleChange={handleChange}
              value={values.password}
            />

            <div class="login-btn-block">
              <Button class="btn login-btn" type="submit">
                Login
              </Button>
              <div class="login-btn-bg"></div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </Wrapper>
  );
};
export default Register;

const Button = styled.button`
  text-transform: uppercase;
  padding: 1rem 1.5rem;
  background-color: transparent;
  border: 3px solid #221333;
  border-radius: 1px;
  cursor: pointer;
  letter-spacing: 1px;
  font-weight: 700;
  width: 100%;
  color: #221333;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  transition: all 0.3s ease;

  :hover {
    background-color: #221333;
    border: 3px solid #221333;
    color: #df3311;
  }
  @media screen and (max-width: 850px) {
    padding: 10px 18px;
  }
  @media screen and (max-width: 450px) {
    display: block;
    width: 100%;
  }
`;

const Wrapper = styled.main`
  /* ------------------- */
  /* Login Page, Subscribe Page, Subscribed Page */
  /* ------------------- */
  .login {
    padding: 30px 0 30px 0;
  }
  .login-container {
    width: 90vw;
    margin: 0 auto;
    max-width: 450px;
  }
  .login h1 {
    text-transform: uppercase;
    font-size: calc(3vw + 1rem);
    letter-spacing: 1px;
    background-color: transparent;
    padding: 0 0 25px 22px;
    line-height: 0;
    position: relative;
    z-index: 1;
  }
  /* ------------------- */
  /* Footer */
  /* ------------------- */
  Footer {
    margin-top: 100px;
  }
  /* ------------------- */
  /* button */
  /* ------------------- */
  .login-btn-block {
    position: relative;
    width: 142px;
    height: 53px;
  }
  .btn.login-btn:hover {
    background-color: var(--darkBlue);
    border: 3px solid var(--darkBlue);
    color: #df3311;
  }
  .login-btn-bg {
    width: 160%;
    height: 50%;
    background-color: #ffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-25%, -50%);
    border-radius: 1px;
  }
  /* ------------------- */
  /* Media Queries */
  /* ------------------- */
  @media screen and (max-width: 850px) {
    .login-btn-block {
      width: 130px;
      height: 41px;
    }
  }
`;
