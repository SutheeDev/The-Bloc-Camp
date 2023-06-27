import styled from "styled-components";
import moment from "moment";

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
        <h3 className="artist-title">{artist}</h3>
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
  .event-info-container {
    display: flex;
    /* justify-content: space-between; */
    align-items: flex-start;
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
    width: 25%;
    padding-top: 1em;
  }
  .event-daydate {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
  .event-day {
    text-transform: capitalize;
  }
  .event-date {
    text-transform: uppercase;
  }
  .artist-title {
    width: 25%;
    padding-top: 1em;

    text-transform: capitalize;
  }
  .btn-container {
    width: 20%;
  }
`;
