import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Navbar.css";
import { AuthContext } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {

  const { cartItems } = useContext(CartContext);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <nav className="navbar">

      <div className="logo">
        Foodie
      </div>


      <button 
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>


      <div className={`nav-links ${menuOpen ? "open" : ""}`}>

        <NavLink to="/" onClick={()=>setMenuOpen(false)}>Home</NavLink>

        <NavLink to="/menu" onClick={()=>setMenuOpen(false)}>Menu</NavLink>

        <NavLink to="/about" onClick={()=>setMenuOpen(false)}>About</NavLink>

        <NavLink to="/services" onClick={()=>setMenuOpen(false)}>Services</NavLink>

        <NavLink to="/contact" onClick={()=>setMenuOpen(false)}>Contact</NavLink>


        <NavLink to="/cart" className="cart-link">
          🛒 Cart
          <span className="cart-count">
            {totalItems}
          </span>
        </NavLink>


        {isLoggedIn ? (
          <>
            <span className="welcome-user">
              👋 {user.name}
            </span>

            <button
              className="logout-btn"
              onClick={()=>{
                logout();
                navigate("/");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login">
            Login
          </NavLink>
        )}

      </div>

    </nav>
  );
}

export default Navbar;