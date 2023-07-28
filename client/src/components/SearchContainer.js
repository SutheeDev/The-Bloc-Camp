import { FormRow, FormRowSelect } from ".";
import { useAppContext } from "../context/appContext";
import styled from "styled-components";

const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    statusOptions,
    sort,
    sortOptions,
    handleInputChange,
    clearFilters,
  } = useAppContext();

  return (
    <Wrapper>
      <form className="form">
        <h3 className="form-title">filter shows</h3>
        <div className="form-content">
          <div className="form-row-container">
            <FormRow
              type="text"
              name="search"
              labelText="search"
              placeholder="search artist"
              // handleChange={handleInput}
              // value={artist}
              // required
            />

            <FormRowSelect
              name="status"
              placeholder="click to select a status"
              // handleChange={handleInput}
              list={statusOptions}
              // value={status}
            />

            <FormRowSelect
              name="sort"
              placeholder="click to sort the result"
              // handleChange={handleInput}
              list={sortOptions}
              // value={status}
            />

            {/* <div className="form-row-subcontainer">
              <DatePickerComponent name="performDate" selected={performDate} />
            </div> */}

            <div className="btn-container">
              <button
                type="submit"
                className="btn update-btn"
                disabled={isLoading}
                // onClick={handleSubmit}
              >
                search
              </button>
              <button className="btn clear-btn">clear all filters</button>
            </div>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;

const Wrapper = styled.div`
  color: var(--black);
  .form-input {
    border: none;
    background-color: var(--grey-100);
    text-transform: capitalize;
  }
  .form-input::placeholder {
    text-transform: capitalize;
  }
  .btn {
    text-transform: uppercase;
    padding: 1rem 3rem;
    color: var(--reddish);
    border: 3px solid var(--reddish);
    background-color: var(--white);
    border-radius: 1px;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 700;

    transition: all 0.3s ease;
  }
  .btn:hover {
    color: var(--white);
    border: 3px solid var(--darkBlue);
    background-color: var(--darkBlue);
  }
  .btn-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .update-btn,
  .clear-btn {
    margin-top: 1.5em;
    width: 100%;
  }
  .switch-container {
    display: flex;
    align-items: center;
  }
  .form-desc {
    width: 100%;
    outline: none;
    padding: 1rem;
    border: none;
    margin: 10px 0 17px 0;
    font-family: sans-serif;
    color: var(--darkBlue);
    background-color: var(--grey-100);
  }
  .form-status {
    text-transform: capitalize;
  }
  textarea::placeholder {
    text-transform: capitalize;
  }
  @media screen and (min-width: 450px) {
    .form-desc {
      margin: 10px 0 25px 0;
    }
    .btn-container {
      display: block;
      text-align: right;
    }
    .update-btn,
    .clear-btn {
      width: 45%;
      max-width: 200px;
    }
    .clear-btn {
      margin-left: 1.5em;
    }
  }
  @media screen and (min-width: 950px) {
    .form-row-subcontainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2em;
    }
  }
`;
