import "./ThemeToggle.css";
import { Eclipse } from "lucide-react";

export default function ThemeToggle() {
  const toggleTheme = () => {
    const current = document.documentElement.dataset.theme;
    const next = current === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  return (
    <span className="theme-toggle" onClick={toggleTheme}>
      <Eclipse className="icon" />
    </span>
  );
}
