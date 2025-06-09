import { motion } from "framer-motion";
import "./ContactUs.css";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function ContactUs() {
  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-wrapper"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div className="contact-header" variants={itemVariants}>
          <h2>📬 Let's Connect</h2>
          <p>We're here to assist you. Reach out anytime!</p>
        </motion.div>

        <motion.div className="contact-actions" variants={itemVariants}>
          <a href="tel:+916372608302" className="contact-action call">
            📞 Call: +91 6372608302
          </a>
          <a
            href="https://wa.me/916372608302"
            className="contact-action whatsapp pulse"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Chat on WhatsApp
          </a>
        </motion.div>

        <motion.form
          className="contact-form"
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          variants={containerVariants}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            variants={itemVariants}
          />
          <motion.input
            type="email"
            name="_replyto"
            placeholder="Your Email"
            required
            variants={itemVariants}
          />
          <motion.input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            variants={itemVariants}
          />
          <motion.textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            variants={itemVariants}
          />
          <motion.button
            type="submit"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}

export default ContactUs;
