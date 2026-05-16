import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I'm <span>Rhancel Jess L. Aurea</span>
        </h1>

        <p>
          Frontend Developer • React Enthusiast • UI/UX Designer
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;