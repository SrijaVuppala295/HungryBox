import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="company-name">Hungry Box</h2>
            <p className="brand-desc">
              Craving something delicious? Fast. Fresh. Reliable.
            </p>
            <div className="social-links">
              <a href="https://pro.twitter.com/i/flow/login" className="social-link">
                <img src={assets.twitter_icon} alt="Twitter" />
              </a>
              <a href="https://www.facebook.com/login.php/" className="social-link">
                <img src={assets.facebook_icon} alt="Facebook" />
              </a>
              <a href="https://in.linkedin.com/" className="social-link">
                <img src={assets.linkedin_icon} alt="LinkedIn" />
              </a>
            </div>
          </div>

          <nav className="footer-nav">
            <div className="nav-column">
              <ul>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Features</a></li>
              </ul>
            </div>
            <div className="nav-column">
              <ul>
                <li><a href="#">Career</a></li>
                <li><a href="#">Terms & Policy</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>
          </nav>

          <div className="footer-newsletter">
            <h3 className="footer-title">Newsletter</h3>
            <form className="newsletter-form">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© <span id="year"></span> Hungry Box, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
