import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Layers3 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { getProjectBySlug } from "../data/projects";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="project-page">
        <main className="not-found-page">
          <div className="project-layout">
            <p className="section-kicker">Project not found</p>
            <h1>Такого проекта пока нет.</h1>
            <Link className="back-link" to="/">
              <ArrowLeft size={18} />
              <span>Вернуться на главную</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`project-page accent-${project.accent}`}>
      <main>
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />

        <div className="project-layout">
          <Link className="back-link" to="/">
            <ArrowLeft size={18} />
            <span>На главную</span>
          </Link>

          <motion.section
            className="project-hero"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="project-hero-copy">
              <span className="section-kicker">{project.category}</span>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>

            <div className="project-status-card">
              <span>Статус</span>
              <strong>{project.status}</strong>
              <small>Эта страница уже готова под будущий реальный контент.</small>
            </div>
          </motion.section>

          <section className="project-content-grid">
            <article className="project-panel">
              <div className="panel-title">
                <Layers3 size={18} />
                <h2>Что здесь будет</h2>
              </div>
              <ul>
                {project.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="project-panel">
              <div className="panel-title">
                <ArrowUpRight size={18} />
                <h2>Рамка кейса</h2>
              </div>
              <ul>
                {project.services.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </section>

          <section className="project-placeholder">
            <span className="section-kicker">Placeholder Ready</span>
            <h2>Сюда можно добавить визуалы, тексты, медиа и финальные ссылки.</h2>
            <p>
              Когда ты пришлешь реальные материалы по проекту, достаточно обновить
              объект в `src/data/projects.js` и, если нужно, расширить секции на
              этой странице.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
