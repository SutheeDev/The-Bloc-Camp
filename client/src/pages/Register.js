import { Header, Footer } from "../components";
import styled from "styled-components";

const Register = () => {
  return (
    <Wrapper>
      {/* <Navbar /> */}
      <Header />

      <section class="login">
        <div class="login-container">
          <h1>Register</h1>

          <form action="submit" class="login-form">
            <input
              autocomplete="off"
              type="text"
              placeholder="Name *"
              name="name"
              class="username"
            />
            <input
              autocomplete="off"
              type="email"
              placeholder="Email *"
              name="email"
              class="email"
            />
            <input
              autocomplete="off"
              type="password"
              placeholder="Password *"
              name="password"
              class="password"
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
    background-color: #221333;
    /* background-color: blue; */
    padding: 30px 0 30px 0;
    /* height: 68vh; */
    /* overflow: hidden; */
  }
  .login-container {
    width: 90vw;
    margin: 0 auto;
    max-width: 450px;
    /* min-width: 450px; */
  }
  .login h1 {
    text-transform: uppercase;
    font-size: calc(3vw + 1rem);
    letter-spacing: 1px;
    background-color: transparent;
    padding: 0 0 25px 22px;
    line-height: 0;
  }
  /* ------------------- */
  /* Form */
  /* ------------------- */
  .thank-message {
    padding: 40px 20px;
    justify-content: center;
    align-items: center;
  }
  .thank-message h3 {
    text-transform: capitalize;
    font-size: calc(1.5vw + 0.5rem);
    letter-spacing: 1px;
    margin-bottom: 40px;
    line-height: 1.2;
  }
  .username,
  .password,
  .firstname,
  .lastname,
  input[type="email"].email-address {
    width: 100%;
    outline: none;
    padding: 1rem 1.5rem 1rem 1rem;
    border: none;
    border-width: 3px;
    border-color: #213333;
    border-style: solid;
    margin: 0 0 40px 0;
  }
  .username::placeholder,
  .password::placeholder,
  .firstname::placeholder,
  .lastname::placeholder,
  input[type="email"].email-address::placeholder {
    font-size: 14px;
    color: #84c3c3;
  }
  /* ------------------- */
  /* button */
  /* ------------------- */
  .login-btn-block {
    position: relative;
    width: 142px;
    height: 53px;
  }
  .subscribed-btn-block {
    position: relative;
    width: 250px;
    height: 53px;
  }
  .btn.login-btn {
    width: 100%;
    color: #221333;
    border: 3px solid #221333;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .btn.login-btn:hover {
    background-color: #221333;
    border: 3px solid #221333;
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
  /* Error_statement */
  /* ------------------- */
  .alert {
    border: none;
    border-radius: 2px;
    padding: 10px 30px;
    color: #df3311;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 200;
  }

  /* ------------------- */
  /* Media Queries */
  /* ------------------- */
  @media screen and (max-width: 850px) {
    .login {
      /* margin-top: 60px; */
      /* height: 58vh; */
    }
    .login-btn-block {
      width: 130px;
      height: 41px;
    }
    .subscribed-btn-block {
      height: 41px;
    }
    .thank-message h3 {
      font-size: 22px;
    }
  }
`;
