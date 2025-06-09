import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./HeroSlideshow.css";

const quotes = [
  "Creativity takes courage.",
  "Inspiration exists, but it has to find you working.",
  "Design is intelligence made visible.",
  "Art is not what you see, but what you make others see.",
];

const images = [
  "https://img.freepik.com/free-photo/work-team-digital-art_23-2151492141.jpg?ga=GA1.1.556151367.1749370527&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/tech-worker_1022347-1506.jpg?ga=GA1.1.556151367.1749370527&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/programmer-night_23-2151948231.jpg?ga=GA1.1.556151367.1749370527&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/female-programmer-coding-night_23-2151940453.jpg?ga=GA1.1.556151367.1749370527&semt=ais_hybrid&w=740",
];

const HeroSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-slideshow"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
      id="inspire"
    >
      <motion.div
        className="quote-overlay"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          key={quoteIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {quotes[quoteIndex]}
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default HeroSlideshow;
