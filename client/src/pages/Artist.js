import { Navbar, Header, Footer, PageTitle, Subscribe } from "../components";
import styled from "styled-components";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";

const Artist = () => {
  const { getArtist } = useAppContext();

  useEffect(() => {
    getArtist();
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <Header />

      <section class="contact">
        <div class="contact-container">
          <PageTitle text1="contact" text2="us" />
        </div>
      </section>

      <main class="tickets-page">
        <div class="tickets-container">
          <section class="tickets-band-info">
            <h1>artist</h1>
            <p>description</p>
          </section>
        </div>
        <div class="tickets-img">
          <img src="" alt="" />
        </div>
      </main>
      <section class="time-location">
        <div class="time-location-container">
          <h3>Time & Location</h3>
          <p>day month dayNum, year start - end</p>
          <p>
            The Bloc Camp, 500 Terry A Francois Blvd, San Francisco, CA 94158,
            USA
          </p>
        </div>
      </section>

      <section class="tickets-info">
        <div class="tickets-info-container">
          <div class="tickets-title">
            <h3>Tickets</h3>
            <p>Price</p>
            <p>Quality</p>
            <p>Total</p>
          </div>
          <div class="tickets-calculation">
            <p>Regular</p>
            <p>$ price</p>
            <div class="tickets-amount">
              <p class="minus">-</p>
              <p class="amount">0</p>
              <p class="plus">+</p>
            </div>
            <p class="total">$0.00</p>
          </div>
          <div class="tickets-total">
            <div></div>
            <p>Total</p>
            <p class="grand-total">$0.00</p>
          </div>
          <a href="#">
            <button class="btn checkout-btn">Checkout</button>
          </a>
        </div>
      </section>

      <Subscribe />
      <Footer />
    </Wrapper>
  );
};
export default Artist;

const Wrapper = styled.main`
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
    width: 110px;
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ffffff36;
    padding: 10px 20px;
    gap: 20px;
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
    button.checkout-btn {
      width: calc(100vw - 10vw);
      margin: 0 auto;
    }
    .tickets-info-container {
      text-align: center;
    }
  }
`;
