import { useLightbox } from '../context/LightboxContext'
import './Lightbox.css'

function Lightbox() {
  const { open, images, index, closeLightbox, goNext, goPrev } = useLightbox()

  if (!open || !images.length) return null

  const current = images[index]

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image full view"
      onClick={closeLightbox}
    >
      <div className="lightbox__toolbar">
        <span className="lightbox__counter">
          {index + 1} / {images.length}
        </span>
        <button
          type="button"
          className="lightbox__close"
          onClick={closeLightbox}
          aria-label="Close"
        >
          <CloseIcon />
        </button>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            aria-label="Previous image"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            aria-label="Next image"
          >
            <ChevronIcon direction="right" />
          </button>
        </>
      )}

      <figure
        className="lightbox__figure"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.alt}
          className="lightbox__img"
        />
        {current.label && (
          <figcaption className="lightbox__caption">{current.label}</figcaption>
        )}
      </figure>
    </div>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

function ChevronIcon({ direction }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {direction === 'left' ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  )
}

export default Lightbox
