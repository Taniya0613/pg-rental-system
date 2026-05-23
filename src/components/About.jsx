import { BUILDING_IMAGES } from '../constants/site'
import ClickableImage from './ClickableImage'
import './About.css'

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <div className="about__visual">
            <div className="about__image-card card">
              <ClickableImage
                src="/images/front-sign.png"
                alt="ARDHAYA HOMES building with To-Let sign for girls"
                label="Entrance & Sign"
                className="about__clickable"
                images={BUILDING_IMAGES}
                index={1}
              />
            </div>
            <div className="about__accent card">
              <span className="about__accent-number">AC</span>
              <span className="about__accent-text">Fully Furnished Rooms</span>
            </div>
          </div>
          <div className="about__content">
            <span className="section-label">About Us</span>
            <h2 className="section-title">Welcome to ARDHAYA HOMES</h2>
            <p className="about__text">
              ARDHAYA HOMES is a thoughtfully managed girls paying guest accommodation
              located in Sector 22A, Gurgaon. Our modern building offers a safe, clean,
              and comfortable environment for students and working professionals.
            </p>
            <p className="about__text">
              Every room is air-conditioned and fully furnished — ready for you to move
              in. Each room has its own attached washroom with a geyser and washbasin.
              Rooms and washrooms are cleaned properly every day.
            </p>
            <ul className="about__highlights">
              <li>
                <CheckIcon />
                Separate washroom with every room
              </li>
              <li>
                <CheckIcon />
                Geyser &amp; washbasin — hot water available
              </li>
              <li>
                <CheckIcon />
                Daily proper cleaning — room &amp; washroom
              </li>
              <li>
                <CheckIcon />
                Green park &amp; quiet street outside the PG
              </li>
              <li>
                <CheckIcon />
                AC, fully furnished &amp; girls-only PG
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default About
