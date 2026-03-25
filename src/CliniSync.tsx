import dashboardImg from './assets/clini-sync-dashboard.png';
import appIcon from './assets/clini-sync-hero.png';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function CliniSyncPage() {
  return (
    <div className="page fade-in">
      <header className="hero">
        <img src={appIcon} alt="CliniSync App Icon" style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', display: 'block' }} />
        <h1 className="hero-title">Clini<span style={{ color: 'var(--accent-color)' }}>Sync</span></h1>
        <h2 className="hero-subtitle">Streamline your clinic with confidence.</h2>
        <p className="hero-bio">
          The ultimate all-in-one solution for modern healthcare providers. Manage patient records, track appointments, and handle your clinic's operations effortlessly.
        </p>
        <div className="hero-actions">
          <button className="btn" onClick={() => window.open('https://apps.microsoft.com/detail/9nz237jdmpm2?hl=en-GB&gl=IN', '_blank')}>
            Download on Windows
          </button>
          <button className="btn btn-outline" onClick={() => window.location.href = 'mailto:encrustace@gmail.com?subject=CliniSync%20Demo%20Request'}>
            Book a Demo
          </button>
        </div>
      </header>

      <section className="section">
        <h2 className="section-title">Everything you need to run your clinic</h2>
        <p className="section-subtitle">Built securely and reliably so you can focus strictly on patient care.</p>
        
        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-content">
              <h3>Robust User & Staff Management</h3>
              <p>Scale your team without the headache. Add doctors, receptionists, and administrators with specialized roles. Ensure your entire team is aligned and operating smoothly on a single platform.</p>
            </div>
            <div className="feature-image">
              <img src={dashboardImg} alt="CliniSync User Management" />
            </div>
          </div>

          <div className="feature-item reverse">
            <div className="feature-content">
              <h3>Unlimited Patient Records</h3>
              <p>Ditch the physical paperwork. Store, search, and manage detailed patient history, prescriptions, and test results securely in the cloud. Accessible securely anywhere, at any time.</p>
            </div>
            <div className="feature-image">
              <img src={dashboardImg} alt="CliniSync Records Features" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Simple, transparent pricing</h2>
        <p className="section-subtitle">Start for free, upgrade when you need to.</p>

        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Basic</h3>
            <p className="pricing-desc">Perfect for solo practitioners just getting started.</p>
            <div className="price">Free</div>
            <ul className="feature-list">
              <li><CheckIcon /> 2 Users</li>
              <li><CheckIcon /> 100 Records supported</li>
              <li className="inactive"><CheckIcon /> Basic Support</li>
            </ul>
            <button className="btn btn-outline btn-block" onClick={() => window.open('https://apps.microsoft.com/detail/9nz237jdmpm2?hl=en-GB&gl=IN', '_blank')}>Download Free</button>
          </div>

          <div className="pricing-card pro">
            <div className="badge">Most Popular</div>
            <h3>Pro</h3>
            <p className="pricing-desc">Ideal for growing clinics with a dedicated team.</p>
            <div className="price">₹500<span>/month</span></div>
            <ul className="feature-list">
              <li><CheckIcon /> Up to 8 Users</li>
              <li><CheckIcon /> Unlimited Records</li>
              <li><CheckIcon /> Priority Email Support</li>
            </ul>
            <button className="btn btn-block" onClick={() => window.location.href = 'mailto:encrustace@gmail.com?subject=CliniSync%20Pro%20Plan%20Inquiry'}>Contact to Upgrade</button>
          </div>

          <div className="pricing-card">
            <h3>Advance</h3>
            <p className="pricing-desc">For established hospitals needing maximum capacity.</p>
            <div className="price">₹700<span>/month</span></div>
            <ul className="feature-list">
              <li><CheckIcon /> Up to 15 Users</li>
              <li><CheckIcon /> Unlimited Records*</li>
              <li><CheckIcon /> 24/7 Phone Support</li>
            </ul>
            <button className="btn btn-outline btn-block" onClick={() => window.location.href = 'mailto:encrustace@gmail.com?subject=CliniSync%20Advance%20Plan%20Inquiry'}>Contact Sales</button>
          </div>
        </div>
        <p className="pricing-disclaimer">
          * Unlimited records for the Advance plan are subject to our fair usage policy and might be subject to change in the future.
        </p>
      </section>
    </div>
  );
}