import {
  Navbar,
  Header,
  Footer,
  PageTitle,
  Show,
  Subscribe,
} from "../components";
import styled from "styled-components";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import moment from "moment";
import Loading from "../components/Loading";

const Shows = () => {
  const { isLoading, getPublishedShows, shows } = useAppContext();

  useEffect(() => {
    getPublishedShows();
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <Header />

      <section class="calendar">
        <div class="calendar-container">
          <PageTitle />
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
              />
            );
          })}
        </section>
      )}

      <Subscribe />
      <Footer />
    </Wrapper>
  );
};

export default Shows;

const WrapperLoading = styled.section`
  background-color: var(--lighterBlue);
  padding: 80px 0;
`;

const Wrapper = styled.main`
  background-color: var(--backgroundColor);
  .calendar {
    background-color: #221333;
    padding: 70px 0;
    margin-top: -5px;
  }
  .calendar-container {
    width: 75vw;
    margin: 0 auto;
    @media screen and (max-width: 850px) {
      width: 80vw;
    }
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
`;
