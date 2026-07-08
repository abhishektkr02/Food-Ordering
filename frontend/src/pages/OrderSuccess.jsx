import { Link } from "react-router-dom";
import "../styles/OrderSuccess.css";

function OrderSuccess() {
  return (
    <div className="success-page">

      <div className="success-box">

        <h1>🎉 Order Placed Successfully!</h1>

        <p>
          Thank you for ordering with Foodie.
        </p>

        <p>
          Your delicious food is being prepared.
        </p>

        <h3>Estimated Delivery Time</h3>

        <h2>30 - 40 Minutes</h2>

        <Link to="/">
          <button>
            Back to Home
          </button>
        </Link>

      </div>

    </div>
  );
}

export default OrderSuccess;