import React, { useState } from "react";
import "./Gallery.css";

import wedding from "../assets/img2.jpg";
import wedding2 from "../assets/img6.jpg";
import couple from "../assets/img3.jpg";
import portrait from "../assets/img4.jpg";
import candid from "../assets/img5.jpg";

export default function Gallery() {
  const items = [
    { title: "Baby Shower", category: "Celebrations", img: wedding2 },
    { title: "Wedding Moments", category: "Luxury Weddings", img: wedding },
    { title: "Couple Moments", category: "Love Stories", img: couple },
    { title: "Portrait Studio", category: "Portraits", img: portrait },
    { title: "Bride Photography", category: "Moments", img: candid }
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="portfolio">
      <div className="portfolio-content">
        <span className="p-tag">PORTFOLIO</span>
        <p className="p-sub">Explore our curated collection of artistic wedding photography.</p>

        <div className="portfolio-slider">
          {items.map((item, index) => {
            let position = index - activeIndex;
            return (
              <div
                key={index}
                className={`portfolio-card ${index === activeIndex ? "active" : ""}`}
                style={{
                  transform: `translateX(${position * 110}%) scale(${index === activeIndex ? 1.1 : 0.85})`,
                  zIndex: index === activeIndex ? 10 : 1,
                  opacity: Math.abs(position) > 1 ? 0 : 1 // Show only 3 cards
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="card-border-frame">
                  <img src={item.img} alt={item.title} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Details Section Below Slider */}
        <div className="active-details">
          <h2>{items[activeIndex].title}</h2>
          <p>A celebration of love captured with artistic precision and heart.</p>
          <button className="portfolio-btn">PORTFOLIO GALLERY</button>
        </div>
      </div>
    </section>
  );
}