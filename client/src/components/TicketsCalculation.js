import { useAppContext } from "../context/appContext";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useState } from "react";

const TicketsCalculation = () => {
  const { show } = useAppContext();
  const price = show.ticketsPrice;

  const [quantity, setQuantity] = useState(0);

  const increment = (ticketAmounts) => {
    console.log(`increment ${ticketAmounts} by 1`);
    setQuantity(quantity + 1);
  };

  const subtract = (ticketAmounts) => {
    console.log(`subtract ${ticketAmounts} by 1`);
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  return (
    <section className="tickets-info">
      <div className="tickets-info-container">
        <div className="tickets-title">
          <h3>Tickets</h3>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <div className="tickets-calculation">
          <p>Regular</p>
          <p>$ {price}</p>
          <div className="tickets-amount">
            <div className="minus" onClick={() => subtract(quantity)}>
              <BiMinus />
            </div>
            <p className="amount">{quantity}</p>
            <div className="plus" onClick={() => increment(quantity)}>
              <BiPlus />
            </div>
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
