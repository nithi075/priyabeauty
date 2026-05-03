import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Play } from "lucide-react";
import "./Hero.css";
import logoimg from "../../assets/logo.png";

import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [hero1, hero2, hero3];

  /* SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* SLIDER */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">

      {/* ================= NAVBAR ================= */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">

          <div className="logo-section">
            <img src={logoimg} alt="logo" className="nav-logo" />
            <div className="brand-info">
              <span className="brand-name">Clicks By Korniza</span>
              <span className="brand-tag">WEDDING STORIES</span>
            </div>
          </div>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><a href="#home" onClick={()=>setMenuOpen(false)}>Home</a></li>
            <li><a href="#gallery" onClick={()=>setMenuOpen(false)}>Portfolio</a></li>
            <li><a href="#services" onClick={()=>setMenuOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></li>
          </ul>

          <div className="nav-right">
            <button
              className="nav-btn desktop-only"
              onClick={() => window.open("https://wa.me/919597258078")}
            >
              Enquire
            </button>

            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </div>

        </div>
      </nav>

      {/* ================= BG SLIDER ================= */}
      <div className="hero-bg">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentImage ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="hero-overlay-gradient"></div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="hero-content">
        <div className="content-inner">

          <span className="sub-title">
            FINE ART WEDDING PHOTOGRAPHY
          </span>

          <h1 className="main-heading">
            Capturing Your <span className="italic-text">Moments</span><br/>
            With Emotion & Light
          </h1>

          <p className="hero-description">
            Every wedding tells a story. We capture the raw emotions,
            timeless beauty, and fleeting moments that matter most.
          </p>

          <div className="hero-btns">
            <button
              className="btn-primary"
              onClick={() =>
                document.getElementById("gallery")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Work <ArrowRight size={14} />
            </button>

            <button
              className="btn-secondary"
              onClick={() =>
                window.open("https://wa.me/919597258078")
              }
            >
              <Play size={12} /> Book Now
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}