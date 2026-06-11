import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChartBar,
  Calendar,
  CheckCircle,
  CaretRight,
  Envelope,
  MapPin,
  List,
  Phone,
  Receipt,
  Sparkle,
  X,
} from "@phosphor-icons/react";

const businessFeatures = [
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    copy: "Effortlessly schedule and manage appointments from one clear calendar.",
  },
  {
    icon: Receipt,
    title: "Point of Sale",
    copy: "Sell packages, issue receipts, and keep daily operations connected.",
  },
  {
    icon: ChartBar,
    title: "Real-Time Analytics",
    copy: "See financial performance, client trends, and business growth at a glance.",
  },
];

const bookingFeatures = [
  "Make reservations from mobile",
  "Review available promotions",
  "Track purchased packages",
];

const customerLogos = [
  { src: "/assets/customer-30-transparent.png", alt: "DSC" },
  { src: "/assets/customer-31-transparent.png", alt: "Aesthetic clinic customer" },
  { src: "/assets/customer-32-transparent.png", alt: "The Queen" },
  { src: "/assets/customer-33-transparent.png", alt: "GreatTime clinic customer" },
  { src: "/assets/customer-34-transparent.png", alt: "Lemon Aesthetic" },
  { src: "/assets/customer-35-transparent.png", alt: "Pure" },
];

const principles = [
  {
    number: "01",
    title: "Story",
    copy: "We believe small business owners in beauty and wellness should have access to the same technology and tools as larger companies.",
  },
  {
    number: "02",
    title: "Vision",
    copy: "To streamline appointment booking, customer management, inventory tracking, and everyday business operations.",
  },
  {
    number: "03",
    title: "Technology",
    copy: "Our technology helps entrepreneurs simplify their business and reach more customers.",
  },
];

