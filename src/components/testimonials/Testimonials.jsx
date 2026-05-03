import "./Testimonials.css";
import client1 from "../../assets/test1.jpg"; 
import client2 from "../../assets/test2.jpg";
import client3 from "../../assets/test3.jpg";

export default function Testimonials() {
  const reviews = [
    {
      img: client1,
      title: "MODERN WAREHOUSE WEDDING",
      author: "BY CHOPRA & NAHAR",
      text: "Our wedding memories were captured so beautifully. Every image feels timeless and emotional."
    },
    {
      img: client2,
      title: "VINTAGE GARDEN CEREMONY",
      author: "BY KRISHNA KUMAR & MAHALAXMI",
      text: "Truly a wonderful experience. The team was so comfortable to work with and the results are art."
    },
    {
      img: client3,
      title: "CLASSIC ROYAL RECEPTION",
      author: "BY HARISH KUMAR & HARSHINI",
      text: "The aesthetic sense and the way they play with natural light is just incredible. Highly recommended."
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="journal-header">
        <div className="line"></div>
        <h2 className="serif-title">From The Journal</h2>
        <div className="line"></div>
      </div>

      <div className="journal-container">
        <div className="journal-scroll-wrapper">
          {reviews.map((item, index) => (
            <div className="journal-card" key={index}>
              <div className="journal-img-box">
                <img src={item.img} alt={item.title} />
                {/* Floating Title Box */}
                <div className="floating-title-box">
                  <h3 className="card-title">{item.title}</h3>
                  <span className="card-author">{item.author}</span>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">{item.text}</p>
                <div className="card-footer">
                   <span>💬 2</span>
                   <span>❤️ 5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}