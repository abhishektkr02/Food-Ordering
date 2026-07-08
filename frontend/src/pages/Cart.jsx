import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";
import { Link } from "react-router-dom";

function Cart() {

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    total,
  } = useContext(CartContext);

  return (
    <div className="cart-page">

      <h1>Your Cart</h1>

      <div className="cart-container">

        {cartItems.length === 0 ? (

          <h2>Your Cart is Empty</h2>

        ) : (

          <>
            {cartItems.map((item) => (

              <div className="cart-item" key={item.name}>

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                />

                <div className="cart-info">

                  <h3>{item.name}</h3>

                  <p>₹{item.price}</p>

                  <div className="quantity">

                    <button
                      onClick={() => decreaseQuantity(item.name)}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.name)}
                    >
                      +
                    </button>

                  </div>

                  <h4>
                    Subtotal : ₹{item.price * item.quantity}
                  </h4>

                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.name)}
                >
                  Remove
                </button>

              </div>

            ))}

            <div className="total">

              <h2>Total : ₹{total}</h2>

              <Link to="/checkout">
                <button className="checkout-btn">
                    Proceed to Checkout
                    </button>
              </Link>

            </div>

          </>

        )}

      </div>

    </div>
  );
}

export default Cart;