function Reveal({ children, className = "" }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="GreatTime home" onClick={closeMenu}>
          <img src="/assets/greattime-logo-transparent.png" alt="GreatTime" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={26} /> : <List size={26} />}
        </button>

        <nav id="site-navigation" className={menuOpen ? "site-nav is-open" : "site-nav"}>
          <a href="#business" onClick={closeMenu}>Business App</a>
          <a href="#booking" onClick={closeMenu}>Booking App</a>
          <a href="#taskflow" onClick={closeMenu}>TaskFlow</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-cta" href="#demo" onClick={closeMenu}>Request a Demo</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-line">
          <div className="hero-copy">
            <p className="eyebrow">Modern tools for aesthetic clinics</p>
            <h1>Bookings, Appointments, and Finance in One Place</h1>
            <p className="hero-lead">
              All your appointments, clients, and team tasks in one place.
            </p>
            <div className="hero-actions">
              <a className="button button-solid" href="#demo">
                Request a Demo <ArrowRight weight="bold" />
              </a>
              <a className="button button-outline" href="#business">
                Explore the Product
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="GreatTime finance dashboard">
            <div className="product-glow" />
            <img
              src="/assets/greattime-dashboard-transparent.png"
              alt="GreatTime reporting, finance dashboard, and invoice screens"
            />
          </div>
        </section>

        <section className="promise section-line">
          <Reveal>
            <p className="eyebrow">One connected system</p>
            <h2>Make every moment count and have a great time.</h2>
          </Reveal>
          <Reveal className="promise-copy">
            <p>
              GreatTime brings booking, customer management, point of sale,
              reporting, and team workflows into one clearer way of working.
            </p>
            <a className="text-link" href="#business">
              See how it works <CaretRight weight="bold" />
            </a>
          </Reveal>
        </section>

        <section className="customers section-line" aria-labelledby="customers-title">
          <Reveal className="customers-heading">
            <p className="eyebrow">Our Customers</p>
            <h2 id="customers-title">Trusted by beauty and wellness businesses.</h2>
          </Reveal>
          <Reveal className="customer-logo-grid">
            {customerLogos.map(({ src, alt }) => (
              <div className="customer-logo" key={src}>
                <img src={src} alt={alt} />
              </div>
            ))}
          </Reveal>
        </section>

        <section id="business" className="business section-line">
          <Reveal className="section-heading">
            <p className="eyebrow">Business App</p>
            <h2>Everything you need to run your clinic.</h2>
          </Reveal>

          <div className="business-layout">
            <div className="feature-list">
              {businessFeatures.map(({ icon: Icon, title, copy }, index) => (
                <Reveal className="feature-row" key={title}>
                  <span className="feature-index">0{index + 1}</span>
                  <Icon size={26} weight="light" />
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="product-frame dashboard-frame">
              <img
                src="/assets/greattime-dashboard-transparent.png"
                alt="GreatTime business dashboard with reports, analytics, and invoicing"
              />
            </Reveal>
          </div>
        </section>

        <section id="taskflow" className="taskflow section-line">
          <Reveal className="taskflow-copy">
            <p className="eyebrow">TaskFlow</p>
            <h2>Task clear. Flow perfect.</h2>
            <p>
              From booking to service completion, keep the team aligned and make
              every next step visible.
            </p>
            <div className="flow-steps" aria-label="TaskFlow stages">
              <span>Booking</span>
              <ArrowRight />
              <span>Doing</span>
              <ArrowRight />
              <span>Done</span>
            </div>
          </Reveal>
          <Reveal className="taskflow-visual">
            <img
              src="/assets/greattime-product.png"
              alt="GreatTime TaskFlow cards showing booking, service progress, and completed services"
            />
          </Reveal>
        </section>

        <section className="dashboard-story section-line">
          <Reveal className="dashboard-story-image">
            <img
              src="/assets/greattime-dashboard-transparent.png"
              alt="GreatTime finance and business intelligence dashboard"
            />
          </Reveal>
          <Reveal className="dashboard-story-copy">
            <p className="eyebrow">Business Dashboard</p>
            <h2>From data to decisions.</h2>
            <p>
              Gain valuable insight into financials, client trends, and overall
              business growth with performance analytics and reporting tools.
            </p>
          </Reveal>
        </section>

        <section id="booking" className="booking section-line">
          <Reveal className="booking-copy">
            <p className="eyebrow">Booking App</p>
            <h2>Easy for your clients. Powerful for your clinic.</h2>
            <div className="booking-list">
              {bookingFeatures.map((item) => (
                <div key={item}>
                  <CheckCircle size={22} weight="fill" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="booking-visual">
            <img
              src="/assets/greattime-taskflow.png"
              alt="GreatTime visual representing connected clinic and customer experiences"
            />
          </Reveal>
        </section>

        <section id="about" className="principles section-line">
          {principles.map(({ number, title, copy }) => (
            <Reveal className="principle" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </Reveal>
          ))}
        </section>

        <section id="demo" className="demo">
          <Reveal className="demo-intro">
            <p className="eyebrow">Request a Demo</p>
            <h2>See how GreatTime can transform your clinic.</h2>
            <p>Schedule a demo with one of our product consultants.</p>
            <div className="contact-list">
              <a href="mailto:hello@greattime.app">
                <Envelope size={21} /> hello@greattime.app
              </a>
              <a href="tel:09966988988">
                <Phone size={21} /> 09966988988
              </a>
              <span>
                <MapPin size={21} /> 133 Thirimingalar Street, Mayangone,
                Yangon, Myanmar
              </span>
            </div>
          </Reveal>

          <Reveal className="form-wrap">
            {submitted ? (
              <div className="success-message" role="status">
                <Sparkle size={34} weight="light" />
                <h3>Thank you.</h3>
                <p>Your demo request has been received.</p>
                <button className="text-link" type="button" onClick={() => setSubmitted(false)}>
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <label>
                    First Name *
                    <input name="firstName" autoComplete="given-name" required />
                  </label>
                  <label>
                    Last Name
                    <input name="lastName" autoComplete="family-name" />
                  </label>
                  <label>
                    Work Email *
                    <input name="email" type="email" autoComplete="email" required />
                  </label>
                  <label>
                    Phone *
                    <input name="phone" type="tel" autoComplete="tel" required />
                  </label>
                  <label className="full-field">
                    Clinic / Company *
                    <input name="company" autoComplete="organization" required />
                  </label>
                  <label className="full-field">
                    Message
                    <textarea name="message" rows="4" />
                  </label>
                </div>
                <label className="consent">
                  <input type="checkbox" required />
                  <span>I agree to be contacted about my GreatTime demo request.</span>
                </label>
                <button className="button button-gold" type="submit">
                  Request a Demo <ArrowRight weight="bold" />
                </button>
              </form>
            )}
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#top" aria-label="Back to top">
          <img src="/assets/greattime-logo-transparent.png" alt="GreatTime" />
        </a>
        <p>© 2026 GreatTime. All rights reserved.</p>
        <a href="mailto:hello@greattime.app">hello@greattime.app</a>
      </footer>
    </div>
  );
}
