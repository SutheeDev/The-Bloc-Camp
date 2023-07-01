import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const {
    user,
    showMessage,
    displayMessage,
    isLoading,
    hideMessage,
    registerUser,
    loginUser,
    role,
  } = useAppContext();

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
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        if (role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/dashboard");
        }
      }, 3000);
    }
  }, [user, navigate]);

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
              type="email"
              name="email"
              id="email *"
              placeholder="Email Address"
              handleChange={handleChange}
              value={values.email}
            />
            <FormRow
              type="password"
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
  padding: 0.725em 1.125em;
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
  @media screen and (min-width: 850px) {
    padding: 1.135em 1.5em;
  }
`;

const Wrapper = styled.main`
  .header {
    top: 0;
    padding: 20px 0;
  }
  /* ------------------- */
  /* Login Page, Subscribe Page, Subscribed Page */
  /* ------------------- */
  background-color: var(--darkBlue);
  .login {
    padding: 20px 0 20px 0;
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
    margin-top: 20px;
  }
  /* ------------------- */
  /* button */
  /* ------------------- */
  .login-btn-block {
    position: relative;
    width: 130px;
    height: 41px;
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
  @media screen and (min-width: 850px) {
    .login-btn-block {
      width: 142px;
      height: 53px;
    }
  }
`;
