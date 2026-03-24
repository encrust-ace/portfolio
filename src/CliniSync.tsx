export default function CliniSync() {
  return (
    <div className="page fade-in">
      <div className="project-header">
        <h1 className="hero-title">Clini Sync</h1>
        <h2 className="hero-subtitle">Smart Clinic Management</h2>
      </div>

      <section className="section">
        <p className="project-intro">
          <strong>Welcome to Clini Sync,</strong> the ultimate clinic management solution designed to modernize and streamline healthcare practices. Whether you are a solo practitioner or managing a multi-doctor clinic, Clini Sync provides all the tools you need to digitize daily operations, allowing you to focus on what matters most—delivering excellent patient care.
        </p>
        <p>
          Say goodbye to paperwork and scattered records. Clini Sync brings appointments, patient histories, medical prescriptions, inventory, and financial analytics into one secure, intuitive, and easy-to-use platform.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">✨ Key Features</h2>
        <ul className="feature-list">
          <li>
            <strong>🩺 Comprehensive Patient Management:</strong> Easily register patients, record demographics, and maintain detailed medical histories. Access past consultations, allergies, and contact details in seconds. Securely upload and view digital Lab Reports directly from the patient’s profile.
          </li>
          <li>
            <strong>📅 Smart Appointment Scheduling:</strong> Manage your clinic's daily schedule with ease. Book, track, and update patient appointments. Seamlessly convert scheduled appointments into active consultations when the patient arrives.
          </li>
          <li>
            <strong>📝 Digital Consultations & Prescriptions:</strong> Write professional medical reports with clinical observations and advice. Create digital prescriptions using an integrated medicine inventory. Specify exact dosages, timings (e.g., After Food / Before Food), and durations with an intuitive builder.
          </li>
          <li>
            <strong>💳 Invoicing & Financial Tracking:</strong> Generate detailed invoices for consultation fees and prescribed medicines in just a few taps. Apply discounts, track paid and unpaid statuses, and monitor your clinic's revenue stream effortlessly.
          </li>
          <li>
            <strong>📄 Professional PDF Generation:</strong> Instantly generate beautifully formatted PDF Medical Reports and Invoices. Customize documents with your clinic’s name, address, and logo. Print directly or share securely via email or messaging apps.
          </li>
          <li>
            <strong>📊 Advanced Analytics Dashboard:</strong> Make informed decisions with a powerful dashboard. Track daily, weekly, or monthly clinical trends, monitor total revenue, and view visual charts for patient demographics and consultation frequencies.
          </li>
          <li>
            <strong>📦 Medicine Inventory Tracking:</strong> Keep track of your clinic’s pharmacy. Add medicines, manage stock levels, set unit prices, and auto-deduct quantities as you prescribe them.
          </li>
          <li>
            <strong>👥 Staff & Role Management:</strong> Securely authorize clinic staff and doctors using secure Google Authentication. Assign specific roles (Admin, Doctor, Staff) to control access to sensitive medical and financial data.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">🔒 Security & Privacy First</h2>
        <p>
          Your data is protected with industry-standard encryption and secure cloud backups. Clini Sync features strict Role-Based Access Controls (RBAC), ensuring that only authorized personnel can access patient health information (PHI) and clinic financials.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">⚙️ Designed for Professionals</h2>
        <ul className="feature-list">
          <li><strong>Customizable:</strong> Supports multiple currencies and international dialing codes.</li>
          <li><strong>Accessible:</strong> Clean interface with both Light and Dark mode support.</li>
          <li><strong>Multi-Device:</strong> Your clinic's data stays perfectly synced across all your authorized devices in real-time.</li>
        </ul>
      </section>

      <section className="section cta-section">
        <div className="cta-box">
          <h3>Take your clinic paperless today.</h3>
          <p>Experience the future of healthcare management with Clini Sync.</p>
          <a href="mailto:encrustace@gmail.com" className="btn">Contact for a Demo</a>
        </div>
      </section>
    </div>
  );
}