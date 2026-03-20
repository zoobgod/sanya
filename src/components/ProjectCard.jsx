import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`project-card accent-${project.accent}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <div className="project-meta">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>

      <div className="project-copy">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="project-tags">
        {project.services.map((service) => (
          <span key={service}>{service}</span>
        ))}
      </div>

      <Link className="project-link" to={`/projects/${project.slug}`}>
        <span>Открыть страницу проекта</span>
        <ArrowUpRight size={18} />
      </Link>
    </motion.article>
  );
}
