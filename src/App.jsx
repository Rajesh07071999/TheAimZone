import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HelpBot from "./pages/Bot/HelpBot";
import LandingPage from "./components/LandingPage";
import About from "./pages/About/About";
import ContactUs from "./pages/Contact/ContactUs";
import Features from "./pages/Features/Features";
import AboutMe from "./pages/AboutMe/AboutMe";
import Loader from "./components/Loader"; // 🆕
import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>

      <HelpBot />
      <Footer />
    </Router>
  );
}

export default App;
