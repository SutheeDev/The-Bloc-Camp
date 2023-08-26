import { useAppContext } from "../context/appContext";
import { BiPlus, BiMinus } from "react-icons/bi";

const TicketsCalculation = () => {
  const { show } = useAppContext();
  const { ticketsPrice } = show;

  return (
    <section className="tickets-info">
      <div className="tickets-info-container">
        <div className="tickets-title">
          <h3>Tickets</h3>
          <p>Price</p>
          <p>Quanlity</p>
          <p>Total</p>
        </div>
        <div className="tickets-calculation">
          <p>Regular</p>
          <p>$ {ticketsPrice}</p>
          <div className="tickets-amount">
            {/* <p className="minus"> */}
            <div className="minus">
              <BiMinus />
            </div>
            {/* </p> */}
            <p className="amount">0</p>
            {/* <p className="plus"> */}
            <div className="plus">
              <BiPlus />
            </div>
            {/* </p> */}
          </div>
          <p className="total">$0.00</p>
        </div>
        <div className="tickets-total">
          <div></div>
          <p>Total</p>
          <p className="grand-total">$0.00</p>
        </div>
        <a href="#">
          <button className="btn checkout-btn">Checkout</button>
        </a>
      </div>
    </section>
  );
};
export default TicketsCalculation;
