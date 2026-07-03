import './About.css'

import video1 from '../../assets/about1.mp4'
import video2 from '../../assets/about2.mp4'

export default function About() {
return ( <section className="about" id="about" aria-labelledby="about-heading"> <div className="about__container">


    {/* ---- Video Column ---- */}
    <div className="about__images">

      <div className="about__img-primary">
        <video
          className="about__video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video1} type="video/mp4" />
        </video>
      </div>

      <div className="about__img-secondary">
        <video
          className="about__video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>

    </div>

  {/* ---- Text Column ---- */}
<div className="about__text">
  <span className="section-label">
    About Priya's Beauty Lounge
  </span>

  <h2 className="about__heading" id="about-heading">
    Enhancing Your Natural Beauty With Elegance & Perfection
  </h2>

  <p className="about__body">
    At <strong>Priya's Beauty Lounge</strong>, every makeover is designed to
    highlight your unique beauty while preserving your natural charm. With
    over <strong>6+ years of professional experience</strong>, we specialize
    in luxury bridal makeup, flawless skin finishes, elegant saree draping,
    and personalized beauty services for every special occasion.
  </p>

  <p className="about__body">
    From bridal ceremonies and receptions to engagements, baby showers, and
    festive celebrations, our mission is to create timeless, graceful looks
    that make you feel confident and radiant. Using premium products,
    modern techniques, and a passion for perfection, we ensure every client
    receives a customized beauty experience. We are also available for
    destination weddings and travel bookings across locations.
  </p>

  <a href="#contact" className="btn about__cta">
    Book Your Appointment
  </a>
</div>

  </div>
</section>


)
}
