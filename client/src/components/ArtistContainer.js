import { useAppContext } from "../context/appContext";
import moment from "moment";

const ArtistContainer = () => {
  const { show } = useAppContext();
  const { artist, artistInfo, featureImage, performDateTime } = show;
  const showDate = moment(performDateTime).format("MMM DD, YYYY");
  const showTime = moment(performDateTime).format("hh:mm A");

  return (
    <div>
      <main class="tickets-page">
        <div class="tickets-container">
          <section class="tickets-band-info">
            <h1>{artist}</h1>
            <p>{artistInfo}</p>
          </section>
        </div>
        <div class="tickets-img">
          <img src={featureImage} alt="artist image" />
        </div>
      </main>
      <section class="time-location">
        <div class="time-location-container">
          <h3>Time & Location</h3>
          <p>
            {showDate}, {showTime}
          </p>
          <p>
            The Bloc Camp, 500 Terry A Francois Blvd, San Francisco, CA 94158,
            USA
          </p>
        </div>
      </section>
    </div>
  );
};
export default ArtistContainer;
