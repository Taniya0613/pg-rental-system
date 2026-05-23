import { useState, useEffect } from 'react'
import { FACILITY_SLIDES } from '../constants/site'
import './FacilitySlider.css'

function FacilitySlider() {
  const [index, setIndex] = useState(0)
  const total = FACILITY_SLIDES.length

  const goTo = (i) => setIndex((i + total) % total)
  const goPrev = () => goTo(index - 1)
  const goNext = () => goTo(index + 1)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, 5000)
    return () => clearInterval(timer)
  }, [total])

  const slide = FACILITY_SLIDES[index]

  return (
    <div className="facility-slider card">
      <div className="facility-slider__viewport">
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className="facility-slider__img"
        />
        <button
          type="button"
          className="facility-slider__arrow facility-slider__arrow--prev"
          onClick={goPrev}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          type="button"
          className="facility-slider__arrow facility-slider__arrow--next"
          onClick={goNext}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
      <p className="facility-slider__caption">{slide.label}</p>
      <div className="facility-slider__dots" role="tablist" aria-label="Facility slides">
        {FACILITY_SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={s.label}
            className={`facility-slider__dot ${i === index ? 'facility-slider__dot--active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default FacilitySlider
