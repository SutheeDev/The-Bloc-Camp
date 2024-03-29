import styled from "styled-components";
import { TicketsBtn } from "../components";
import { useAppContext } from "../context/appContext";
import { useEffect, useState } from "react";
import moment from "moment";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Events = () => {
  const { shows, getPublishedShows } = useAppContext();
  const visibleItems = 12;
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    getPublishedShows().then(() => {
      setLocalLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  if (localLoading) {
    return (
      <WrapperLoading>
        <Loading center />
      </WrapperLoading>
    );
  }

  return (
    <Wrapper className="shows">
      <div className="shows-container">
        {shows.slice(0, visibleItems).map((show, index) => {
          const { artist, performDateTime } = show;
          const date = moment(performDateTime).format("DD");
          const day = moment(performDateTime).format("ddd");
          const month = moment(performDateTime).format("MMM");

          return (
            <div className="show" key={index}>
              <div className="show-info">
                <h2>{date}</h2>
                <div>
                  <p className="day">{day}</p>
                  <p>{month}</p>
                </div>
                <h3>{artist}</h3>
              </div>
              <TicketsBtn />
            </div>
          );
        })}

        <div className="fancy-btn">
          <Link to="/shows" className="link">
            get tickets
          </Link>
          <div className="btn-block"></div>
          <div className="btn-bg"></div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Events;

const WrapperLoading = styled.section`
  background-color: var(--lighterBlue);
  padding: 80px 0;
`;

const Wrapper = styled.section`
  /* ----------------- */
  /* Shows Section */
  /* ----------------- */
  background-color: var(--lighterBlue);
  padding: 80px 0;

  .shows-container {
    width: 70vw;
    max-width: 1000px;
    margin: 0 auto;
  }
  .show {
    padding: 80px 0;
    border-bottom: 1px solid #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }
  .show-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    overflow: hidden;

    transition: all 0.3s ease-out;
  }
  .show:hover .show-info {
    transform: translateX(-115px);
  }
  .show-info h2 {
    font-size: 42px;
    width: 55px;
  }
  .show-info p {
    text-transform: capitalize;
  }

  .show-info div {
    width: 60px;
  }
  .show-info h3 {
    font-size: 38px;
    text-transform: capitalize;
  }
  .day {
    color: #726185;
  }
  .fancy-btn {
    position: relative;
    height: 55px;
    margin-top: 80px;
  }
  .fancy-btn .link {
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    color: #221333;
    border: 3px solid #221333;
    background-color: transparent;
    border-radius: 1px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 2;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 700;

    transition: all 0.3s ease;
  }
  .fancy-btn div.btn-block {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-73%, -55%);
    width: 40vh;
    max-width: 220px;
    height: 27px;
    background-color: #ffffff;
    border-radius: 1px;
    z-index: 1;
  }
  .fancy-btn .link:hover {
    background-color: #221333;
    color: #df3311;
  }
  .btn-bg {
    width: 230px;
    height: 74px;
    background-color: #df3311;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-38%, -50%);
    border-radius: 1px;
  }
  /* ----------------- */
  /* Shows Section Media Queries */
  /* ----------------- */
  @media screen and (max-width: 850px) {
    padding: 50px 0;

    .shows-container {
      width: 85vw;
    }
    .show {
      padding: 50px 0;
    }
    .show-info h2 {
      font-size: 30px;
      width: 45px;
    }
    .show-info p {
      font-size: 12px;
    }
    .show-info h3 {
      font-size: 26px;
    }
    .show:hover .show-info {
      transform: translateX(-105px);
    }
  }
  @media screen and (max-width: 450px) {
    .show {
      flex-direction: column;
    }
    .show-info {
      width: 100%;
      justify-content: flex-start;
      margin-bottom: 20px;
    }
    .show-info h2 {
      width: 50px;
    }
    .show-info h3 {
      display: block;
      width: 100%;
    }
    .show-info div {
      width: 55px;
    }
    .show:hover .show-info {
      transform: translateX(-80px);
    }
  }
`;
