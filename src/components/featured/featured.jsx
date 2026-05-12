import React from 'react';
import './featured.css';

// Replace these placeholders with your actual image imports
import img1 from "../../assets/featured/img1.jpg"; 
import img2 from "../../assets/featured/img2.jpg";
import img3 from "../../assets/featured/img3.jpg";
import img4 from "../../assets/featured/img4.jpg";
import img5 from "../../assets/featured/img5.jpg";

const Featured = () => {
  const items = [
    {
      id: 1,
      title: "Romantic Parisian Wedding Event",
      subtitle: "March 21st, 2024",
      class: "item-1",
      img: img1
    },
    {
      id: 2,
      title: "Sofia & James's Portrait",
      subtitle: "Lake Como",
      class: "item-2", // The large top-arch on the right
      img: img2
    },
    {
      id: 3,
      title: "Alex & Anna's Engagement Event",
      subtitle: "Lake Tahoe",
      class: "item-3", // The bottom-arch on the left
      img: img3
    },
    {
      id: 4,
      title: "John & Kate's Wedding Event",
      subtitle: "Sonoma Valley",
      class: "item-4", // The center square
      img: img4
    },
    {
      id: 5,
      title: "Romantic Parisian Wedding Event",
      subtitle: "March 21st, 2024",
      class: "item-5", // The bottom long rectangle
      img: img5
    }
  ];

  return (
    <section className="featured-section">
      <div className="portfolio-header">
        <span className="tagline">Portfolio</span>
        <h2>Our Recent Works</h2>
      </div>

      <div className="bento-container">
        <div className="bento-grid">
          {items.map((item) => (
            <div key={item.id} className={`bento-item ${item.class}`}>
              <div className="img-wrapper">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="overlay">
                <div className="text-content">
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
                <div className="arrow-btn">
                   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;