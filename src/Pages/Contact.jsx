// pages/Contact.jsx
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
          <button type="submit">Send Message</button>
        </form>
        
        <div className="contact-info">
          <h3>Visit Us</h3>
          <p>123 Restaurant Street</p>
          <p>Food City, FC 12345</p>
          <h3>Hours</h3>
          <p>Monday-Friday: 11am - 10pm</p>
          <p>Weekend: 10am - 11pm</p>
        </div>
      </div>
    </div>
  );
}