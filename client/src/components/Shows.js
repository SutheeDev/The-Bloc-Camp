import styled from "styled-components";

const Shows = () => {
  return (
    <section class="shows">
      <div class="shows-container">
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

        <div class="fancy-btn">
          <a href="#">
            <button>Get Tickets</button>
          </a>
          <div class="btn-block"></div>
          <div class="btn-bg"></div>
        </div>
      </div>
    </section>
  );
};
export default Shows;

const Wrapper = styled.section``;
