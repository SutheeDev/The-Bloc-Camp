import styled from "styled-components";
import moment from "moment";
import {
  BiStar,
  BiCalendarEvent,
  BiTime,
  BiMessageSquareCheck,
  BiMessageSquareX,
} from "react-icons/bi";

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

        <div className="event-info">
          <div className="title-container">
            <BiStar className="star-icon" />
            <h3 className="artist-title">{artist}</h3>
          </div>

          <div className="event-datetime">
            <div className="event-daydate">
              <BiCalendarEvent className="calendar-icon" />
              <p className="event-day">{day}</p>
              <p className="event-date">{date}</p>
            </div>
            <div className="time-container">
              <BiTime className="time-icon" />
              <p className="event-time">{time}</p>
            </div>
          </div>

          <div className="event-condition">
            <div className="condition">
              <div className="published">
                <BiMessageSquareCheck className="check-icon" />
                <p>published</p>
              </div>
              <div className="featured">
                <BiMessageSquareX className="x-icon" />
                <p>featured</p>
              </div>
            </div>
            <div className="event-status">
              <div className="status">upcoming</div>
            </div>
          </div>
        </div>

        <div className="btn-container">
          <button type="button" className="btn edit-btn">
            edit
          </button>
          <button type="button" className="btn del-btn">
            delete
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Event;

const Wrapper = styled.div`
  margin: 2em 0;
  font-family: var(--bodyFont);
  .event-info-container {
    border-radius: 2px;
    overflow: hidden;
    padding-bottom: 1.4em;
    box-shadow: 0px 0.2px 0.2px rgba(0, 0, 0, 0.014),
      0px 0.4px 0.5px rgba(0, 0, 0, 0.02), 0px 0.8px 1px rgba(0, 0, 0, 0.025),
      0px 1.3px 1.8px rgba(0, 0, 0, 0.03), 0px 2.5px 3.3px rgba(0, 0, 0, 0.036),
      0px 6px 8px rgba(0, 0, 0, 0.05);

    transition: all 0.3s ease;
  }
  .event-info-container:hover {
    box-shadow: 0px 0.7px 1.7px rgba(0, 0, 0, 0.014),
      0px 1.8px 4.1px rgba(0, 0, 0, 0.02), 0px 3.4px 7.8px rgba(0, 0, 0, 0.025),
      0px 6px 13.8px rgba(0, 0, 0, 0.03), 0px 11.3px 25.9px rgba(0, 0, 0, 0.036),
      0px 27px 62px rgba(0, 0, 0, 0.05);
  }
  .event-info {
    padding: 1.2em 1em;
  }
  .event-img {
    width: 100%;
  }
  .event-img img {
    width: 100%;
  }
  .event-datetime {
    display: flex;
    align-items: center;
  }
  .title-container {
    border-bottom: 1px solid var(--grey-100);
    padding-bottom: 0.9em;
    margin-bottom: 0.8em;
  }
  .event-datetime {
    margin-bottom: 0.6em;
  }
  .event-daydate {
    width: 50%;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    font-size: 0.85rem;
    color: var(--lighterBlue);
  }
  .event-day,
  .event-date {
    font-weight: 400;
  }
  .event-day {
    margin-right: 0.3em;
  }
  .time-container {
    width: 50%;
    display: flex;
    align-items: center;
  }
  .event-time {
    font-size: 0.85rem;
    font-weight: 400;
    color: var(--grey-300);
  }
  .time-icon,
  .calendar-icon,
  .star-icon,
  .check-icon,
  .x-icon {
    display: flex;
    width: 18px;
    height: 18px;
    justify-content: center;
    align-items: center;
    margin-right: 7px;
  }
  .x-icon {
    color: var(--error-text);
  }
  .check-icon {
    color: var(--success-text);
  }
  .time-icon {
    font-size: 1.15rem;
    color: var(--grey-300);
  }
  .title-container {
    font-size: 1rem;
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }
  .artist-title {
    font-weight: 600;
    color: var(--lighterBlue);
  }
  .status {
    text-transform: capitalize;
    background-color: var(--grey-300);
    color: var(--white);
    width: 60%;
    min-width: 90px;
    max-width: 140px;
    text-align: center;
    padding: 0.6em 0.2em;
    border-radius: 3px;
  }

  .btn-container {
    text-align: left;
    padding: 0 1em;
  }
  .btn {
    font-size: 0.7rem;
    text-transform: uppercase;
    padding: 0.7em 1.6em;
    color: var(--grey-300);
    border: 2px solid var(--grey-300);
    background-color: transparent;
    border-radius: 1px;
    cursor: pointer;
    font-weight: 600;
    margin-right: 1.1em;

    transition: all 0.2s ease;
  }
  /* .btn:hover {
    color: var(--white);
    background-color: var(--lighterBlue);
    border: 2px solid var(--lighterBlue);
  } */
  .published,
  .featured {
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }
  .event-condition {
    display: flex;
    align-items: center;
  }
  .condition,
  .event-status {
    width: 50%;
  }
`;
