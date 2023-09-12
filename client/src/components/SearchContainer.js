import { FormRow, FormRowSelect } from ".";
import { useAppContext } from "../context/appContext";
import styled from "styled-components";
import { useState, useMemo } from "react";

const SearchContainer = () => {
  const {
    searchStatus,
    statusOptions,
    sort,
    sortOptions,
    handleInputChange,
    clearFilters,
    user,
  } = useAppContext();

  const [localSearch, setLocalSearch] = useState("");

  const handleSearch = (e) => {
    handleInputChange({ name: e.target.name, value: e.target.value });
  };

  const debounce = () => {
    let timeoutID;
    return (e) => {
      clearTimeout(timeoutID);
      setLocalSearch(e.target.value);
      timeoutID = setTimeout(() => {
        handleInputChange({ name: e.target.name, value: e.target.value });
      }, 1000);
    };
  };

  const optimizedDebounce = useMemo(() => debounce(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch("");
    clearFilters();
  };

  return (
    <Wrapper>
      <form className="form">
        <h2 className="search-title">filter shows</h2>
        <div className="form-content">
          <div className="form-row-container">
            <FormRow
              type="text"
              name="search"
              labelText="search"
              placeholder="search artist"
              handleChange={optimizedDebounce}
              value={localSearch}
            />

            {user.role === "admin" && (
              <FormRowSelect
                name="searchStatus"
                labelText="status"
                handleChange={handleSearch}
                list={["all", ...statusOptions]}
                value={searchStatus}
              />
            )}

            <FormRowSelect
              name="sort"
              handleChange={handleSearch}
              list={sortOptions}
              value={sort}
            />
          </div>
          <div className="btn-container">
            <button
              className={
                user.role === "admin"
                  ? "btn clear-btn"
                  : "btn clear-btn half-width"
              }
              onClick={handleSubmit}
            >
              clear filters
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;

const Wrapper = styled.div`
  color: var(--black);
  margin-bottom: 4em;
  .search-title {
    text-transform: capitalize;
    margin-bottom: 1em;
  }
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
    .clear-btn {
      width: 45%;
      max-width: 200px;
    }
  }
  @media screen and (min-width: 950px) {
    .form-row-container {
      display: flex;
      gap: 2%;
      margin-bottom: -1em;
    }
    .form-row-container > * {
      width: 100%;
    }
    .clear-btn {
      width: 32%;
      max-width: none;
    }
    .half-width {
      width: 49%;
    }
  }
`;
