import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./FoodCard.css";
import { AuthContext } from "../context/AuthContext";

function FoodCard({ image, name, price }) {

  const { isLoggedIn } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleOrder = () => {

    if (!isLoggedIn){
        navigate("/login");
        return;
    }
    addToCart({
      image,
      name,
      price: Number(price),
    });

    navigate("/cart");
  };

  return (
    <div className="food-card">

      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>₹{price}</p>

      <button onClick={handleOrder}>
        Order
      </button>

    </div>
  );
}

export default FoodCard;