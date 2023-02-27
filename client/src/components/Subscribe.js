const Subscribe = () => {
  return (
    <section class="subscribe" id="subscribe-form">
      <div class="subscribe-info">
        <div class="subscribe-title">
          <h1>stay up to date</h1>
          <div class="block"></div>
        </div>
        <p>
          Sign up to get our newsletter for all the latest news, shows, and
          events
        </p>
      </div>
      <form action="{{ url_for('subscribe') }}" class="subscribe-form">
        <div class="subscribe-btn-block">
          <button class="btn subscribe-btn" type="submit">
            Subscribe
          </button>
          <div class="subscribe-btn-bg"></div>
        </div>
      </form>
    </section>
  );
};
export default Subscribe;
