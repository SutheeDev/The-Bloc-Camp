import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { setMinutes, setHours } from "date-fns";
import { useAppContext } from "../context/appContext";

const TimePickerComponent = ({ selected, name }) => {
  const { handleInputChange } = useAppContext();

  const handleInput = (value) => {
    handleInputChange({ name, value });
  };

  const MyContainer = ({ className, children }) => {
    return (
      <div className="calendar-container">
        <CalendarContainer className={className}>
          <div>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  return (
    <Wrapper className="form-row">
      <label htmlFor="performDate" className="form-label">
        start time *
      </label>
      <DatePicker
        selected={selected}
        closeOnScroll={true}
        className="date-picker form-input"
        calendarContainer={MyContainer}
        fixedHeight
        minDate={new Date()}
        placeholderText="Click to select time slot"
        popperModifiers={{
          name: "offset",
          options: {
            offset: [0, -15],
          },
        }}
        showTimeSelect
        showTimeSelectOnly
        timeFormat="HH:mm aa"
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="HH:mm aa"
        minTime={setHours(setMinutes(new Date(), 0), 12)}
        maxTime={setHours(setMinutes(new Date(), 30), 22)}
        onChange={handleInput}
      />
    </Wrapper>
  );
};

export default TimePickerComponent;

const Wrapper = styled.div`
  .form-label {
    display: block;
  }
  .date-picker {
    outline: none;
  }
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker {
    border: none;
    padding: 1.5em;
    box-shadow: 0px 1.3px 1.7px rgba(0, 0, 0, 0.028),
      0px 4.2px 5.6px rgba(0, 0, 0, 0.042), 0px 19px 25px rgba(0, 0, 0, 0.07);
    color: var(--darkBlue);
  }
  .react-datepicker__header {
    background-color: var(--white);
    border-bottom: 1px solid var(--darkBlue);
  }
  /* Color of month and day name in the Header */
  .react-datepicker__current-month,
  .react-datepicker__day-name {
    color: var(--darkBlue);
  }
  /* Day text color in general */
  .react-datepicker__day {
    color: var(--darkBlue);
  }
  /* Change color of day when hover */
  .react-datepicker__day:hover {
    background: var(--grey-100);
    border-radius: 50%;
  }
  /* Color of disabled day */
  .react-datepicker__day--disabled {
    color: var(--grey-200);
  }
  /* Style of the same day different months */
  .react-datepicker__day--keyboard-selected {
    background-color: var(--grey-200);
    border-radius: 50%;
  }
  /* Selected day style */
  .react-datepicker__day--selected {
    border-radius: 50%;
    background-color: var(--reddish);
    color: var(--white);
  }
  /* Navigation icons positions */
  .react-datepicker__navigation--next {
    top: 1.5em;
    right: 7px;
  }
  .react-datepicker__navigation--previous {
    top: 1.66em;
    left: 8px;
  }
  /* Change navigation icon color */
  .react-datepicker__navigation-icon::before {
    border-color: var(--darkBlue);
  }
  /* Change navigation icon color when hover */
  .react-datepicker__navigation:hover
    .react-datepicker__navigation-icon::before {
    border-color: var(--reddish);
  }
  .react-datepicker--time-only {
    width: 150px;
    display: flex;
    justify-content: center;
  }
  .react-datepicker--time-only div {
    width: 100%;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box {
    width: 100px;
  }
`;
