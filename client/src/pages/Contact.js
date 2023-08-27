import { Navbar, Header, Footer, PageTitle, Subscribe } from "../components";
import styled from "styled-components";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <Header />

      <section className="contact">
        <div className="contact-container">
          <PageTitle text1="contact" text2="us" />
        </div>
      </section>

      <section className="contact-info">
        <div className="contact-info-container">
          <div className="map-address">
            <div className="map">
              <div className="square"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.829665291793!2d-122.38940054869533!3d37.77059197966076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7f1a33f38ea7%3A0xe4941e6c1dc4022b!2s500%20Terry%20A%20Francois%20Blvd%2C%20San%20Francisco%2C%20CA%2094158!5e0!3m2!1sen!2sus!4v1677626702353!5m2!1sen!2sus"
                width="686"
                height="514.5"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="google"
              ></iframe>
            </div>
            <div className="address-section">
              <h4>Address</h4>
              <p className="address">
                500 Terry Francois St. San Francisco, CA 94158
              </p>
              <p>Parking is available on site</p>
            </div>
          </div>

          <div className="contact-us">
            <h4>Contact Us</h4>
            <div className="contact-us-info">
              <p>
                Looking to host a private party or book your band to play at The
                Launch? We’re open for business - please send us an email or
                give us a call for details.
              </p>
              <p>Tel: 123-456-7890</p>
              <p>Email: info@mysite.com</p>
            </div>
          </div>
        </div>
      </section>

      <Subscribe />
      <Footer />
    </Wrapper>
  );
};
export default Contact;

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
`;
