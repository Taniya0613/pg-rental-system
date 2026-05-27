import { GALLERY_SECTIONS, ALL_GALLERY_IMAGES } from '../constants/site'
import ImageCarousel from './ImageCarousel'
import './Gallery.css'

function GallerySection({ title, subtitle, images, allImages, startIndex }) {
  return (
    <div className="gallery__block">
      <h3 className="gallery__subsection-title">{title}</h3>
      {subtitle && <p className="gallery__subsection-desc">{subtitle}</p>}
      <ImageCarousel
        images={images}
        allImages={allImages}
        startIndex={startIndex}
      />
    </div>
  )
}

function Gallery() {
  let startIndex = 0

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">Photos of ARADHYA HOMES</h2>
          <p className="section-desc">
            Browse by category — swipe on phone or use arrows. Tap any photo for
            full-screen view.
          </p>
        </header>

        {GALLERY_SECTIONS.map((section) => {
          const currentStart = startIndex
          startIndex += section.images.length
          return (
            <GallerySection
              key={section.title}
              title={section.title}
              subtitle={section.subtitle}
              images={section.images}
              allImages={ALL_GALLERY_IMAGES}
              startIndex={currentStart}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Gallery
