import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navItems = [
    { name: "HOME", href: "#hero" },
    { name: "ABOUT US", href: "#about", hasSub: true },
    { name: "DESTINATION", href: "#destination", hasSub: true },
    { name: "FILMS", href: "#films" },
    { name: "PHOTOGRAPHY", href: "#photography", hasSub: true },
    { name: "POETRY", href: "#poetry" },
    { name: "BLOG", href: "#blog" },
    { name: "BOOK US", href: "#contact" }
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>
      <div className="navbar-container">
        {/* LOGO */}
        <div className="logo">
          Click<span>By Korniza</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="desktop-menu">
          {navItems.map((item, index) => (
            <a href={item.href} key={index}>{item.name}</a>
          ))}
        </div>

        {/* HAMBURGER BUTTON */}
        <div 
          className={`menu-btn ${menuOpen ? "active" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
        </div>
      </div>

      {/* MOBILE OVERLAY (Inspired by your Image) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="mobile-menu-container"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="mobile-menu-list">
                {navItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="mobile-item-wrapper"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a href={item.href} onClick={() => setMenuOpen(false)}>
                      {item.name}
                      {item.hasSub && (
                        <svg className="chevron" viewBox="0 0 24 24">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                      )}
                    </a>
                  </motion.div>
                ))}
              </div>
              
              <div className="mobile-footer-simple">
                <div className="mob-socials">
                   <a href="#">INSTAGRAM</a>
                   <a href="#">WHATSAPP</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}