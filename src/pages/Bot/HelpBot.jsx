import { useState } from "react";
import "./HelpBot.css";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is TheAimZone?",
    answer:
      "TheAimZone is a smart platform offering free tools, ideas, and solutions to boost your productivity and creativity.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Absolutely. All features on TheAimZone are completely free and accessible without any login or subscription.",
  },
  {
    question: "How do I use tools?",
    answer:
      "Just scroll down the homepage, click on any tool or section, and start using it instantly. No sign-up required!",
  },
  {
    question: "Can I suggest a new feature?",
    answer:
      "Yes! Scroll to the bottom or use the chatbot's Contact button to send your idea. We welcome all suggestions!",
  },
  {
    question: "Who is this site for?",
    answer:
      "TheAimZone is for everyone — students, professionals, developers, creators, and anyone looking to boost their workflow.",
  },
  {
    question: "Does TheAimZone track my data?",
    answer:
      "Nope! We respect your privacy. TheAimZone does not collect or store any personal data unless you contact us.",
  },
  {
    question: "How often are tools updated?",
    answer:
      "We regularly update and add new features. Follow us or check back often for fresh tools and improvements!",
  },
  
];

function HelpBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleQuestionClick = (faq) => {
    if (!usedQuestions.includes(faq.question)) {
      setChat([...chat, faq]);
      setUsedQuestions([...usedQuestions, faq.question]);
    }
  };

  return (
    <div className="helpbot-widget">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="chat-header">
              <span>TheAimZone HelpBot</span>
              <button onClick={() => setIsOpen(false)}>&times;</button>
            </div>

            <div className="chat-body">
              {chat.length === 0 && (
                <p className="text-muted">Hi! How can I help you today?</p>
              )}
              {chat.map((item, index) => (
                <div key={index} className="chat-entry">
                  <div className="chat-question">🙋‍♂️ {item.question}</div>
                  <div className="chat-answer">🤖 {item.answer}</div>
                </div>
              ))}

              {showForm && (
                <form
                  action="https://formspree.io/f/xrbkedez"
                  method="POST"
                  className="contact-form"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone (optional)"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                  ></textarea>
                  <button type="submit">Send Message</button>
                </form>
              )}
            </div>

            <div className="chat-footer">
              {faqData.map((faq, i) => (
                <button
                  key={i}
                  onClick={() => handleQuestionClick(faq)}
                  className="faq-btn"
                  disabled={usedQuestions.includes(faq.question)}
                >
                  {faq.question}
                </button>
              ))}
              <button
                className="contact-btn glow-button"
                onClick={() => setShowForm(!showForm)}
              >
              <span role="img" aria-label="mail">📞</span> Contact Us

              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
      >
        💬
      </motion.button>
    </div>
  );
}

export default HelpBotWidget;
