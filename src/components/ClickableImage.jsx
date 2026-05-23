import { useLightbox } from '../context/LightboxContext'
import './ClickableImage.css'

function ClickableImage({
  src,
  alt,
  label,
  className = '',
  images,
  index = 0,
  loading = 'lazy',
  ...imgProps
}) {
  const { openLightbox } = useLightbox()

  const gallery = images ?? [{ src, alt, label: label ?? alt }]
  const idx = images ? index : 0

  const handleOpen = () => openLightbox(gallery, idx)

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleOpen()
    }
  }

  return (
    <button
      type="button"
      className={`clickable-image ${className}`}
      onClick={handleOpen}
      onKeyDown={handleKey}
      aria-label={`View full size: ${alt}`}
    >
      <img src={src} alt={alt} loading={loading} {...imgProps} />
      <span className="clickable-image__overlay" aria-hidden="true">
        <ZoomIcon />
        <span className="clickable-image__hint">Tap to enlarge</span>
      </span>
    </button>
  )
}

function ZoomIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
    </svg>
  )
}

export default ClickableImage
