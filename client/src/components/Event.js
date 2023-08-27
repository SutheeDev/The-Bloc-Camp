import styled from "styled-components";
import moment from "moment";
import { useState } from "react";
import {
  BiStar,
  BiCalendarEvent,
  BiTime,
  BiMessageSquareCheck,
  BiMessageSquareX,
  BiChevronDown,
  BiDollarCircle,
} from "react-icons/bi";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const Event = ({
  _id,
  artist,
  artistInfo,
  performDateTime,
  featureImage,
  isPublished,
  isFeatured,
  status,
  ticketsPrice,
}) => {
  const {
    setEditShow,
    deleteShow,
    user,
    updateFavorites,
    favorites,
    isLoading,
  } = useAppContext();
  const [showDropdown, setShowDropdown] = useState(false);

  let date = moment(performDateTime);
  let time = moment(performDateTime);
  let day = moment(performDateTime);

  date = date.locale("en").format("MMM D");
  day = day.locale("en").format("ddd");
  time = time.locale("en").format("hh:mm a");

  const toggleFavorites = (id) => {
    updateFavorites(id);
  };

  return (
    <Wrapper>
      <div
        className={
          showDropdown
            ? "event-info-container open-dropdown"
            : "event-info-container"
        }
      >
        <div className="event-img">
          <img src={featureImage} />
        </div>

        <div className="all-info">
          <div className="event-info">
            <div className="title-container">
              <BiStar className="star-icon" />
              <h3 className="artist-title">{artist}</h3>
            </div>

            <div className="event-datetime">
              <div className="event-daydate">
                <BiCalendarEvent className="calendar-icon" />
                <p className="event-day">{day}</p>
                <p className="event-date">{date}</p>
              </div>
              <div className="time-container">
                <BiTime className="time-icon" />
                <p className="event-time">{time}</p>
              </div>
            </div>

            <div className="event-condition">
              <div className="condition">
                <div className="published">
                  {isPublished ? (
                    <BiMessageSquareCheck className="check-icon" />
                  ) : (
                    <BiMessageSquareX className="x-icon" />
                  )}
                  <p>published</p>
                </div>
                <div className="featured">
                  {isFeatured ? (
                    <BiMessageSquareCheck className="check-icon" />
                  ) : (
                    <BiMessageSquareX className="x-icon" />
                  )}

                  <p>featured</p>
                </div>
              </div>

              <div className="event-status">
                <div className={`status ${status}`}>
                  {status === "soldout" ? "sold out" : status}
                </div>
              </div>
            </div>
          </div>

          <div className="price-desc">
            <div className="price">
              <BiDollarCircle className="dollar-icon" />
              <p>${ticketsPrice}</p>
            </div>
            <div className="desc">{artistInfo}</div>
          </div>
        </div>

        <div className="btn-container">
          {user.role === "admin" ? (
            <div>
              <Link
                to="/admin-dashboard/edit-show"
                className="btn edit-btn"
                onClick={() => setEditShow(_id)}
              >
                edit
              </Link>
              <button
                type="button"
                className="btn del-btn"
                onClick={() => deleteShow(_id)}
              >
                delete
              </button>
            </div>
          ) : (
            <button
              type="button"
              disabled={isLoading}
              className={
                favorites.includes(_id) ? "btn fav-btn fav" : "btn fav-btn"
              }
              onClick={() => toggleFavorites(_id)}
            >
              <div className="fav-icon">
                {favorites.includes(_id) ? <HiHeart /> : <HiOutlineHeart />}
              </div>
              {favorites.includes(_id) ? `my favorites` : `add to favorites`}
            </button>
          )}
          <BiChevronDown
            className="down-icon"
            onClick={() => setShowDropdown(!showDropdown)}
          />
        </div>
      </div>
    </Wrapper>
  );
};
export default Event;

