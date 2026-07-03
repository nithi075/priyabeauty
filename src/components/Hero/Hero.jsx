import { useState, useEffect } from 'react'
import './Hero.css'

import hero1 from '../../assets/hero1.jpg'
import hero2 from '../../assets/hero2.jpg'
import hero3 from '../../assets/hero3.jpg'
const slides = [
  {
    id: 1,
    src: hero1,
    alt: 'Srimathi Photography Hero Image 1',
  },
  {
    id: 2,
    src: hero2,
    alt: 'Srimathi Photography Hero Image 2',
  },
  {
    id: 3,
    src: hero3,
    alt: 'Srimathi Photography Hero Image 3',
  },

]

const INTERVAL = 5000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return

    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, INTERVAL)

    return () => clearInterval(id)
  }, [paused])

  const goTo = (i) => {
    setCurrent(i)
    setPaused(true)
    setTimeout(() => setPaused(false), INTERVAL * 2)
  }

  return (
    <section className="hero" aria-label="Hero slideshow">
      {/* Slides */}
      <div className="hero__slides">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero__slide${
              i === current ? ' hero__slide--active' : ''
            }`}
            aria-hidden={i !== current}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="hero__slide-img"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="hero__overlay" aria-hidden="true" />

   {/* Content */}
<div className="hero__content">
  <p className="hero__eyebrow">
    Luxury Bridal Makeup Artist • 6+ Years Experience
  </p>

  <h1 className="hero__heading">
    Where Beauty
    <br />
    Meets Elegance
  </h1>

  <p className="hero__description">
    Experience bespoke bridal makeup, flawless skin finishes, and
    personalized styling designed to make you look radiant, confident,
    and picture-perfect on your most cherished moments.
  </p>

  <a href="#contact" className="btn btn-light hero__cta">
    Reserve Your Date
  </a>
</div>

      {/* Dots */}
      <div
        className="hero__dots"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            className={`hero__dot${
              i === current ? ' hero__dot--active' : ''
            }`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Hint */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}