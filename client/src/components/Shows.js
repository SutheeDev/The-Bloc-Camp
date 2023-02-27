import styled from "styled-components";

const Shows = () => {
  return (
    <Wrapper class="shows">
      <div class="shows-container">
        {/* Show */}
        <div class="show">
          <div class="show-info">
            <h2>27</h2>
            <div>
              <p class="day">Mon</p>
              <p>Feb</p>
            </div>
            <h3>The Generators</h3>
          </div>
          <a href="#">
            <button class="btn">get tickets</button>
          </a>
        </div>
        {/* End Show */}

        {/* Show */}
        <div class="show">
          <div class="show-info">
            <h2>27</h2>
            <div>
              <p class="day">Mon</p>
              <p>Feb</p>
            </div>
            <h3>The Generators</h3>
          </div>
          <a href="#">
            <button class="btn">get tickets</button>
          </a>
        </div>
        {/* End Show */}

        {/* Show */}
        <div class="show">
          <div class="show-info">
            <h2>27</h2>
            <div>
              <p class="day">Mon</p>
              <p>Feb</p>
            </div>
            <h3>The Generators</h3>
          </div>
          <a href="#">
            <button class="btn">get tickets</button>
          </a>
        </div>
        {/* End Show */}

        {/* Show */}
        <div class="show">
          <div class="show-info">
            <h2>27</h2>
            <div>
              <p class="day">Mon</p>
              <p>Feb</p>
            </div>
            <h3>The Generators</h3>
          </div>
          <a href="#">
            <button class="btn">get tickets</button>
          </a>
        </div>
        {/* End Show */}

        {/* Show */}
        <div class="show">
          <div class="show-info">
            <h2>27</h2>
            <div>
              <p class="day">Mon</p>
              <p>Feb</p>
            </div>
            <h3>The Generators</h3>
          </div>
          <a href="#">
            <button class="btn">get tickets</button>
          </a>
        </div>
        {/* End Show */}

        <div class="fancy-btn">
          <a href="#">
            <button>Get Tickets</button>
          </a>
          <div class="btn-block"></div>
          <div class="btn-bg"></div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Shows;

const Wrapper = styled.section`
  /* ----------------- */
  /* Shows Section */
  /* ----------------- */
  background-color: var(--lighterBlue);
  padding: 80px 0;

  .shows-container {
    width: 65vw;
    max-width: 1000px;
    margin: 0 auto;
  }
  .show {
    padding: 80px 0;
    border-bottom: 1px solid #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }
  .show-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    overflow: hidden;

    transition: all 0.3s ease-out;
  }
  .show:hover .show-info {
    transform: translateX(-110px);
  }
  .show-info h2 {
    font-size: 42px;
  }
  .show-info p {
    text-transform: capitalize;
  }
  .show-info h3 {
    font-size: 38px;
    text-transform: capitalize;
    padding-left: 20px;
  }
  .btn {
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    color: #df3311;
    border: 3px solid #df3311;
    background-color: transparent;
    border-radius: 1px;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 700;

    transition: all 0.3s ease;
  }
  .btn:hover {
    color: #ffffff;
    border: 3px solid #8f210c;
  }
  .day {
    color: #726185;
  }
  .fancy-btn {
    position: relative;
    height: 55px;
    margin-top: 80px;
  }
  .fancy-btn button {
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    color: #221333;
    border: 3px solid #221333;
    background-color: transparent;
    border-radius: 1px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 2;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 700;

    transition: all 0.3s ease;
  }
  .fancy-btn div.btn-block {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-73%, -55%);
    width: 40vh;
    max-width: 220px;
    height: 27px;
    background-color: #ffffff;
    border-radius: 1px;
    z-index: 1;
  }
  .fancy-btn button:hover {
    background-color: #221333;
    color: #df3311;
  }
  .btn-bg {
    width: 230px;
    height: 74px;
    background-color: #df3311;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-38%, -50%);
    border-radius: 1px;
  }
  /* ----------------- */
  /* Shows Section Media Queries */
  /* ----------------- */
  @media screen and (max-width: 850px) {
    padding: 50px 0;

    .shows-container {
      width: 85vw;
    }
    .show {
      padding: 50px 0;
    }
    .show-info h2 {
      font-size: 30px;
    }
    .show-info p {
      font-size: 12px;
    }
    .show-info h3 {
      font-size: 26px;
      padding-left: 15px;
    }
    .btn {
      padding: 10px 18px;
    }
    .show:hover .show-info {
      transform: translateX(-90px);
    }
  }
  @media screen and (max-width: 450px) {
    .show {
      flex-direction: column;
    }
    .show-info {
      width: 100%;
      justify-content: flex-start;
      margin-bottom: 20px;
    }
    .show-info h3 {
      display: block;
      width: 100%;
    }
    .btn {
      display: block;
      width: 100%;
    }
    .show:hover .show-info {
      transform: translateX(-90px);
    }
  }
`;
