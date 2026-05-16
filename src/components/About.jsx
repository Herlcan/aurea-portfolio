import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="section glass"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>

      <p>
        I am a passionate developer who enjoys building modern,
        responsive, and user-friendly web applications using React.
      </p>
    </motion.section>
  );
}

export default About;