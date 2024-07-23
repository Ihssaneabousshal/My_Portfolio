import React from 'react';
import '../assets/styles/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="main-content">
      <section className="contact-section">
        <h1>Contact</h1>
        <p>Open for opportunities: <span>Yes</span></p>
        
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email address" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            <span role="img" aria-label="submit">📩</span> Submit
          </button>
        </form>
      </section>
     
    </div>
  );
};

export default ContactPage;
