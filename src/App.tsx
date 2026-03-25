import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Home";
import CliniSync from "./CliniSync";
import "./index.css";
import appIcon from "./assets/clini-sync-hero.png";

type Theme = "system" | "light" | "dark";

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);

    const applyTheme = () => {
      const isDark =
        theme === "dark" ||
        (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

      document.documentElement.classList.toggle("dark", isDark);
      document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    };

    applyTheme();

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", applyTheme);
      return () => mediaQuery.removeEventListener("change", applyTheme);
    }
  }, [theme]);

  useEffect(() => {
    // Dynamically replace the default Vite favicon with the app icon
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = appIcon;
    document.title = "Imran Khan | Portfolio";

    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <BrowserRouter basename="/portfolio">
      {/* Invisible SVG filter for physical pixel tearing/warping */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none', zIndex: -1 }}>
        <filter id="blackhole-warp" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="2" result="noise">
            <animate attributeName="baseFrequency" values="0.008; 0.012; 0.008" dur="4s" repeatCount="indefinite" />
          </feTurbulence>
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" in="noise" result="intenseNoise" />
          <feDisplacementMap in="SourceGraphic" in2="intenseNoise" scale="120" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div 
        className="black-hole-warp" 
        style={{ backdropFilter: 'url(#blackhole-warp)', WebkitBackdropFilter: 'url(#blackhole-warp)' }}
      ></div>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">Imran Khan</Link>
          <select 
            value={theme} 
            onChange={(e) => setTheme(e.target.value as Theme)}
            className="theme-select"
          >
            <option value="system">🖥️ System</option>
            <option value="light">☀️ Light</option>
            <option value="dark">🌙 Dark</option>
          </select>
        </div>
      </nav>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clini-sync" element={<CliniSync />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}