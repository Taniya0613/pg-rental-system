import FacilitySlider from './FacilitySlider'
import './Facilities.css'

const facilities = [
  { title: '3 Time Nutritious Meals', icon: FoodIcon },
  { title: 'Daily Cleaning Service', icon: SparkleIcon },
  { title: 'High-Speed Wi-Fi', icon: WifiIcon },
  { title: 'RO Purified Water', icon: WaterIcon },
  { title: 'Refrigerator', icon: FridgeIcon },
  { title: 'Washing Machine', icon: WashIcon },
  { title: 'No Water Supply Issues', icon: WaterIcon },
  { title: 'Separate Wardrobe in Every Room', icon: WardrobeIcon },
  { title: 'Individual Mirror', icon: MirrorIcon },
  { title: 'Study Table & Chair', icon: StudyIcon },
  { title: 'Balcony Rooms', icon: BalconyIcon },
  { title: 'Secure Punch Card Entry System', icon: CardIcon },
  { title: 'Door Lock Security', icon: LockIcon },
  { title: 'Safe and Comfortable Environment for Girls', icon: ShieldIcon },
]

function Facilities() {
  return (
    <section id="facilities" className="section facilities">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Facilities</span>
          <h2 className="section-title">Everything You Need</h2>
          <p className="section-desc">
            AC furnished rooms, a private washroom with every room, geyser, washbasin,
            and daily proper cleaning — everything in one place.
          </p>
        </header>

        <FacilitySlider />

        <div className="facilities__security card">
          <ShieldIcon />
          <p>
            Each resident receives a <strong>personal punch card</strong> for secure
            entry access.
          </p>
        </div>

        <div className="facilities__grid">
          {facilities.map((item) => (
            <article key={item.title} className="facilities__card card">
              <div className="facilities__icon">
                <item.icon />
              </div>
              <h3 className="facilities__title">{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FoodIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 11h16M4 7h16M4 15h10M4 19h6" />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
    </svg>
  )
}

function WifiIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 12.55a11 11 0 0114 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
    </svg>
  )
}

function WaterIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.32 0L12 2.69z" />
    </svg>
  )
}

function FridgeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M10 6h4M10 10h4" />
    </svg>
  )
}

function WashIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2 2" />
    </svg>
  )
}

function WardrobeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <path d="M12 2v20M8 10h.01M16 10h.01" />
    </svg>
  )
}

function MirrorIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h6" />
    </svg>
  )
}

function StudyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 19h16M6 16l6-9 6 9M10 16v3M14 16v3" />
    </svg>
  )
}

function BalconyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-6h6v6" />
    </svg>
  )
}

function CardIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 118 0v4" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

export default Facilities
