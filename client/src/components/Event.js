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
            <div className="calendar-icon">
              <BiCalendarEvent />
            </div>
            <p className="event-day">{day}</p>
            <p className="event-date">{date}</p>
          </div>
          <div className="time-container">
            <div className="time-icon">
              <BiTime />
            </div>
            <p className="event-time">{time}</p>
          </div>
        </div>

        <div className="title-container">
          <BiStar className="star-icon" />
          <h3 className="artist-title">{artist}</h3>
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
  .event-img {
    width: 100%;
    margin-bottom: 1em;
  }
  .event-img img {
    width: 100%;
  }
  .event-datetime {
    display: flex;
    gap: 1em;
    align-items: center;
    margin-bottom: 0.2em;
  }
  .event-datetime,
  .title-container,
  .btn-container {
    padding-left: 16px;
  }
  .event-daydate {
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
  .star-icon {
    display: flex;
    width: 18px;
    justify-content: center;
    align-items: center;
    margin-right: 7px;
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
    margin-bottom: 1em;
  }
  .artist-title {
    font-weight: 600;
    color: var(--lighterBlue);
  }
  .btn-container {
    text-align: right;
  }
  .btn {
    font-size: 0.7rem;
    text-transform: uppercase;
    padding: 0.3em 0.7em;
    color: var(--grey-300);
    border: 2px solid var(--grey-300);
    background-color: transparent;
    border-radius: 2px;
    cursor: pointer;
    font-weight: 400;
    margin-left: 1.5em;

    transition: all 0.2s ease;
  }
  .btn:hover {
    color: var(--white);
    background-color: var(--lighterBlue);
    border: 2px solid var(--lighterBlue);
  }
  .del-btn {
    margin-right: 1.5em;
  }
`;
