export const projects = [
  {
    slug: "signal-burst",
    title: "Signal Burst",
    category: "Контент-система",
    year: "2026",
    status: "Soon",
    description:
      "Экспрессивная серия digital-форматов для запуска новой визуальной волны. Плейсхолдер под будущий кейс с реальными метриками и материалами.",
    accent: "sunset",
    services: ["Creative Direction", "Motion Moodboard", "Campaign Identity"],
    deliverables: [
      "Кейс-пейдж с визуалами",
      "Описание процесса и результата",
      "Встроенные видео / рилсы / шоты",
    ],
  },
  {
    slug: "telegram-heat",
    title: "Telegram Heat",
    category: "Авторский канал",
    year: "2026",
    status: "Updating",
    description:
      "Плейсхолдер для проекта, посвященного упаковке Telegram-канала, рубрикам, визуальному языку и контент-механикам роста.",
    accent: "lime",
    services: ["Channel Strategy", "Visual System", "Content Experiments"],
    deliverables: [
      "Структура рубрик",
      "Контентные постеры и шаблоны",
      "Динамика роста и инсайты",
    ],
  },
  {
    slug: "neon-ritual",
    title: "Neon Ritual",
    category: "Креативная коллаборация",
    year: "2026",
    status: "Draft",
    description:
      "Заглушка под коллаборационный проект с мощной айдентикой, digital-артом и живой эмоциональной подачей.",
    accent: "sky",
    services: ["Art Direction", "Launch Visuals", "Narrative Concept"],
    deliverables: [
      "Описание коллаборации",
      "Набор ключевых артов",
      "Блок с отзывами / результатом",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
