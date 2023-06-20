import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = () => {
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
    <div className="form-row">
      <label htmlFor="performDate" className="form-label">
        show date
      </label>
      <DatePicker
        selected={new Date()}
        closeOnScroll={true}
        className="date-picker"
        calendarContainer={MyContainer}
      />
    </div>
  );
};

export default DatePickerComponent;
