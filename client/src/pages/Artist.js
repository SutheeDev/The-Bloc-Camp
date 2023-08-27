import {
  Navbar,
  Header,
  Footer,
  Subscribe,
  Loading,
  ArtistContainer,
  TicketsCalculation,
} from "../components";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";

const Artist = () => {
  const { isLoading } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Navbar />
        <Header />
        <Loading center />
        <Subscribe />
        <Footer />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Navbar />
      <Header />
      <ArtistContainer />
      <TicketsCalculation />
      <Subscribe />
      <Footer />
    </Wrapper>
  );
};
export default Artist;

const Wrapper = styled.main`
  background-color: var(--darkBlue);
  .contact {
    background-color: #221333;
    padding: 70px 0;
    margin-top: -5px;
  }
  .contact-container {
    width: 75vw;
    margin: 0 auto;
    @media screen and (max-width: 850px) {
      width: 80vw;
    }
  }
  .contact-info {
    background-color: #221333;
    padding: 0 0 20px 0;
    margin-top: -20px;
  }
  .contact-info-container {
    width: 80vw;
    margin: 0 auto;
    font-family: sans-serif;
  }
  .map {
    width: 100%;
    height: 100%;
    position: relative;
    margin-bottom: 40px;
  }
  .google {
    width: 100%;
    height: 50vh;
  }
  .square {
    display: none;
  }
  .contact-info-container h4 {
    font-size: 24px;
    font-weight: 300;
    color: #221333;
    background-color: #df3311;
    width: fit-content;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }
  .address {
    width: 200px;
  }
  .contact-info-container p {
    font-size: 15px;
    font-weight: 100;
    letter-spacing: 1px;
    margin-bottom: 20px;
    line-height: 1.9;
  }
  .map-address {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 850px) {
    .contact-info {
      padding: 40px 0 0 0;
    }
    .contact-info-container {
      width: 85vw;
      max-width: 1200px;
      padding: 40px 0;
    }
    .square {
      position: absolute;
      width: 250px;
      height: 90px;
      background-color: #ffffff;
      top: 0;
      right: 0;
      transform: translate(8px, -8px);
      z-index: 1;
    }
    .map-address {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
    .address-section {
      width: 50%;
    }
    .contact-us {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: calc(15vw + 0.5rem);
    }
    .contact-us-info p:first-child {
      width: 295px;
    }
  }
  @media screen and (min-width: 1150px) {
    .contact-us {
      gap: 196px;
    }
  }

  /* -------------------- */
  /* Tickets-page headline */
  /* -------------------- */
  .tickets-page,
  .tickets-info,
  .time-location {
    background-color: #221333;
    padding: 40px 0;
  }
  .tickets-container {
    width: 65vw;
    max-width: 980px;
    margin: 0 auto;
  }
  .tickets-band-info {
    text-align: center;
    padding: 0 0 40px 0;
  }
  .tickets-band-info h1 {
    font-size: 56px;
    letter-spacing: -1px;
    margin-bottom: 15px;
    text-transform: capitalize;
  }
  .tickets-band-info p {
    width: 460px;
    margin: 0 auto 60px auto;
  }
  /* -------------------- */
  /* Tickets-page image */
  /* -------------------- */
  .tickets-img {
    width: 95vw;
    max-width: 980px;
    text-align: center;
    margin: 0 auto 40px auto;
    filter: grayscale(100%);
  }
  .tickets-img img {
    width: 100%;
  }
  /* -------------------- */
  /* Tickets-page Time & Location */
  /* -------------------- */
  .tickets-info-container,
  .time-location-container {
    width: 80vw;
    max-width: 980px;
    margin: 0 auto;
  }
  .time-location h3,
  .tickets-info h3 {
    font-size: 32px;
    letter-spacing: -1px;
  }
  .time-location-container h3 {
    margin-bottom: 20px;
  }
  .tickets-band-info p {
    font-family: sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
  }
  .time-location-container p {
    font-family: sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    margin-bottom: 7px;
  }
  /* -------------------- */
  /* Tickets-page Tickets-Info */
  /* -------------------- */
  .tickets-info p {
    font-family: sans-serif;
    letter-spacing: 1.1px;
  }
  .tickets-title h3 {
    line-height: 1.1;
  }
  .tickets-title {
    display: grid;
    grid-template-columns: 1.5fr 1.5fr 1fr 1fr;
    align-items: flex-end;
    border-bottom: 1px solid #ffffff36;
    padding-bottom: 40px;
  }
  .tickets-calculation {
    display: grid;
    grid-template-columns: 1.5fr 1.5fr 1fr 1fr;
    align-items: center;
    border-bottom: 1px solid #ffffff36;
    padding: 50px 0;
    margin-bottom: 50px;
  }
  .tickets-amount {
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ffffff36;
    padding: 10px 20px;
    gap: 20px;
  }
  .plus,
  .minus {
    cursor: pointer;
  }
  .tickets-title p,
  .tickets-title h3,
  .tickets-calculation p,
  .tickets-total p {
    justify-self: left;
  }
  .tickets-title p:last-child,
  .tickets-calculation .total {
    justify-self: right;
  }
  .tickets-amount {
    justify-self: left;
  }
  .tickets-total {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    margin-bottom: 50px;
  }
  .tickets-total p {
    font-size: 24px;
  }
  .tickets-total .grand-total {
    justify-self: right;
  }
  .tickets-info-container {
    text-align: right;
  }
  button.checkout-btn {
    width: 393px;
  }
  .checkout-btn {
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    color: var(--reddish);
    border: 3px solid var(--reddish);
    background-color: transparent;
    border-radius: 1px;
    /* cursor: pointer; */
    letter-spacing: 1px;
    font-weight: 700;
    margin-bottom: 3em;

    transition: all 0.3s ease;
  }
  .checkout-btn:hover {
    color: var(--white);
    border: 3px solid var(--darkRed);
  }
  .note {
    text-align: center;
    font-size: 11px;
    line-height: 1.7;
    opacity: 0;

    transition: all 0.3s ease;
  }
  .btn-container:hover .note {
    opacity: 1;
  }
  @media screen and (max-width: 1200px) {
    button.checkout-btn {
      width: 32vw;
    }
  }
  /* -------------------- */
  /* Tickets-page Media Queries */
  /* -------------------- */
  @media screen and (max-width: 850px) {
    .tickets-page {
      padding: 40px 0 0 0;
    }
    .tickets-container,
    .tickets-info-container,
    .time-location-container {
      width: 100%;
    }
    .tickets-img {
      width: 100vw;
      margin: 0 auto 40px auto;
    }
    .tickets-img img {
      width: 100%;
    }
    .tickets-page {
      display: flex;
      flex-direction: column-reverse;
    }
    .tickets-band-info,
    .time-location-container,
    .tickets-title,
    .tickets-calculation {
      padding: 0 5vw;
    }
    .tickets-band-info h1 {
      font-size: calc(5vw + 1rem);
      margin-bottom: 15px;
    }
    .tickets-band-info p {
      width: 100%;
      margin: 0 auto;
    }
    .time-location-container {
      text-align: center;
    }
    .time-location-container h3 {
      font-size: 20px;
    }
    .tickets-title p {
      display: none;
    }
    .tickets-title {
      padding-bottom: 40px;
    }
    .tickets-calculation {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      padding: 30px 5vw;
    }
    .total {
      display: none;
    }
    .tickets-amount {
      gap: 0;
      width: 100%;
    }
    .tickets-total div {
      display: none;
    }
    .tickets-total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5vw;
    }
    button.checkout-btn,
    .note {
      width: calc(100vw - 10vw);
      margin: 0 auto 3em auto;
    }
    .tickets-info-container {
      text-align: center;
    }
  }
`;
