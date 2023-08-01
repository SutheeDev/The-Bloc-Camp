import Loading from "./Loading";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import styled from "styled-components";
import Event from "./Event";
import PageBtnContainer from "./PageBtnContainer";

const EventsContainer = () => {
  const {
    getShows,
    isLoading,
    shows,
    totalShows,
    numOfPages,
    page,
    search,
    searchStatus,
    sort,
  } = useAppContext();

  useEffect(() => {
    getShows();
  }, [search, searchStatus, sort]);

  if (isLoading) {
    return <Loading center />;
  }

  if (shows.length === 0) {
    return (
      <Wrapper>
        <h2>No upcoming show to display </h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2>
        {totalShows} upcoming show{shows.length > 1 && "s"}
      </h2>
      <div>
        {shows.map((show) => {
          return <Event key={show._id} {...show} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
export default EventsContainer;

const Wrapper = styled.main`
  h2 {
    text-transform: capitalize;
  }
`;
