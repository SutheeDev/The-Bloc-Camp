import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const PageBtnContainer = () => {
  const { numOfPages, page } = useAppContext();

  const prevPage = () => {
    console.log("previos page");
  };
  const nextPage = () => {
    console.log("next page");
  };

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  return (
    <Wrapper>
      <button className="prev-btn">
        <div className="prev-icon">
          <BiChevronsLeft />
        </div>
        prev
      </button>

      <div className="pageNumber-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              class={pageNumber === page ? "pageNum-btn active" : "pageNum-btn"}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      <button className="next-btn">
        next
        <div className="next-icon">
          <BiChevronsRight />
        </div>
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;

const Wrapper = styled.div`
  font-family: var(--bodyFont);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1em;
  margin-top: 3em;
  margin-bottom: 3em;
  font-size: 0.9rem;
  .prev-btn,
  .next-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
  }
  .prev-btn,
  .next-btn,
  .pageNum-btn {
    padding: 0.5em 0.9em;
    color: var(--grey-300);
    border: 2px solid var(--grey-300);
    background-color: transparent;
    border-radius: 3px;
    cursor: pointer;
    font-weight: 600;

    transition: all 0.2s ease;
  }
  .prev-btn:hover,
  .next-btn:hover,
  .pageNum-btn:hover {
    color: var(--blue);
  }
  .pageNum-btn.active {
    background-color: var(--grey-300);
    color: var(--white);
  }
  .pageNum-btn.active:hover {
    color: var(--blue);
  }
  .pageNumber-container {
    display: flex;
    gap: 0.3em;
  }
  .prev-icon,
  .next-icon {
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .prev-icon {
    margin-right: 0.2em;
  }
  .next-icon {
    margin-left: 0.2em;
  }
`;
