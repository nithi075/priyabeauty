/* =============================================
   Testimonials — 3 rotating sets of 3 reviews
   ============================================= */
import { useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    body: 'Thank you for making me look absolutely stunning on my wedding day. The makeup stayed flawless throughout the ceremony and reception, and I received so many compliments. You truly understood the look I wanted.',
    couple: 'Keerthana',
  },
  {
    id: 2,
    body: 'From the trial session to the wedding day, everything was handled professionally. The bridal makeup looked elegant, natural, and lasted all day. Highly recommend for any bride!',
    couple: 'Divya',
  },
  {
    id: 3,
    body: 'I booked bridal makeup along with reception makeup, and both looks were perfect. The artist made me feel comfortable and confident. Thank you for making my special day unforgettable.',
    couple: 'Aishwarya',
  },
  {
    id: 4,
    body: 'Such an amazing experience! The makeup was lightweight, beautiful, and photographed perfectly. Everyone appreciated the look, and I felt gorgeous throughout the event.',
    couple: 'Priyanka',
  },
  {
    id: 5,
    body: 'The attention to detail was incredible. My hairstyle and makeup complemented my outfit perfectly. Thank you for your patience, professionalism, and wonderful work.',
    couple: 'Nandhini',
  },
  {
    id: 6,
    body: 'I wanted a subtle and classy bridal look, and it turned out exactly as I imagined. The products used were of excellent quality, and the makeup lasted until the end of the reception.',
    couple: 'Harini',
  },
  {
    id: 7,
    body: 'The makeover exceeded all my expectations. Every detail, from the base makeup to the eye look and hairstyle, was done beautifully. I would definitely book again.',
    couple: 'Meghana',
  },
  {
    id: 8,
    body: 'Professional, friendly, and extremely talented. The artist listened to my preferences and created a flawless bridal look that suited my skin tone perfectly. Highly recommended!',
    couple: 'Sowmya',
  },
  {
    id: 9,
    body: 'One of the best bridal makeup artists! The makeup looked natural in person and stunning in photos. Thank you for making me feel confident and beautiful on my big day.',
    couple: 'Shalini',
  },
]

/* Group into pages of 3 */
const pages = [
  testimonials.slice(0, 3),
  testimonials.slice(3, 6),
  testimonials.slice(6, 9),
]

export default function Testimonials() {
  const [page, setPage] = useState(0)

  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials__container">
        <span className="section-label" id="testimonials-heading">Testimonials</span>

        <div className="testimonials__grid">
          {pages[page].map((t) => (
            <article key={t.id} className="testimonial-card">
              {/* Quotation mark */}
              <span className="testimonial-card__quote" aria-hidden="true">"</span>
              <p className="testimonial-card__body">{t.body}</p>
              <footer className="testimonial-card__footer">
                <p className="testimonial-card__couple">{t.couple}</p>
              </footer>
            </article>
          ))}
        </div>

        {/* Page dots */}
        <div className="testimonials__dots" role="tablist" aria-label="Testimonial page">
          {pages.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot${i === page ? ' testimonials__dot--active' : ''}`}
              onClick={() => setPage(i)}
              role="tab"
              aria-selected={i === page}
              aria-label={`Testimonials page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
