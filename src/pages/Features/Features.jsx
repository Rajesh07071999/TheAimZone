import { motion } from "framer-motion";
import {
  FaRocket,
  FaLockOpen,
  FaMobileAlt,
  FaTools,
  FaUserFriends,
  FaInfinity,
} from "react-icons/fa";
import "./Features.css";

const features = [
  {
    icon: <FaRocket />,
    title: "Instant Access",
    description:
      "Use any tool instantly. No sign-up or login needed — just click and go.",
  },
  {
    icon: <FaLockOpen />,
    title: "100% Free",
    description: "All tools and features are completely free. Forever.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Fully Responsive",
    description:
      "Enjoy a seamless experience across mobile, tablet, and desktop.",
  },
  {
    icon: <FaTools />,
    title: "Smart Tools",
    description:
      "Productivity-enhancing tools designed to solve real problems.",
  },
  {
    icon: <FaUserFriends />,
    title: "User Friendly",
    description: "Simple and clean UI, crafted for every type of user.",
  },
  {
    icon: <FaInfinity />,
    title: "Always Growing",
    description:
      "New tools, ideas, and updates are added regularly based on feedback.",
  },
];

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          🚀 Key Features of TheAimZone
        </motion.h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
             className="feature-card"
  key={index}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h5>{feature.title}</h5>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
