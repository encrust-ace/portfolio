import dashboardImg from './assets/clini-sync-dashboard.png';
import './CliniSync.css';

export default function CliniSyncPage() {
  return (
    <div className="cs-page">
      {/* Header / Navigation */}
      <header className="cs-header">
        <div className="cs-container cs-header-inner">
          <div className="cs-logo-container">
            {/* Optional: You can put a clini-sync-logo.png here */}
            <div className="cs-logo-icon">+</div>
            <h1 className="cs-logo-text">Clini<span className="cs-text-blue">Sync</span></h1>
          </div>
          <nav className="cs-nav">
            <a href="#features" className="cs-nav-link">Features</a>
            <a href="#pricing" className="cs-nav-link">Pricing</a>
            <button className="cs-btn-sm" onClick={() => window.open('https://apps.microsoft.com/detail/9nz237jdmpm2?hl=en-GB&gl=IN', '_blank')}>
              Get Started
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="cs-hero">
        <div className="cs-hero-bg"></div>
        <div className="cs-container cs-hero-content">
          <h2 className="cs-hero-title">
            Streamline your clinic with <span className="cs-text-blue">confidence.</span>
          </h2>
          <p className="cs-hero-subtitle">
            The ultimate all-in-one solution for modern healthcare providers. Manage patient records, track appointments, and handle your clinic's operations effortlessly.
          </p>
          <div className="cs-hero-buttons">
            <button className="cs-btn-primary" onClick={() => window.open('https://apps.microsoft.com/detail/9nz237jdmpm2?hl=en-GB&gl=IN', '_blank')}>
              Download on Windows
            </button>
            <button className="cs-btn-secondary" onClick={() => window.location.href = 'mailto:encrustace@gmail.com?subject=CliniSync%20Demo%20Request'}>
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="cs-features">
        <div className="cs-container">
          <div className="cs-section-header">
            <h3 className="cs-section-title">Everything you need to run your clinic</h3>
            <p className="cs-section-subtitle">Built securely and reliably so you can focus strictly on patient care.</p>
          </div>
          
          <div className="cs-feature-row">
            <div className="cs-order-2">
              <img src={dashboardImg} alt="CliniSync User Management" className="cs-feature-img" />
            </div>
            <div className="cs-order-1">
              <div className="cs-icon-box cs-icon-blue">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h4 className="cs-feature-title">Robust User & Staff Management</h4>
              <p className="cs-feature-desc">
                Scale your team without the headache. Add doctors, receptionists, and administrators with specialized roles. Ensure your entire team is aligned and operating smoothly on a single platform.
              </p>
            </div>
          </div>

          <div className="cs-feature-row">
            <div>
              <div className="cs-icon-box cs-icon-green">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h4 className="cs-feature-title">Unlimited Patient Records</h4>
              <p className="cs-feature-desc">
                Ditch the physical paperwork. Store, search, and manage detailed patient history, prescriptions, and test results securely in the cloud. Accessible securely anywhere, at any time.
              </p>
            </div>
            <div>
              <img src={dashboardImg} alt="CliniSync Records Features" className="cs-feature-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="cs-pricing">
        <div className="cs-container">
          <div className="cs-section-header">
            <h3 className="cs-section-title">Simple, transparent pricing</h3>
            <p className="cs-section-subtitle">Start for free, upgrade when you need to.</p>
          </div>

          <div className="cs-pricing-grid">
            {/* Basic Plan */}
            <div className="cs-pricing-card">
              <h4 className="cs-card-header">Basic</h4>
              <p className="cs-card-desc cs-text-light">Perfect for solo practitioners just getting started.</p>
              <div className="cs-price-box">
                <span className="cs-price">Free</span>
              </div>
              <ul className="cs-features-list">
                <li><svg className="cs-list-icon cs-icon-blue-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg><span className="cs-list-text">2 Users</span></li>
                <li><svg className="cs-list-icon cs-icon-blue-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg><span className="cs-list-text">100 Records supported</span></li>
                <li className="cs-list-item-inactive"><svg className="cs-list-icon cs-icon-gray-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>Basic Support</li>
              </ul>
              <button className="cs-btn-block cs-btn-basic" onClick={() => window.open('https://apps.microsoft.com/detail/9nz237jdmpm2?hl=en-GB&gl=IN', '_blank')}>Download Free</button>
            </div>

            {/* Pro Plan */}
            <div className="cs-pricing-card pro">
              <div className="cs-badge-wrapper">
                <span className="cs-badge">Most Popular</span>
              </div>
              <h4 className="cs-card-header cs-text-white">Pro</h4>
              <p className="cs-card-desc cs-text-blue-light">Ideal for growing clinics with a dedicated team.</p>
              <div className="cs-price-box cs-text-white">
                <span className="cs-price">₹500</span>
                <span className="cs-price-suffix cs-text-blue-light">/month</span>
              </div>
              <ul className="cs-features-list cs-text-white">
                <li><svg className="cs-list-icon cs-icon-light-blue-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg><span className="cs-list-text">Up to 8 Users</span></li>
                <li><svg className="cs-list-icon cs-icon-light-blue-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg><span className="cs-list-text">Unlimited Records</span></li>
                <li><svg className="cs-list-icon cs-icon-light-blue-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Priority Email Support</li>
              </ul>
              <button className="cs-btn-block cs-btn-pro" onClick={() => window.location.href = 'mailto:encrustace@gmail.com?subject=CliniSync%20Pro%20Plan%20Inquiry'}>Contact to Upgrade</button>
            </div>

            {/* Advance Plan */}
            <div className="cs-pricing-card">
              <h4 className="cs-card-header">Advance</h4>
              <p className="cs-card-desc cs-text-light">For established hospitals needing maximum capacity.</p>
              <div className="cs-price-box">
                <span className="cs-price">₹700</span>
                <span className="cs-price-suffix cs-text-light">/month</span>
              </div>
              <ul className="cs-features-list">
                <li><svg className="cs-list-icon cs-icon-blue-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg><span className="cs-list-text">Up to 15 Users</span></li>
                <li><svg className="cs-list-icon cs-icon-blue-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg><span className="cs-list-text">Unlimited Records<sup className="cs-sup">*</sup></span></li>
                <li><svg className="cs-list-icon cs-icon-blue-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>24/7 Phone Support</li>
              </ul>
              <button className="cs-btn-block cs-btn-advance" onClick={() => window.location.href = 'mailto:encrustace@gmail.com?subject=CliniSync%20Advance%20Plan%20Inquiry'}>Contact Sales</button>
            </div>
          </div>
          <p className="cs-disclaimer">
            * Unlimited records for the Advance plan are subject to our fair usage policy and might be subject to change in the future.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="cs-footer">
        <div className="cs-container">
          <p>&copy; {new Date().getFullYear()} CliniSync Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}