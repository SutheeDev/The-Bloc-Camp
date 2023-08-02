import styled from "styled-components";
import { TicketsBtn } from "../components";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import moment from "moment";

const Events = () => {
  const { shows, getPublishedShows } = useAppContext();

  useEffect(() => {
    getPublishedShows();
  }, []);

  return (
    <Wrapper class="shows">
      <div class="shows-container">
        {shows.map((show) => {
          const { artist, performDateTime } = show;
          const date = moment(performDateTime).format("DD");
          const day = moment(performDateTime).format("ddd");
          const month = moment(performDateTime).format("MMM");

          return (
            <div class="show">
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

        <div class="fancy-btn">
          <a href="#">
            <button>Get Tickets</button>
          </a>
          <div class="btn-block"></div>
          <div class="btn-bg"></div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Events;

const Wrapper = styled.section`
  /* ----------------- */
  /* Shows Section */
  /* ----------------- */
  background-color: var(--lighterBlue);
  padding: 50px 0;

  .shows-container {
    width: 85vw;
    max-width: 1000px;
    margin: 0 auto;
  }
  .show {
    display: flex;
    flex-direction: column;
    padding: 50px 0;
    /* justify-content: space-between; */
    align-items: center;
    overflow: hidden;
    border-bottom: 1px solid #ffffff;
  }
  .show-info {
    /* background-color: red; */
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* gap: 15px; */
    cursor: pointer;
    overflow: hidden;
    margin-bottom: 20px;

    transition: all 0.3s ease-out;
  }
  .show-info h2 {
    /* font-size: 30px; */
    font-size: 1.9rem;
    /* width: 10%; */
    width: 45px;
    /* background-color: wheat; */
  }
  .show-info p {
    font-size: 12px;
    text-transform: capitalize;
    /* background-color: black; */
  }
  .show-info div {
    width: 50px;
  }
  .show-info h3 {
    /* background-color: blue; */
    /* display: block; */
    /* width: 100%; */
    /* font-size: 26px; */
    font-size: 1.65rem;
    /* padding-left: 15px; */
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
  .fancy-btn button {
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
  .fancy-btn button:hover {
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
  @media screen and (min-width: 450px) {
    .show {
      flex-direction: row;
      justify-content: space-between;
    }
    .show-info {
      width: 65%;
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 850px) {
    padding: 80px 0;
    .shows-container {
      width: 70vw;
    }
    .show {
      padding: 80px 0;
    }
    .show-info h2 {
      /* font-size: 42px; */
      font-size: 2.6rem;
      width: 65px;
    }
    .show-info div {
      width: 65px;
    }
    .show-info h3 {
      font-size: 38px;
    }
  }
  /* 
  
  .show:hover .show-info {
    transform: translateX(-110px);
  }
  
  
  .show-info h3 {
    font-size: 38px;
    text-transform: capitalize;
    padding-left: 20px;
  }
  .day {
    color: #726185;
  }
  .fancy-btn {
    position: relative;
    height: 55px;
    margin-top: 80px;
  }
  .fancy-btn button {
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
  .fancy-btn button:hover {
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
  } */
  /* ----------------- */
  /* Shows Section Media Queries */
  /* ----------------- */
  /* @media screen and (max-width: 850px) {

    
    .show-info h3 {
      font-size: 26px;
      padding-left: 15px;
    }
    .show:hover .show-info {
      transform: translateX(-90px);
    }
  }
  @media screen and (max-width: 450px) {
    
    .show-info {
      width: 100%;
      justify-content: flex-start;
      margin-bottom: 20px;
    }
    .show-info h3 {
      display: block;
      width: 100%;
    }
    .show:hover .show-info {
      transform: translateX(-90px);
    } */
  /* }  */
`;
