import styled from "styled-components";
import moment from "moment";
import { BiStar, BiCalendarEvent, BiTime } from "react-icons/bi";

const Event = ({ artist, performDateTime, featureImage }) => {
  let date = moment(performDateTime);
  let time = moment(performDateTime);
  let day = moment(performDateTime);

  date = date.locale("en").format("MMM D");
  day = day.locale("en").format("ddd");
  time = time.locale("en").format("hh:mm a");

  return (
    <Wrapper>
      <div className="event-info-container">
        <div className="event-img">
          <img src={featureImage}></img>
        </div>
        <div className="event-datetime">
          <div className="event-daydate">
            <h3 className="event-day">{day}</h3>
            <h3 className="event-date">{date}</h3>
          </div>
          <h3 className="event-time">{time}</h3>
        </div>
        <div className="title-container">
          <div>
            <BiStar className="star-icon" />
            <h3 className="artist-title">{artist}</h3>
          </div>
        </div>
        <div className="btn-container">
          <button type="button" className="btn">
            edit
          </button>
          <button type="button" className="btn">
            delete
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Event;

const Wrapper = styled.div`
  /* width: 100%; */
  margin-bottom: 2em;
  .event-info-container {
    display: flex;
    gap: 1em;

    font-family: var(--bodyFont);
  }
  .event-img {
    /* width: 25%; */
    max-width: 160px;
    min-width: 110px;
    background-color: red;
  }
  .event-img img {
    width: 100%;
  }
  .event-datetime {
    /* width: 15%; */
    min-width: 100px;
  }
  .event-daydate {
    display: flex;
    align-items: center;
    gap: 0.5em;
    color: var(--lighterBlue);
    text-transform: capitalize;
    padding-top: 1em;
  }
  .event-day,
  .event-date {
    font-size: 1rem;
    font-weight: 400;
  }
  .event-time {
    font-size: 0.85rem;
    font-weight: 400;
    color: var(--grey-300);
    margin-top: 0.3em;
  }
  .title-container {
    /* width: 40%; */
    text-transform: capitalize;
    color: var(--lighterBlue);
  }
  .title-container div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.3em;
    padding-top: 1em;
  }
  .artist-title {
    font-size: 1rem;
    font-weight: 600;
  }
  .star-icon {
    display: flex;
    font-size: 1rem;
  }
  .btn-container {
    /* width: 30%; */
    padding-top: 1em;
    text-align: right;
  }
  .btn {
    font-size: 0.7rem;
    text-transform: uppercase;
    padding: 0.3em 0.7em;
    color: var(--grey-300);
    border: 2px solid var(--grey-300);
    background-color: transparent;
    border-radius: 1px;
    cursor: pointer;
    /* letter-spacing: 1px; */
    font-weight: 400;
    margin-left: 1.1em;

    transition: all 0.3s ease;
  }
  .btn:hover {
    color: var(--white);
    background-color: var(--darkBlue);
    border: 2px solid var(--darkBlue);
  }
  /* }
  @media screen and (max-width: 850px) {
    .btn {
      padding: 10px 18px;
    }
  }
  @media screen and (max-width: 450px) {
    .btn {
      display: block;
      width: 100%;
    }
  } */
`;
