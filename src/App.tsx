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
  const [navState, setNavState] = useState<"top" | "floating">("top");

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

    const handleScroll = () => {
      if (window.scrollY < 50) {
        setNavState("top");
      } else {
        setNavState("floating");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger instantly on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter basename="/portfolio">
      <nav className={`navbar nav-${navState}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">IK.</Link>
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
      <main className="container" style={{ paddingTop: '6rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clini-sync" element={<CliniSync />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}