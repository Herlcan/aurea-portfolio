import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern animated portfolio using React.",
    },
    {
      title: "Task Manager",
      description: "Task management app with local storage.",
    },
    {
      title: "Weather App",
      description: "Weather forecast using external API.",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card glass"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <button className="btn">View Project</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;