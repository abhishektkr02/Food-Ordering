import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-container">

        <h1>Contact Us</h1>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
          ></textarea>

          <button>
            Send Message
          </button>

        </form>

        <div className="contact-info">

          <h2>Contact Information</h2>

          <p>📍 Kannur, Kerala</p>

          <p>📞 +91 9876543210</p>

          <p>✉ foodie@gmail.com</p>

          <p>🕒 Open Daily: 10:00 AM - 10:00 PM</p>

        </div>

      </div>

    </div>
  );
}

export default Contact;