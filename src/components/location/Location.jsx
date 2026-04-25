import "./Location.css";

export default function Location() {
  return (
    <section className="location">
      
      <span className="location-tag">
        VISIT OUR STUDIO
      </span>

      <h2>
        LOCATION
      </h2>

      <p className="location-text">
        Pontamil Photography <br />
        Madurai, Tamil Nadu <br />
        India
      </p>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.6076264140447!2d78.09237887480636!3d9.966566490137096!2m3!1f0!2f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c9adf9e2836f%3A0xcc7ae84404a89c90!2sPontamil%20Photography!5e0!3m2!1sen!2sin!4v1777096731836!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Pontamil Photography Location"
        ></iframe>
      </div>

    </section>
  );
}