import { useAppContext } from "../context/appContext";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useState } from "react";

const TicketsCalculation = () => {
  const { show } = useAppContext();
  const price = show.ticketsPrice;

  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const increment = () => {
    const newAmount = quantity + 1;
    setQuantity(newAmount);
    setTotal(newAmount * price);
  };

  const subtract = () => {
    if (quantity > 0) {
      const newAmount = quantity - 1;
      setQuantity(newAmount);
      setTotal(newAmount * price);
    } else {
      setQuantity(0);
      setTotal(0);
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
            <div className="minus" onClick={() => subtract()}>
              <BiMinus />
            </div>
            <p className="amount">{quantity}</p>
            <div className="plus" onClick={() => increment()}>
              <BiPlus />
            </div>
          </div>
          <p className="total">$ {total}</p>
        </div>
        <div className="tickets-total">
          <div></div>
          <p>Total</p>
          <p className="grand-total">$ {total}</p>
        </div>
        <div className="btn-container">
          <button className="btn checkout-btn" disabled={true}>
            Checkout
          </button>
          <p className="note">
            * Our online checkout is not available at this time. Please get in
            touch with us if you're interested in purchasing tickets for this
            show.
          </p>
        </div>
      </div>
    </section>
  );
};
export default TicketsCalculation;
