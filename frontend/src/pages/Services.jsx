import "../styles/Services.css";

function Services() {
  return (
    <div className="services-page">

      <h1>Our Services</h1>

      <div className="services-grid">

        <div className="service-card">
          <h2>🍽 Dine In</h2>
          <p>Enjoy delicious meals in our comfortable restaurant.</p>
        </div>

        <div className="service-card">
          <h2>🚚 Fast Delivery</h2>
          <p>Fresh food delivered quickly to your doorstep.</p>
        </div>

        <div className="service-card">
          <h2>🥡 Take Away</h2>
          <p>Order online and collect your food from our restaurant.</p>
        </div>

        <div className="service-card">
          <h2>🎉 Catering</h2>
          <p>Food services for parties, weddings, and corporate events.</p>
        </div>

      </div>

    </div>
  );
}

export default Services;