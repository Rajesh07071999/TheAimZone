import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src*="translate.google.com"]'
    );
    if (existingScript) return; // Prevent duplicate loading

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      if (!document.querySelector(".goog-te-combo")) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-primary fs-4" to="/">
          TheAimZone
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end align-items-center"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link fw-semibold" +
                  (isActive ? " text-primary active" : " text-dark")
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link fw-semibold" +
                  (isActive ? " text-primary active" : " text-dark")
                }
                to="/features"
              >
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link fw-semibold" +
                  (isActive ? " text-primary active" : " text-dark")
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link fw-semibold" +
                  (isActive ? " text-primary active" : " text-dark")
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link fw-semibold" +
                  (isActive ? " text-primary active" : " text-dark")
                }
                to="/aboutme"
              >
                Meet the Creator
              </NavLink>
            </li>
            <li className="nav-item translate-item">
              <div id="google_translate_element"></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
