import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const PageButtons = () => {
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
  console.log(pages);

  return (
    <Wrapper>
      <button className="prev-btn">
        <BiChevronsLeft />
        prev
      </button>

      <div className="pageNumber-btn">
        {pages.map((pageNumber) => {
          return <button type="button">{pageNumber}</button>;
        })}
      </div>

      <button className="next-btn">
        next
        <BiChevronsRight />
      </button>
    </Wrapper>
  );
};
export default PageButtons;

const Wrapper = styled.div``;
