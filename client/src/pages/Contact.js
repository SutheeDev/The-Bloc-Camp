import { Navbar, Header, Footer, PageTitle, Subscribe } from "../components";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <Navbar />
      <Header />

      <section class="contact">
        <div class="contact-container">
          <PageTitle />
        </div>
      </section>

      <section class="contact-info">
        <div class="contact-info-container">
          <div class="map-address">
            <div class="map">
              <div class="square"></div>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8296652917847!2d-122.38940054869543!3d37.77059197966096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7f1a33f38ea7%3A0xe4941e6c1dc4022b!2s500%20Terry%20A%20Francois%20Blvd%2C%20San%20Francisco%2C%20CA%2094158!5e0!3m2!1sen!2sus!4v1671477213255!5m2!1sen!2sus"
                width="686"
                height="514.5"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="google"
              ></iframe> */}
            </div>
            <div class="address-section">
              <h4>Address</h4>
              <p class="address">
                500 Terry Francois St. San Francisco, CA 94158
              </p>
              <p>Parking is available on site</p>
            </div>
          </div>

          <div class="contact-us">
            <h4>Contact Us</h4>
            <div class="contact-us-info">
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
`;
