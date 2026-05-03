import { FaInstagram } from "react-icons/fa";
import { FiSend, FiPhone } from "react-icons/fi";
import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* TOP */}
        <div className="footer-top">
          
          <div className="footer-brand-section">
            <h2 className="footer-logo">CLICKS BY KORNIZA</h2>
            <span className="footer-tagline">
              ARTISANAL WEDDING PHOTOGRAPHY
            </span>
          </div>

          <div className="footer-cta">
            <p>Ready to preserve your story?</p>

            <button
              className="footer-main-btn"
              onClick={() =>
                window.open("https://wa.me/919597258078", "_blank")
              }
            >
              <span>GET IN TOUCH</span>
              <FiSend size={14} />
            </button>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* MIDDLE */}
        <div className="footer-middle">
          
          <nav className="footer-nav">
            <a href="#home">HOME</a>
            <a href="#gallery">PORTFOLIO</a>
            <a href="#services">SERVICES</a>
            <a href="#testimonials">JOURNAL</a>
          </nav>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/clicksbykorniza/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://wa.me/919597258078"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FiPhone size={18} />
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} CLICKS BY KORNIZA. ALL RIGHTS RESERVED.
          </p>

          <div className="footer-legal">
            <span>CRAFTED WITH PASSION</span>
          </div>
        </div>

      </div>
    </footer>
  );
}