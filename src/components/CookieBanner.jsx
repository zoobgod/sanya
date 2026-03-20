import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Sparkles } from "lucide-react";

const STORAGE_KEY = "etnoe-cookie-accepted";

export default function CookieBanner() {
  const [isMounted, setIsMounted] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem(STORAGE_KEY) === "true";
    setIsAccepted(accepted);
    setIsMounted(true);
  }, []);

  function handleAccept() {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setIsAccepted(true);
  }

  return (
    <AnimatePresence>
      {isMounted && !isAccepted ? (
        <motion.aside
          className="cookie-banner"
          initial={{ opacity: 0, y: 24, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          aria-live="polite"
        >
          <div className="cookie-glow cookie-glow-orange" />
          <div className="cookie-glow cookie-glow-lime" />

          <div className="cookie-icon">
            <Cookie size={20} />
          </div>

          <div className="cookie-copy">
            <span className="cookie-label">
              <Sparkles size={14} />
              Cookie Accept
            </span>
            <strong>Мы сохраняем cookies, чтобы сайт ощущался быстро и красиво.</strong>
            <p>
              Никакой скучной плашки. Только чистый digital-виб и более плавный
              пользовательский опыт.
            </p>
          </div>

          <button className="cookie-button" type="button" onClick={handleAccept}>
            Принять вайб
          </button>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
