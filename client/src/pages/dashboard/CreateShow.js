import styled from "styled-components";
import { useAppContext } from "../../context/appContext";
import { FormRow, Message } from "../../components";

const CreateShow = () => {
  const { handleInputChange, showMessage } = useAppContext();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleInputChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Create Show");
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form-title">create show</h3>
        {showMessage && <Message />}
        <div className="form-content">
          <div className="form-row-content">
            <FormRow type="text" name="artist" />
            <FormRow type="date" name="date" />
            <FormRow type="time" name="performTime" labelText="start time" />
            <FormRow type="text" name="smallImg" labelText="thumbnail image" />
            <FormRow type="text" name="bigImg" labelText="featured image" />
            <FormRow
              type="number"
              name="ticketPrice"
              labelText="ticket price"
            />
            <FormRow
              type="checkbox"
              name="publish"
              labelText="publish on site?"
            />
            <FormRow
              type="checkbox"
              name="featured"
              labelText="featured show?"
            />
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default CreateShow;

const Wrapper = styled.div`
  color: var(--black);
`;
