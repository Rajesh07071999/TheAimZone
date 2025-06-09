import { motion } from "framer-motion";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="aboutme-section" id="aboutme">
      <div className="aboutme-container">
        <motion.div
          className="aboutme-text"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2>👋 Meet the Creator</h2>
          <p>
            Hey! I'm <strong>Rajesh</strong>, the brain behind <strong>TheAimZone</strong>. I’m passionate about
            simplifying digital life with powerful, free, and intuitive tools. This platform is
            built with ❤️ to help creators, students, and professionals like you.
          </p>

          <div className="aboutme-buttons">
            <a
              href="/YourResume.pdf" // replace with real path
              download
              className="resume-btn"
            >
              📄 Download Resume
            </a>

            <a
              href="https://yourwebresume.com" // replace with your web resume URL
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn outline"
            >
              🌐 View Web Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="aboutme-image"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQHAhyNf3qaQnQ/profile-displayphoto-shrink_200_200/B56ZdBUmO.HoAY-/0/1749147610042?e=1754524800&v=beta&t=Cyc51KblOTGsN6jccut2Giuec0pAei8nOrs2xaFVGVo"
            alt="Rajesh"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
