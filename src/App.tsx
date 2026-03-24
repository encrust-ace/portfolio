import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import CliniSync from "./CliniSync";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">Imran Khan</Link>
        </div>
      </nav>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clini-sync" element={<CliniSync />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}