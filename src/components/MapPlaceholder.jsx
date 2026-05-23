import { PG_NAME, LOCATION, GOOGLE_MAPS_URL, GOOGLE_MAPS_EMBED } from '../constants/site'
import './MapPlaceholder.css'

function MapPlaceholder() {
  return (
    <section id="location" className="section map-section">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Location</span>
          <h2 className="section-title">Find Us in Sector 22A</h2>
          <p className="section-desc">
            ARDHAYA HOMES, Sector 22A, Gurgaon — view our location on the map or get
            directions on Google Maps.
          </p>
        </header>

        <div className="map-section__wrapper card">
          <div className="map-section__embed">
            <iframe
              title={`${PG_NAME} location on Google Maps`}
              src={GOOGLE_MAPS_EMBED}
              className="map-section__iframe"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="map-section__footer">
            <div className="map-section__address">
              <PinIcon />
              <div>
                <strong>{PG_NAME}</strong>
                <p>{LOCATION}, Haryana</p>
              </div>
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary map-section__btn"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function PinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export default MapPlaceholder
