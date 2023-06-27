import styled from "styled-components";
import moment from "moment";

const Event = ({ artist, performDateTime, featureImage }) => {
  let date = moment(performDateTime);
  let time = moment(performDateTime);

  date = date.format("ddd, MMM Do YYYY");
  time = time.format("hh:mm a");

  return (
    <Wrapper>
      <div>
        <img src={featureImage}></img>
        <div className="event-date">
          <h3>{date}</h3>
          <h3>{time}</h3>
        </div>
        <h3>{artist}</h3>
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

const Wrapper = styled.div``;
