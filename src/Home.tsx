import { Link } from "react-router-dom";
import appIcon from "./assets/clini-sync-hero.png";

export default function Home() {
  return (
    <div className="page fade-in">
      <header className="hero">
        <h1 className="hero-title">Imran Khan</h1>
        <h2 className="hero-subtitle">Creative Full Stack Developer & Hardware Tinkerer</h2>
        <p className="hero-bio">
          I build intuitive, scalable web experiences using modern JavaScript frameworks and bridge the gap between digital interfaces and the physical world through IoT and smart home automation.
        </p>
      </header>

      <section className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend & Web Technologies</h3>
            <p>JavaScript, TypeScript, React, NextJS, Redux, HTML & CSS</p>
          </div>
          <div className="skill-category">
            <h3>Mobile & Backend</h3>
            <p>Flutter, SQL</p>
          </div>
          <div className="skill-category">
            <h3>IoT, Hardware & Automation</h3>
            <p>IoT Application Development, ESP32 & ESP8266 Microcontrollers, Smart Home Infrastructure (Home Assistant, ESPHome, WLED), Sensor Integration & Telemetrics, Custom Firmware Configuration</p>
          </div>
          <div className="skill-category">
            <h3>Systems, Networking & Methodologies</h3>
            <p>Linux Environments (Arch Linux, Fedora Silverblue), Docker Containerization, Advanced Home Networking (OpenWrt, OPNsense), Agile Software Development</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Projects</h2>
        <div className="project-card">
          <div className="project-card-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <img src={appIcon} alt="Clini Sync Logo" style={{ width: '40px', height: '40px' }} />
              <h3 style={{ margin: 0 }}>Clini Sync</h3>
            </div>
            <p className="project-tagline">Smart Clinic Management</p>
            <p>
              The all-in-one clinical management app for doctors and healthcare professionals to effortlessly manage patients, appointments, digital prescriptions, and billing.
            </p>
            <Link to="/clini-sync" className="btn">View Project Details</Link>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <p>Whether you want to discuss software development, smart home automation, or a potential project—I'd love to hear from you.</p>
        <div className="contact-links">
          <a href="mailto:encrustace@gmail.com" className="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            encrustace@gmail.com
          </a>
          <a href="https://github.com/encrust-ace" target="_blank" rel="noreferrer" className="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}