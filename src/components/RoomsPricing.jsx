import { WHATSAPP_PRIMARY, ROOM_IMAGES } from '../constants/site'
import ClickableImage from './ClickableImage'
import './RoomsPricing.css'

function RoomsPricing() {
  return (
    <section id="rooms" className="section rooms">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Rooms &amp; Pricing</span>
          <h2 className="section-title">AC, Fully Furnished Single Bed Rooms</h2>
          <p className="section-desc">
            Rent starts from ₹10,000 per month. The security deposit is equal to the
            monthly rent and is fully refundable with 1 month prior notice before vacating.
          </p>
        </header>

        <div className="rooms__card card">
          <div className="rooms__badge">Most Popular</div>
          <div className="rooms__photo">
            <ClickableImage
              src="/images/rooms/room-01.png"
              alt="AC furnished room at ARADHYA HOMES"
              label="AC Room — Feature Wall & Twin Beds"
              className="rooms__clickable"
              images={ROOM_IMAGES}
              index={0}
            />
          </div>
          <div className="rooms__body">
            <div className="rooms__header">
              <h3 className="rooms__type">Single Bed Room</h3>
              <p className="rooms__tagline">AC · Furnished · Attached Washroom</p>
            </div>
            <div className="rooms__price">
              <span className="rooms__amount">Rent starts from ₹10,000</span>
              <span className="rooms__period">/ month</span>
            </div>
            <ul className="rooms__features">
              <li>AC room — comfortable all year</li>
              <li>Fully furnished — bed &amp; essentials</li>
              <li>Separate washroom — geyser &amp; washbasin</li>
              <li>Daily proper cleaning — room &amp; washroom</li>
              <li>3 meals, Wi-Fi, fridge &amp; washing machine</li>
            </ul>
            <div className="rooms__deposit">
              <div className="rooms__deposit-info">
                <strong>Security Deposit</strong>
                <p>Security deposit is equal to the monthly rent.</p>
                <p>
                  The security deposit is fully refundable. Tenants must inform 1 month
                  before leaving the PG to receive the refund.
                </p>
              </div>
            </div>
            <div className="rooms__security">
              Each resident receives a <strong>personal punch card</strong> for secure
              entry access.
            </div>
            <div className="rooms__actions">
              <a href="#contact" className="btn btn-primary">
                Book a Visit
              </a>
              <a
                href={WHATSAPP_PRIMARY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomsPricing
