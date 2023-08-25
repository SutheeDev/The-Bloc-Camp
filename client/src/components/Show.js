import styled from "styled-components";
import { TicketsBtn, ToArtistPageBtn } from "../components";

const Show = ({ artist, artistImage, artistInfo, date, id }) => {
  return (
    <Wrapper class="calendar-show">
      <img src={artistImage} alt="" />
      <div class="calendar-show-info">
        <div class="band-date-info">
          <div class="band-date">
            <h2 class="band-name">{artist}</h2>
            <h2 className="date">{date}</h2>
          </div>
          <div class="band-info">
            <p>{artistInfo}</p>
          </div>
        </div>
        <div class="getTicket-btn">
          <TicketsBtn />
          <ToArtistPageBtn />
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
  @media screen and (max-width: 850px) {
    min-width: 100%;
  }
  img {
    width: 100%;
    filter: grayscale(100%);
  }
  .calendar-show-info {
    position: relative;
    background-color: #221333;
    height: 215px;
    margin-top: -4px;
    .band-date-info {
      width: 100%;
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
        line-height: 1.1;
      }
      .band-name {
        min-height: 65px;
      }
      .date {
        margin-bottom: 25px;
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
