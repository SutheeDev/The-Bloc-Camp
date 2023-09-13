import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/core";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import moment from "moment";
import styled from "styled-components";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Slideshow = () => {
  const { getFeaturedShows, featuredShows } = useAppContext();
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    getFeaturedShows().then(() => {
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
    <Wrapper>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        speed={1000}
      >
        {featuredShows.map((show, index) => {
          const { artist, performDateTime, featureImage } = show;
          const showDate = moment(performDateTime).format("ddd MMM DD");
          const showTime = moment(performDateTime).format("hh:mm A");
          return (
            <SwiperSlide key={index}>
              <div>
                <div className="slides-info">
                  <h1>{artist}</h1>
                  <div className="slide-info">
                    <span className="slide-date">{showDate}</span>
                    <span className="slide-time">{showTime}</span>
                    <div>
                      <Link to="/shows" className="button">
                        Get Tickets
                      </Link>
                      <div className="btn-block"></div>
                    </div>
                  </div>
                </div>
                <img src={featureImage} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export default Slideshow;

const WrapperLoading = styled.section`
  background-color: var(--lighterBlue);
  height: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 450px) {
    height: 60vw;
  }
`;

const Wrapper = styled.section`
  .swiper {
    width: 100vw;
    color: #221333;
  }
  .swiper-wrapper .swiper-slide {
    position: relative;
  }
  .swiper-slide img {
    width: 100%;
    object-fit: cover;
    filter: grayscale(100%) brightness(50%);
  }
  .slides-info {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 7rem 9rem 0 9rem;
  }
  .slides-info h1 {
    width: 50%;
    font-size: calc(7vw + 1rem);
    text-transform: uppercase;
    color: #df3311;
    line-height: 5.5rem;
  }
  .slide-info {
    width: 36%;
    height: 34vw;
    max-height: 370px;
    background-color: #df3311;
    position: relative;
    border-radius: 1px;
  }
  .slide-info span {
    display: block;
    font-size: calc(2vw + 0.5rem);
    text-transform: uppercase;
    font-weight: 600;
    color: #ffffff;
    background-color: #221333;
    padding: 0.3rem 2rem 0.5rem 1rem;
    margin-bottom: 20px;
    position: absolute;
    top: 2rem;
    left: 2rem;
    border-radius: 1px;
  }
  .slide-date {
    width: calc(2rem + 26vw);
  }
  .slide-time {
    width: calc(2rem + 13vw);
    transform: translateY(4.5rem);
  }
  .slide-info .button,
  .slide-info div .btn-block {
    position: absolute;
    bottom: 1.5rem;
  }
  .slide-info .button {
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    color: #221333;
    border: 3px solid #221333;
    background-color: transparent;
    border-radius: 1px;
    z-index: 2;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 700;
    left: 2rem;

    transition: all 0.3s ease;
  }
  .slide-info div {
    height: 100%;
    position: relative;
  }
  .slide-info div .btn-block {
    left: 1rem;
    width: 235px;
    height: 27px;
    background-color: #ffffff;
    transform: translate(-42%, -51%);
    border-radius: 1px;
  }
  .slide-info .button:hover {
    background-color: #221333;
    color: #df3311;
  }
  @media screen and (min-width: 1300px) {
    .slides-info h1 {
      line-height: 7rem;
    }
  }
  @media screen and (max-width: 850px) {
    .slideshow {
      position: relative;
      top: 60px;
      left: 0;
    }
    .slides-info {
      padding: 5rem 3rem;
    }
    .slides-info h1 {
      font-size: calc(5vw + 1rem);
      line-height: 3rem;
    }
    .slide-info span {
      font-size: calc(1vw + 0.5rem);
      top: 1rem;
      left: 1rem;
      padding: 0.3rem 2rem 0.5rem 0.5rem;
    }
    .slide-date {
      width: calc(2rem + 23vw);
    }
    .slide-time {
      width: calc(2rem + 11vw);
      transform: translateY(3rem);
    }
    .slide-info .button,
    .slide-info div .btn-block {
      bottom: 0.5rem;
      left: 1rem;
    }
    .slide-info .button {
      font-size: 12px;
      width: 7.5rem;
      padding: 7px 0;
    }
    .slide-info div .btn-block {
      transform: translate(-36%, -49%);
      width: 170px;
      height: 18px;
    }
  }
  @media screen and (max-width: 450px) {
    .slides-info {
      padding: 2rem 2rem;
    }
    .slide-info span {
      top: 0.5rem;
      left: 0.5rem;
      padding: 0.3rem 0 0.5rem 0.5rem;
    }
    .slide-info .button,
    .slide-info div .btn-block {
      left: 0.5rem;
    }
    .slide-info .button {
      font-size: 10px;
      width: 6rem;
      padding: 5px 0;
    }
    .slide-info div .btn-block {
      transform: translate(-26%, -57%);
      width: 120px;
      height: 13px;
    }
  }
`;
