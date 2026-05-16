import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaGitAlt />, name: "Git" },
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card glass"
            key={index}
            whileHover={{ scale: 1.08 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;