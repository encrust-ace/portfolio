import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div>
        <h3>Frontend & Web Technologies</h3>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>NextJS</li>
          <li>Redux</li>
          <li>HTML & CSS</li>
        </ul>
      </div>
      <div>
        <h3>Mobile & Backend</h3>
        <ul>
          <li>Flutter</li>
          <li>SQL</li>
        </ul>
      </div>
      <div>
        <h3>IoT, Hardware & Automation</h3>
        <ul>
          <li>IoT Application Development</li>
          <li>ESP32 & ESP8266 Microcontrollers</li>
          <li>Smart Home Infrastructure (Home Assistant, ESPHome, WLED)</li>
          <li>Sensor Integration & Telemetrics</li>
          <li>Custom Firmware Configuration</li>
        </ul>
      </div>
      <div>
        <h3>Systems, Networking & Methodologies</h3>
        <ul>
          <li>Linux Environments (Arch Linux, Fedora Silverblue)</li>
          <li>Docker Containerization</li>
          <li>Advanced Home Networking (OpenWrt, OPNsense)</li>
          <li>Agile Software Development</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
