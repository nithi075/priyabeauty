import "./Location.css";

export default function Location() {
  return (
    <section className="location">

      <span className="location-tag">
        VISIT OUR STUDIO
      </span>

      <h2>LOCATION</h2>

      <p className="location-text">
        Clicks by Korniza <br />
        Tamil Nadu <br />
        India
      </p>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.76775846282!2d79.81370947485122!3d12.793581387505641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52e9bd333d0e31%3A0xf0ae32959fa8072a!2sClicks%20by%20Korniza!5e0!3m2!1sen!2sin!4v1777840583895!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Clicks by Korniza Location"
        ></iframe>
      </div>

    </section>
  );
}