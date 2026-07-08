import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>🍴 Foodie</h2>
          <p>
            Fresh Food, Fast Delivery and Great Taste.
            We deliver happiness to your doorstep.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📍 Kannur, Kerala</p>

          <p>📞 +91 9876543210</p>

          <p>✉ foodie@gmail.com</p>

          <p>🕒 10:00 AM - 10:00 PM</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Foodie. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;