const Wrapper = styled.div`
  margin: 2em 0;
  font-family: var(--bodyFont);
  .event-info-container {
    border-radius: 2px;
    overflow: hidden;
    padding-bottom: 1.4em;
    box-shadow: 0px 0.2px 0.2px rgba(0, 0, 0, 0.014),
      0px 0.4px 0.5px rgba(0, 0, 0, 0.02), 0px 0.8px 1px rgba(0, 0, 0, 0.025),
      0px 1.3px 1.8px rgba(0, 0, 0, 0.03), 0px 2.5px 3.3px rgba(0, 0, 0, 0.036),
      0px 6px 8px rgba(0, 0, 0, 0.05);

    transition: all 0.2s ease;
  }
  .event-info-container:hover {
    box-shadow: 0px 0.7px 1.7px rgba(0, 0, 0, 0.014),
      0px 1.8px 4.1px rgba(0, 0, 0, 0.02), 0px 3.4px 7.8px rgba(0, 0, 0, 0.025),
      0px 6px 13.8px rgba(0, 0, 0, 0.03), 0px 11.3px 25.9px rgba(0, 0, 0, 0.036),
      0px 27px 62px rgba(0, 0, 0, 0.05);
  }
  .down-icon {
    display: none;
  }
  .all-info {
    padding: 1.2em 1em;
  }
  .event-info {
    padding: 0 0 1.2em 0;
  }
  .event-img {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .event-img img {
    width: 100%;
  }
  .event-datetime,
  .event-condition {
    display: flex;
    align-items: center;
    margin-bottom: 0.6em;
  }
  .title-container {
    border-bottom: 1px solid var(--grey-100);
    padding-bottom: 0.9em;
    margin-bottom: 0.8em;
  }
  .event-daydate {
    width: 50%;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    font-size: 0.85rem;
    color: var(--lighterBlue);
  }
  .event-day,
  .event-date {
    font-weight: 400;
  }
  .event-day {
    margin-right: 0.3em;
  }
  .time-container {
    width: 50%;
    display: flex;
    align-items: center;
  }
  .event-time {
    font-size: 0.85rem;
    font-weight: 400;
  }
  .time-icon,
  .calendar-icon,
  .star-icon,
  .check-icon,
  .x-icon,
  .dollar-icon {
    display: flex;
    width: 18px;
    height: 18px;
    justify-content: center;
    align-items: center;
    margin-right: 7px;
  }
  .x-icon {
    color: var(--error-text);
  }
  .check-icon {
    color: var(--success-text);
  }
  .time-icon {
    font-size: 1.15rem;
  }
  .title-container {
    font-size: 1rem;
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }
  .artist-title {
    font-weight: 600;
    color: var(--lighterBlue);
  }
  .status {
    text-transform: capitalize;
    width: 60%;
    min-width: 90px;
    max-width: 140px;
    text-align: center;
    padding: 0.6em 0.2em;
    border-radius: 3px;
    color: var(--white);
  }
  .status.upcoming {
    background-color: var(--grey-300);
  }
  .status.canceled {
    background-color: var(--reddish);
  }
  .status.soldout {
    background-color: var(--lighterBlue);
  }
  .btn-container {
    text-align: left;
    padding: 0 1em;
    position: relative;
  }
  .btn {
    font-size: 0.7rem;
    text-transform: uppercase;
    padding: 0.7em 1.6em;
    color: var(--grey-300);
    border: 2px solid var(--grey-300);
    background-color: transparent;
    border-radius: 1px;
    cursor: pointer;
    font-weight: 600;
    margin-right: 1.1em;

    transition: all 0.2s ease;
  }
  .edit-btn:hover {
    color: var(--white);
    background-color: var(--lighterBlue);
    border: 2px solid var(--lighterBlue);
  }
  .del-btn:hover {
    color: var(--white);
    background-color: var(--reddish);
    border: 2px solid var(--reddish);
  }
  .fav-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
  }
  .fav-icon {
    font-size: 1.1rem;
    display: flex;
    margin-right: 0.3em;
  }
  .fav {
    border: 2px solid var(--reddish);
    color: var(--reddish);
  }
  .published,
  .featured,
  .price {
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }
  .price {
    margin-bottom: 0.6em;
  }
  .condition,
  .event-status,
  .price {
    width: 50%;
  }
  @media screen and (min-width: 650px) {
    .event-info-container {
      padding-bottom: 0;
      display: flex;
      align-items: flex-start;
    }
    .event-img {
      width: 25%;
    }
    .all-info {
      padding: 0 1em;
      flex-grow: 0;
      width: 50%;
    }
    .title-container {
      border-bottom: none;
      padding-bottom: 0em;
      margin: 0.9em 0 0.6em 0;
    }
    .btn-container {
      width: 25%;
      padding: 0.7em 1em 0 0;
      text-align: right;
      flex-shrink: 0;
    }
    .btn {
      padding: 0.6em 1em;
      margin: 0;
    }
    .del-btn {
      margin-left: 1.1em;
    }
    .fav-btn {
      width: 100%;
    }
    .event-condition,
    .price-desc {
      display: none;

      transition: all 0.2s ease;
    }
    .down-icon {
      position: absolute;
      bottom: -27px;
      right: 8px;
      display: block;
      cursor: pointer;
      height: 24px;
      width: 24px;
      color: var(--grey-300);

      transition: all 0.3s ease;
    }
    .open-dropdown {
      padding-bottom: 1.5em;
    }
    .open-dropdown .event-condition {
      display: flex;
      margin-top: 2em;
    }
    .open-dropdown .price-desc {
      display: block;
    }
    .open-dropdown .down-icon {
      transform: rotate(180deg);
    }
    .event-condition,
    .price {
      margin-bottom: 0.7em;
    }
  }
  @media screen and (min-width: 1150px) {
    .event-img {
      max-width: 140px;
    }
    .all-info {
      width: 65%;
      flex-grow: 1;
    }
    .event-info {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.2em;
      padding: 0.6em 0 0 0;
      position: relative;
    }
    .btn-container {
      width: 20%;
      padding: 0.6em 1em 0 0;
    }
    .title-container {
      margin: 0 0;
      width: 50%;
    }
    .event-datetime {
      flex-direction: column;
      align-items: flex-start;
      width: 25%;
    }
    .event-daydate,
    .time-container {
      width: 100%;
    }
    .event-condition {
      width: 25%;
      margin-top: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .condition {
      width: 100%;
    }
    .event-status {
      display: none;
    }
    .open-dropdown .event-condition {
      margin-top: 0;
    }
    .open-dropdown .event-status {
      display: block;
      position: absolute;
      bottom: -23px;
      left: 25px;
    }
    .open-dropdown .price-desc {
      margin-top: 40px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .open-dropdown .price {
    }
    .open-dropdown .desc {
      width: 50%;
    }
  }
`;
