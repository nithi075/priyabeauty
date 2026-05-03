import "./Services.css";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Wedding Storytelling",
      tag: "Intimate & Grand",
      desc: "Raw emotions and quiet moments captured with a cinematic eye."
    },
    {
      id: "02",
      title: "Editorial & Brand",
      tag: "Vogue Style",
      desc: "Elevating your brand identity with high-fashion aesthetics."
    },
    {
      id: "03",
      title: "Portraiture",
      tag: "Fine Art",
      desc: "Timeless personal portraits that celebrate the individual soul."
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-wrapper">
        <header className="services-header">
          <span className="overline">Services</span>
          <h2 className="display-title">Expertise & <br /> <span className="serif-italic">Focus</span></h2>
        </header>

        <div className="services-list">
          {services.map((s) => (
            <div key={s.id} className="service-row">
              <div className="row-header">
                <span className="row-id">{s.id}</span>
                <span className="row-tag">{s.tag}</span>
              </div>
              <div className="row-body">
                <h3>{s.title}</h3>
                <p className="row-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}