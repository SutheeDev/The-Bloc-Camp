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
        {totalShows} upcoming show{shows.length > 1 && "s"} found
      </h2>
      {shows.map((show) => {
        return <Event key={show._id} {...show} />;
      })}
    </Wrapper>
  );
};
export default EventsContainer;

const Wrapper = styled.main``;
