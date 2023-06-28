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
          <BiStar className="star-icon" />
          <h3 className="artist-title">{artist}</h3>
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
  margin-bottom: 2cqmin;
  .event-info-container {
    display: flex;
    /* justify-content: space-between; */
    /* align-items: flex-start; */
    gap: 1em;

    font-family: var(--bodyFont);
  }
  .event-img {
    /* width: 160px; */
    width: 25%;
    max-width: 160px;
    background-color: red;
  }
  .event-img img {
    width: 100%;
  }
  .event-datetime {
    width: 15%;
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
    width: 40%;
    text-transform: capitalize;
    color: var(--lighterBlue);
    /* padding-top: 1em; */

    display: flex;
    /* justify-content: baseline; */
    /* align-items: center; */
    /* gap: 0.5em; */
    /* background-color: red; */
  }
  .artist-title {
    font-size: 1rem;
    font-weight: 600;
    /* align-self: baseline; */
    /* background-color: white; */
  }
  .star-icon {
    /* background-color: wheat; */
    display: flex;
    font-size: 1.5rem;
    /* align-self: baseline; */
  }
  .btn-container {
    width: 20%;
  }
`;
