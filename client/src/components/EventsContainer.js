import Loading from "./Loading";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import styled from "styled-components";
import Event from "./Event";

const EventsContainer = () => {
  const { getShows, isLoading, shows, totalShows, numOfPages, page } =
    useAppContext();

  useEffect(() => {
    getShows();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  if (totalShows.length === 0) {
    return (
      <Wrapper>
        <h1>No upcoming show to display </h1>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h1>
        {totalShows} upcoming show{totalShows > 1 && "s"} found
      </h1>
      {shows.map((show) => {
        return <Event />;
      })}
    </Wrapper>
  );
};
export default EventsContainer;

const Wrapper = styled.main``;
