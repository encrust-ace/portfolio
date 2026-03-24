import React from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <h3>Clini Sync - Smart Clinic Management</h3>
      <p>The all-in-one clinical management app for doctors and healthcare professionals to effortlessly manage patients, appointments, digital prescriptions, and billing.</p>
      <Link to="/clinisync">Learn More</Link>
    </section>
  );
};

export default Projects;
