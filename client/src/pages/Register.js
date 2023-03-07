import styled from "styled-components";
import { useState } from "react";
import { Header, Footer, FormRow, Message } from "../components";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isRegistered: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const { showMessage, displayMessage, isLoading, hideMessage, registerUser } =
    useAppContext();

  const toggleForm = () => {
    setValues({ ...values, isRegistered: !values.isRegistered });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isRegistered } = values;
    if (!email || !password || (!isRegistered && !name)) {
      displayMessage();
      return;
    }
    const currentUser = { name, email, password };

    if (isRegistered) {
      console.log("Already have an account");
    } else {
      registerUser(currentUser);
    }
  };

  return (
    <Wrapper>
      <Header />

      <section className="login">
        <div className="login-container">
          <h1>{values.isRegistered ? "Login" : "Register"}</h1>
          {showMessage && <Message />}

          <form onSubmit={onSubmit} className="login-form">
            {!values.isRegistered && (
              <FormRow
                type="text"
                name="name"
                id="name *"
                placeholder="Your name"
                handleChange={handleChange}
                value={values.name}
              />
            )}
            <FormRow
              type="text"
              name="email"
              id="email *"
              placeholder="Email Address"
              handleChange={handleChange}
              value={values.email}
            />
            <FormRow
              type="text"
              name="password"
              id="password *"
              placeholder="Password"
              handleChange={handleChange}
              value={values.password}
            />

            <div className="login-btn-block">
              <Button
                className="btn login-btn"
                type="submit"
                disabled={isLoading}
              >
                {values.isRegistered ? "Login" : "Register"}
              </Button>
              <div className="login-btn-bg"></div>
            </div>

            <p className="toggleForm">
              {values.isRegistered
                ? `Don't have an account yet?`
                : "Already have an acoount?"}

              <button
                type="button"
                className="toggleForm-btn"
                onClick={toggleForm}
              >
                {values.isRegistered ? "Register" : "Login"}
              </button>
            </p>
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
    margin-top: 20px;
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
