import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CookieBanner from "./components/CookieBanner";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
      <CookieBanner />
    </>
  );
}
