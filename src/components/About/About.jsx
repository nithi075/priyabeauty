import "./About.css";
import coupleImg from "../../assets/about1.jpg";

export default function About() {
  return (
    <section className="about">

      {/* LEFT IMAGE */}
      <div className="about-left">
        <img src={coupleImg} alt="The Wedding Story" />
        <div className="fade-overlay"></div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="about-right">

        <span className="about-small">MEET THE ARTIST</span>

        <h2 className="about-title">
          Telling Your <span>Legacy</span>
        </h2>

        <p className="about-sub">
          Fine art photography for the modern, soulful couple.
        </p>

        <p className="about-text">
          We believe that photography is more than just taking pictures; it is about 
          preserving the raw emotions, the quiet glances, and the grand celebrations 
          that define your life’s greatest milestones. With a keen eye for detail 
          and a passion for storytelling, we transform your fleeting moments into 
          timeless heirlooms that you will cherish for generations.
        </p>

        <button className="about-btn">VIEW PORTFOLIO</button>

      </div>

    </section>
  );
}