import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./About.css";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="about-section" id="about" ref={ref}>
      <div className="container text-center">

        <motion.h1
          className="about-title"
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          👋 About <span className="highlight">TheAimZone</span>
        </motion.h1>

        <motion.p
          className="about-desc"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          TheAimZone is a modern, smart hub of free tools, creativity, and
          resources for everyone. <br />
          No logins. No cost. Just value.
        </motion.p>

        <motion.div
          className="about-grid"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
          >
            🚀 Fast & Free Tools
          </motion.div>
          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
          >
            💡 Empowering Ideas
          </motion.div>
          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
          >
            📱 Mobile Friendly
          </motion.div>
          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
          >
            🛠️ For Everyone
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
