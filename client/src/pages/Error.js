import { Header, Footer } from "../components";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <Header />
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">page not found</h2>
        <p className="error-msg">
          We couldn't find the page you were looking for!
        </p>
        <Link className="error-btn" to="/">
          home
        </Link>
      </div>
      <Footer />
    </Wrapper>
  );
};
export default Error;

const Wrapper = styled.main`
  color: var(--white);
  .header {
    padding: 0;
  }
  .error-container {
    text-align: center;
    padding: 3em 0 7em 0;
  }
  .error-code {
    font-size: 9rem;
    color: var(--reddish);
    line-height: 0.9;
  }
  .error-title {
    text-transform: capitalize;
    font-size: 2rem;
    margin-top: -3.7em;
  }
  .error-msg {
    font-family: var(--bodyFont);
    margin: 1em 0 3em 0;
  }
  .error-btn {
    text-transform: uppercase;
    padding: 0.5rem 2rem;
    color: var(--reddish);
    border: 2px solid var(--reddish);
    background-color: transparent;
    border-radius: 1px;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 700;

    transition: all 0.3s ease;
  }
  .error-btn:hover {
    color: var(--white);
    border: 2px solid var(--darkRed);
  }
  @media screen and (min-width: 450px) {
    .error-code {
      font-size: 11rem;
      line-height: 0.7;
    }
    .error-title {
      font-size: 3rem;
      margin-top: -2.7em;
    }
    .error-msg {
      margin: 1.2em 0 3em 0;
    }
  }
  @media screen and (min-width: 850px) {
    .header {
      padding: 60px 0 0 0;
    }
    .error-container {
      padding: 3em 0 8em 0;
    }
    .error-code {
      font-size: 17rem;
      line-height: 0;
    }
    .error-title {
      font-size: 3.5rem;
      margin-top: -1.8em;
    }
    .error-msg {
      margin: 2em 0 4em 0;
    }
    .error-btn {
      padding: 1rem 3.5rem;
    }
  }
`;
