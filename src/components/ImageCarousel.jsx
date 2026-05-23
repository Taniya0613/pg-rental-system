import { useRef, useState, useEffect, useCallback } from 'react'
import ClickableImage from './ClickableImage'
import './ImageCarousel.css'

function ImageCarousel({ images, allImages, startIndex }) {
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft < maxScroll - 4)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [images, updateArrows])

  const scrollBySlide = (direction) => {
    const el = trackRef.current
    if (!el) return
    const slide = el.querySelector('.image-carousel__slide')
    const gap = 16
    const amount = slide ? slide.offsetWidth + gap : el.clientWidth * 0.88
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  if (!images.length) return null

  return (
    <div className="image-carousel">
      <div className="image-carousel__controls">
        <button
          type="button"
          className="image-carousel__arrow"
          onClick={() => scrollBySlide(-1)}
          disabled={!canPrev}
          aria-label="Previous photos"
        >
          ‹
        </button>
        <span className="image-carousel__hint">Swipe or tap arrows to browse</span>
        <button
          type="button"
          className="image-carousel__arrow"
          onClick={() => scrollBySlide(1)}
          disabled={!canNext}
          aria-label="Next photos"
        >
          ›
        </button>
      </div>

      <div className="image-carousel__track" ref={trackRef}>
        {images.map((item, i) => (
          <figure key={item.src} className="image-carousel__slide card">
            <div className="image-carousel__img-wrap">
              <ClickableImage
                src={item.src}
                alt={item.alt}
                label={item.label}
                className="image-carousel__clickable"
                images={allImages}
                index={startIndex + i}
                loading="lazy"
              />
            </div>
            <figcaption className="image-carousel__caption">{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
