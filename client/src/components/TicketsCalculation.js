const TicketsCalculation = () => {
  return (
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
  );
};
export default TicketsCalculation;
