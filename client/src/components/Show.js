import styled from "styled-components";
import { TicketsBtn } from "../components";
import bandImg from "../assets/images/img-band-1.jpg";

const Show = () => {
  return (
    <Wrapper class="calendar-show">
      <img src={bandImg} alt="" />
      <div class="calendar-show-info">
        <div class="band-date-info">
          <div class="band-date">
            <h2 class="band-name">The Generators</h2>
            <h2>Mon, Feb 27</h2>
          </div>
          <div class="band-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              debitis neque at, mollitia qui veritatis suscipit voluptates
              architecto ratione optio!
            </p>
          </div>
        </div>
        <div class="getTicket-btn">
          <TicketsBtn />
        </div>
      </div>
    </Wrapper>
  );
};
export default Show;

const Wrapper = styled.article`
  max-width: 280px;
  background-color: #221333;
  overflow: hidden;
  @media screen and (max-width: 680px) {
    min-width: 100%;
  }
  img {
    width: 100%;
    filter: grayscale(100%);
  }
  .calendar-show-info {
    position: relative;
    background-color: #221333;
    height: 285px;
    margin-top: -4px;
    .band-date-info {
      background-color: #221333;
      padding: 16px 25px;
      position: absolute;
      top: 0;
      left: 0;
      min-height: 426px;

      transition: all 0.3s ease;
    }
    .band-date {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h2 {
        font-size: 28px;
        text-transform: capitalize;
        letter-spacing: 0.5px;
        margin-bottom: 25px;
        line-height: 1.1;
      }
      .band-name {
        min-height: 95px;
      }
    }
    .getTicket-btn {
      width: 100%;
      height: 95px;
      display: grid;
      place-items: center;
      background-color: #221333;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 3;
    }
  }
  :hover .band-date-info {
    top: -200px;
  }
`;
