const Event = ({ artist, performDateTime, artistImage }) => {
  return (
    <div>
      <h3>{artist}</h3>
      <h3>{performDateTime}</h3>
      <image>{artistImage}</image>
    </div>
  );
};
export default Event;
