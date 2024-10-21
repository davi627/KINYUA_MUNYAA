import React, { useState } from 'react';
import './Footer.css';
import { Mail, Phone, Facebook, Twitter, Instagram, Send } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mayrbbgk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Column 1 - Contact Information */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <p className="contact-item">
              <Mail className="icon" size={18} />
              <a href="mailto:info@kinyuamuyaa.com">info@kinyuamuyaa.com</a>
            </p>
            <p className="contact-item">
              <Phone className="icon" size={18} />
              <a href="tel:+254123456789">+254 123 456 789</a>
            </p>
          </div>

          <h4>Connect With Us</h4>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="social-icon" size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="social-icon" size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="social-icon" size={24} />
            </a>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="send-button">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/sitemap">Sitemap</a>
            </li>
            <li>
              <a href="/accessibility">Accessibility</a>
            </li>
            <li>
              <a href="/cookies">Cookie Policy</a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Company Info */}
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            Kinyua Muyaa Advocates & Company is a leading law firm dedicated to
            providing exceptional legal services across East Africa.
          </p>
          <p>
            Our commitment to excellence and client satisfaction has made us a
            trusted name in the legal industry.
          </p>
          <div className="credits">
            <p>© 2024 Kinyua Muyaa Advocates & Company.</p>
            <p>Developed by David Mbita</p>
            <p>Supervised by Tom</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
