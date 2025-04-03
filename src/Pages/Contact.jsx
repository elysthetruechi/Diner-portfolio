// pages/Contact.jsx
import { useState } from 'react';
import { FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h2>Get In Touch</h2>
        <p>We'd love to hear from you</p>
      </div>

      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <h3>Send Us a Message</h3>
          
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
          </div>
          
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
          </button>

          {submitSuccess && (
            <div className="success-message">
              Thank you! Your message has been sent. We'll get back to you soon.
            </div>
          )}
        </form>
        
        <div className="contact-info">
          <h3><FaMapMarkerAlt /> Visit Us</h3>
          <p>123 Restaurant Street</p>
          <p>Food City, FC 12345</p>
          
          <h3><FaClock /> Hours</h3>
          <p>Monday-Friday: 11am - 10pm</p>
          <p>Saturday-Sunday: 10am - 11pm</p>
          
          <div className="contact-extra">
            <h3>Call Us</h3>
            <p>(123) 456-7890</p>
            
            <h3>Email</h3>
            <p>info@karysdiner.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}