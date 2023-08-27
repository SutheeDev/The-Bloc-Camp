import Loading from "./Loading";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import styled from "styled-components";
import Event from "./Event";

const FavoritesContainer = () => {
  const { isLoading, shows, page, user, getFavoriteShows, clearFilters } =
    useAppContext();

  useEffect(() => {
    getFavoriteShows();
    clearFilters();
  }, [page, user]);

  if (isLoading) {
    return <Loading center />;
  }

  if (shows.length === 0) {
    return (
      <Wrapper>
        <h2>you have no favorite shows</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2>
        {shows.length} favorite show{shows.length > 1 && "s"}
      </h2>
      <div>
        {shows.map((show) => {
          return <Event key={show._id} {...show} />;
        })}
      </div>
    </Wrapper>
  );
};
export default FavoritesContainer;

const Wrapper = styled.main`
  h2 {
    text-transform: capitalize;
  }
`;
