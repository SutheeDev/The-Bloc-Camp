import {
  Navbar,
  Header,
  Footer,
  PageTitle,
  Show,
  Subscribe,
  PageBtnContainer,
} from "../components";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import moment from "moment";
import Loading from "../components/Loading";

const Shows = () => {
  const [visibleItems, setVisibleItems] = useState(12);

  const { isLoading, getPublishedShows, shows, numOfPages, page } =
    useAppContext();

  const loadMore = () => {
    setVisibleItems(visibleItems + 12);
  };

  useEffect(() => {
    getPublishedShows();
  }, [page]);

  return (
    <Wrapper>
      <Navbar />
      <Header />

      <section class="calendar">
        <div class="calendar-container">
          <PageTitle text1="upcoming" text2="shows" />
        </div>
      </section>

      {isLoading ? (
        <section class="calendar-shows">
          <Loading center />
        </section>
      ) : (
        <section class="calendar-shows">
          {shows.map((show) => {
            const { artist, artistImage, artistInfo, performDateTime, _id } =
              show;
            const date = moment(performDateTime).format("ddd, MMM DD");
            return (
              <Show
                key={_id}
                artist={artist}
                artistImage={artistImage}
                artistInfo={artistInfo}
                date={date}
                id={_id}
              />
            );
          })}
        </section>
      )}
      {/* <div className="page-btn-container">
        {numOfPages > 1 && <PageBtnContainer />}
      </div> */}

      <div className="page-btn-container">
        <button>load more</button>
      </div>

      <Subscribe />
      <Footer />
    </Wrapper>
  );
};

export default Shows;

const Wrapper = styled.main`
  background-color: var(--backgroundColor);
  .calendar {
    background-color: #221333;
    padding: 70px 0;
    margin-top: -5px;
  }
  .calendar-container,
  .page-btn-container {
    width: 75vw;
    margin: 0 auto;
    @media screen and (max-width: 850px) {
      width: 80vw;
    }
  }
  .page-btn-container {
    display: flex;
    justify-content: center;
  }
  .calendar-shows {
    width: 75vw;
    max-width: 980px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 20px;
    row-gap: 40px;
    @media screen and (max-width: 850px) {
      width: 80vw;
    }
    @media screen and (max-width: 550px) {
      .calendar-shows {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    }
  }
  .prev-btn,
  .next-btn,
  .pageNum-btn {
    color: var(--reddish);
    border: 3px solid var(--reddish);
    background-color: transparent;
    border-radius: 1px;
  }
  .prev-btn:hover,
  .next-btn:hover,
  .pageNum-btn:hover {
    color: var(--white);
    border: 3px solid var(--darkRed);
  }
  .pageNum-btn.active {
    background-color: var(--reddish);
    color: var(--white);
  }
  .pageNum-btn.active:hover {
    color: var(--darkBlue);
    border: 3px solid var(--reddish);
  }
`;
