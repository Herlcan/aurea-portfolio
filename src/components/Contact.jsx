import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="section glass"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <h2>Contact Me</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>

        <button className="btn">Send Message</button>
      </form>
    </motion.section>
  );
}

export default Contact;