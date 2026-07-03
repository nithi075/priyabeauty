import { useState } from 'react';
import './faq.css';

const FAQ = () => {

 const faqData = [
  {
    question: "HOW DO I BOOK AN APPOINTMENT?",
    answer:
      "You can book your appointment by contacting us through our website, phone, or WhatsApp. We recommend booking your bridal makeup at least 2–3 months in advance to secure your preferred date.",
  },

  {
    question: "DO YOU PROVIDE BRIDAL TRIAL MAKEUP?",
    answer:
      "Yes. We offer bridal makeup trials to help you finalize the perfect look before your wedding day. Trial sessions are available by prior appointment.",
  },

  {
    question: "DO YOU TRAVEL TO MY LOCATION?",
    answer:
      "Absolutely! We provide on-location makeup services for weddings and special events. Destination bridal makeup and outstation bookings are also available.",
  },

  {
    question: "WHAT PRODUCTS DO YOU USE?",
    answer:
      "We use premium, professional makeup products from trusted international and luxury brands to ensure a flawless, long-lasting finish that's suitable for your skin type.",
  },

  {
    question: "WHAT SERVICES DO YOU OFFER?",
    answer:
      "We specialize in Bridal Makeup, HD Makeup, Engagement Makeup, Reception Makeup, Hairstyling, Saree Draping, Baby Shower Makeup, Party Makeup, and other special occasion beauty services.",
  },

  {
    question: "HOW LONG DOES BRIDAL MAKEUP TAKE?",
    answer:
      "A complete bridal makeover, including makeup, hairstyling, and saree draping, typically takes around 2–3 hours depending on the selected look.",
  },
];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <section className="faq-section">

      {/* HEADER */}

      <div className="faq-header">

        <p className="faq-mini">
          Information
        </p>

        <h2 className="faq-title">
          THE DETAILS
        </h2>

      </div>

      {/* FAQ LIST */}

      <div className="faq-list">

        {faqData.map((item, index) => (

          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
          >

            {/* QUESTION */}

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >

              <span>{item.question}</span>

              <span className="faq-icon">
                {activeIndex === index ? '−' : '+'}
              </span>

            </button>

            {/* ANSWER */}

            <div
              className={`faq-answer ${
                activeIndex === index ? 'show' : ''
              }`}
            >

              <p>{item.answer}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default FAQ;
