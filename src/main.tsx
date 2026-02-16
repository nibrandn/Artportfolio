
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

// Add reduced-motion class on mobile or when user prefers reduced motion
const applyReducedMotionClass = () => {
  try {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMobile || prefersReduced) document.body.classList.add('reduced-motion');
    else document.body.classList.remove('reduced-motion');
  } catch (e) {
    // ignore in non-browser environments
  }
};

if (typeof window !== 'undefined') {
  applyReducedMotionClass();
  window.addEventListener('resize', applyReducedMotionClass);
  try {
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', applyReducedMotionClass);
  } catch (e) {
    // some browsers use deprecated API; ignore
  }
}

createRoot(document.getElementById("root")!).render(<App />);
