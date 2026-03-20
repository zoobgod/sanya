import { ArrowUpRight, Send } from "lucide-react";

export default function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="/">
        <span className="brand-mark">E</span>
        <span>ЕТНО Е</span>
      </a>

      <nav className="topnav" aria-label="Основная навигация">
        <a href="#about">Обо мне</a>
        <a href="#projects">Проекты</a>
        <a href="#contact">Контакт</a>
      </nav>

      <a
        className="topbar-cta"
        href="https://t.me/"
        target="_blank"
        rel="noreferrer"
      >
        <Send size={16} />
        <span>Telegram</span>
        <ArrowUpRight size={16} />
      </a>
    </header>
  );
}
