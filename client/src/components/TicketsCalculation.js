import { useAppContext } from "../context/appContext";
import { BiPlus, BiMinus } from "react-icons/bi";

const TicketsCalculation = () => {
  const { show } = useAppContext();
  const { ticketsPrice } = show;

  return (
    <section class="tickets-info">
      <div class="tickets-info-container">
        <div class="tickets-title">
          <h3>Tickets</h3>
          <p>Price</p>
          <p>Quanlity</p>
          <p>Total</p>
        </div>
        <div class="tickets-calculation">
          <p>Regular</p>
          <p>$ {ticketsPrice}</p>
          <div class="tickets-amount">
            <p class="minus">
              <div>
                <BiMinus />
              </div>
            </p>
            <p class="amount">0</p>
            <p class="plus">
              <div>
                <BiPlus />
              </div>
            </p>
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
