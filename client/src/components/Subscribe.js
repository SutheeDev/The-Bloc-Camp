import styled from "styled-components";

const Subscribe = () => {
  return (
    <Wrapper className="subscribe" id="subscribe-form">
      <div className="subscribe-info">
        <div className="subscribe-title">
          <h1>stay up to date</h1>
          <div className="block"></div>
        </div>
        <p>
          Sign up to get our newsletter for all the latest news, shows, and
          events
        </p>
      </div>
      <form action="submit" className="subscribe-form">
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email Address"
        />
        <div className="subscribe-btn-block">
          <button className="btn subscribe-btn" type="submit">
            Subscribe
          </button>
          <div className="subscribe-btn-bg"></div>
        </div>
      </form>
    </Wrapper>
  );
};
export default Subscribe;

const Wrapper = styled.section`
  background-color: #221333;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 80px 0;
  overflow: hidden;
  .subscribe-info {
    width: 35%;
    .subscribe-title {
      position: relative;
      height: 55px;
      h1 {
        text-transform: uppercase;
        font-size: calc(3vw + 1.1rem);
        letter-spacing: 1px;
        background-color: transparent;
        padding-left: 30px;
        line-height: 0;
        width: 200%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
      }
      .block {
        width: 70vw;
        max-width: 900px;
        height: 1.05rem;
        background-color: #221333;
        position: absolute;
        top: 50%;
        left: 25%;

        background-image: repeating-linear-gradient(
          60deg,
          #ffffff58 0px,
          #ffffff58 1px,
          #221333 1px,
          #221333 1px,
          #221333 1.5px
        );

        transform: translate(0, -27%);
        z-index: 1;
      }
    }
    p {
      font-size: 16px;
      letter-spacing: 1px;
      font-weight: 200;
      background-color: #df3311;
      padding: 70px 0 82px 30px;
    }
  }
  .subscribe-form {
    width: 50%;
    background-color: #df3311;
    padding: 75px 0 75px 40px;
    display: flex;
    gap: 20px;
    z-index: 1;
    input {
      width: 60%;
      outline: none;
      border: 3px solid var(--darkBlue);
      border-radius: 1px;
      padding: 1rem 1rem;
      &::placeholder {
        letter-spacing: 2px;
        color: var(--grey-300);
      }
    }
  }
  .btn {
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    color: #df3311;
    border: 3px solid var(--reddish);
    background-color: transparent;
    border-radius: 1px;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 700;

    transition: all 0.3s ease;
  }
  .subscribe-btn {
    width: 100%;
    color: #221333;
    border: 3px solid #221333;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .btn.subscribe-btn:hover {
    background-color: #221333;
    border: 3px solid #221333;
    color: #df3311;
  }
  .subscribe-btn-block {
    position: relative;
    width: 30%;
    max-width: 350px;
    height: 53px;
  }
  .subscribe-btn-bg {
    width: 160%;
    height: 50%;
    background-color: #ffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-25%, -50%);
    border-radius: 1px;
  }
  /* -------------------- */
  /* Subscribe Media Queries */
  /* -------------------- */
  @media screen and (max-width: 850px) {
    flex-direction: column;
    padding: 40px 20px;
    .subscribe-info {
      width: 100%;
      .subscribe-title {
        h1 {
          padding-left: 20px;
        }
        .block {
          display: none;
        }
      }
    }
    .subscribe-form {
      width: 100%;
      flex-direction: column;
      align-items: flex-end;
      padding: 0 20px 20px 20px;
      overflow: hidden;
      input {
        width: 100%;
        margin-top: 10px;
      }
    }
    .subscribe-info p {
      padding: 25px 0 15px 20px;
    }
    .subscribe-btn-block {
      width: 35%;
      height: 41px;
      .subscribe-btn-bg {
        transform: translate(-25%, -17%);
      }
    }
  }
`;
