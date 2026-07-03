import './Contact.css'
import contactImg from '../../assets/contact.jpg'

export default function Contact() {
  return (
    <section
      className="contact"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="contact__hero">
        <div className="contact__hero-img-wrap">
          <img
            src={contactImg}
            alt="Priya's Beauty Lounge Bridal Makeup"
            loading="lazy"
            className="contact__hero-img"
          />
        </div>

        <div className="contact__hero-overlay" aria-hidden="true" />

        <div className="contact__hero-content">
          <h2 className="contact__heading" id="contact-heading">
            Let's Create Your Perfect Bridal Look
          </h2>

          <p className="contact__subtext">
            Whether it's your wedding, engagement, reception, baby shower, or
            any special celebration, we're here to make you look and feel your
            absolute best. Book your appointment today and let Priya's Beauty
            Lounge bring your dream look to life.
          </p>

          <a
            href="#booking"
            className="btn btn-light"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  )
}