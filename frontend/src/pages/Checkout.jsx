import axios from "axios";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Checkout.css";
import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();
  const { cartItems, clearCart } = useContext(CartContext);

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("Cash on Delivery");

  

  const handlePlaceOrder = async (e) => {

    e.preventDefault();

    const total = cartItems.reduce(

      (sum, item) => sum + item.price * item.quantity,

      0

    );

    await axios.post(

      "https://food-ordering-he1w.onrender.com/api/orders",

      {

        name: user.name,

        email: user.email,

        phone,

        address,

        payment,

        items: cartItems,

        total,

      }

    );

    clearCart();

    navigate("/order-success");

  };

  return (
    <div className="checkout-page">

      <h1>Checkout</h1>

      <form
        className="checkout-form"
        onSubmit={handlePlaceOrder}
      >

        <input
          type="text"
          placeholder="Full Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <textarea
          placeholder="Delivery Address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>

        <select 
          required
          value={payment}
          onChange={(e) => setPayment(e.target.value)}>
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Credit / Debit Card</option>
        </select>

        <button type="submit">
          Place Order
        </button>

      </form>

    </div>
  );
}

export default Checkout;