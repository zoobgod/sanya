import { motion } from "framer-motion";
import {
  ArrowRight,
  AudioLines,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { TELEGRAM_URL } from "../data/site";

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HomePage() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <Header />

      <main>
        <section className="hero section">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            <div className="eyebrow">
              <Sparkles size={16} />
              <span>Digital Creator • Visual Energy • Telegram Voice</span>
            </div>

            <h1>
              ЕТНО Е создает
              <span>красочные digital-миры</span>
              с быстрым ритмом и точной подачей.
            </h1>

            <p className="hero-text">
              Портфолио для автора, который собирает визуал, настроение и
              контент в один живой поток. Сайт подчеркивает динамику, вкус и
              яркий характер бренда.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                <span>Смотреть проекты</span>
                <ArrowRight size={18} />
              </a>
              <a
                className="button button-secondary"
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
              >
                <span>Перейти в Telegram</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-stage"
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="stage-card main-stage">
              <span className="stage-label">ETNO E</span>
              <h2>bold visuals / fast ideas / human signal</h2>
            </div>

            <motion.div
              className="stage-card floating-card card-orange"
              animate={{ y: [0, -16, 0], rotate: [4, 1, 4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap size={18} />
              <span>Energy-driven storytelling</span>
            </motion.div>

            <motion.div
              className="stage-card floating-card card-green"
              animate={{ y: [0, 14, 0], rotate: [-3, 1, -3] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <AudioLines size={18} />
              <span>Telegram-native presence</span>
            </motion.div>

            <motion.div
              className="stage-card floating-card card-blue"
              animate={{ y: [0, -12, 0], rotate: [3, -2, 3] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Star size={18} />
              <span>Color-first creative direction</span>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          id="about"
          className="about section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
        >
          <div className="section-heading">
            <span className="section-kicker">О creator</span>
            <h2>Минимализм в структуре, максимум энергии в ощущении.</h2>
          </div>

          <div className="about-grid">
            <article className="info-panel">
              <p>
                ЕТНО Е работает на стыке контента, визуального кода и digital
                харизмы. Здесь важны настроение, ритм и узнаваемая подача.
              </p>
            </article>

            <article className="info-panel stats-panel">
              <div>
                <strong>01</strong>
                <span>Яркая авторская эстетика</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Живой Telegram-формат</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Креативные проекты с характером</span>
              </div>
            </article>
          </div>
        </motion.section>

        <section id="projects" className="projects section">
          <div className="section-heading">
            <span className="section-kicker">Selected Projects</span>
            <h2>Каждый кейс открывается на своей странице.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        <motion.section
          id="contact"
          className="contact section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
        >
          <div className="contact-card">
            <div>
              <span className="section-kicker">Let&apos;s connect</span>
              <h2>Telegram может быть главным входом в бренд.</h2>
            </div>
            <p>
              Пока ссылки и проекты стоят как плейсхолдеры. Когда дашь реальные
              материалы, сюда легко встроить кейсы, медиа, метрики и живые
              публикации.
            </p>
            <a
              className="button button-primary"
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span>Открыть Telegram</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
