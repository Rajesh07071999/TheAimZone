import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./LandingPage.css";
import About from "../pages/About/About";
import Features from "../pages/Features/Features";
import Photos from "../pages/Photos/photos";
import HeroSlideshow from "./HeroSlideShow";
import LocationGreeting from "./LocationGreeting";
import WeatherWidget from "./WeatherWidget";
import CameraCapture from "../pages/Camera/CameraCapture";
import SafeSearch from "./Safesearch";
import EbookReader from "../pages/Ebook/EbookReader";
function LandingPage() {
  return (
    <>

      <div className="top-bar d-flex align-items-center justify-content-between">
        <WeatherWidget />
        <LocationGreeting />
      </div>
      {/* <SafeSearch/> */}
{/* <CameraCapture/> */}
      <section className="landing d-flex align-items-center justify-content-center text-center text-white">
        <div className="container">
          {/* Typing Animated Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="display-4 fw-bold mb-3">
              <TypeAnimation
                sequence={[
                  "Welcome to TheAimZone",
                  1500,
                  "Empowering Ideas 💡",
                  1500,
                  "Smarter Tools for Everyone 🛠️",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="lead mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            A smart place for tools, ideas, and solutions — built for everyone.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="#features"
            className="btn btn-primary btn-lg shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Features
          </motion.a>

          {/* Scroll Down Icon */}
          <motion.div
            className="scroll-down-icon"
            initial={{ y: 0 }}
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <a href="#features">
              <i className="bi bi-chevron-double-down fs-2 text-white"></i>
            </a>
          </motion.div>
        </div>
        <div className="wave-container">
          <svg
            viewBox="0 0 1440 320"
            className="wave"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L40,74.7C80,85,160,107,240,122.7C320,139,400,149,480,160C560,171,640,181,720,160C800,139,880,85,960,80C1040,75,1120,117,1200,144C1280,171,1360,181,1400,186.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      {/* <EbookReader/> */}
      <HeroSlideshow />
      <Photos />
      <Features />
      <About />
    </>
  );
}

export default LandingPage;
