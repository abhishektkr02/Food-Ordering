import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <section className="home">

      <div className="hero-content">
        <h1>Delicious Food Delivered To Your Door</h1>

        <p>
          Fresh ingredients, amazing taste, and fast delivery.
        </p>

        <Link to="/menu">
          <button className="view-menu-btn">
            Click Here to View Food Items
          </button>
        </Link>
      </div>

    </section>
  );
}

export default Home;