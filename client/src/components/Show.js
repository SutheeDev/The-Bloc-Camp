import styled from "styled-components";

const Show = () => {
  return (
    <article class="calendar-show">
      <img src="" alt="" />
      <div class="calendar-show-info">
        <div class="band-date-info">
          <div class="band-date">
            <h2 class="band-name">Artist</h2>
            <h2>Mon Feb 27</h2>
          </div>
          <div class="band-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              debitis neque at, mollitia qui veritatis suscipit voluptates
              architecto ratione optio!
            </p>
          </div>
        </div>
        <div class="getTicket-btn">
          <form action="submit" method="post">
            <input
              class="btn"
              id=""
              type="submit"
              value="Get Tickets"
              name="GetTickets"
            />
          </form>
        </div>
      </div>
    </article>
  );
};
export default Show;

const Wrapper = styled.article``;
