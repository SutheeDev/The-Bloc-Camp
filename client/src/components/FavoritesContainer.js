import Loading from "./Loading";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import styled from "styled-components";
import Event from "./Event";
import PageBtnContainer from "./PageBtnContainer";

const FavoritesContainer = () => {
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
    getUpcomingShows,
    user,
    getFavoriteShows,
    favorites,
  } = useAppContext();

  useEffect(() => {
    getFavoriteShows();
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
        {totalShows} favorite show{shows.length > 1 && "s"}
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
export default FavoritesContainer;

const Wrapper = styled.main`
  h2 {
    text-transform: capitalize;
  }
`;
