"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const el = document.documentElement;
    const stored = localStorage.getItem("pf-theme") as "light" | "dark" | null;
    const initial =
      stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    el.setAttribute("data-theme", initial);
    setTheme(initial);
  }, []);

  const toggle = () => {
    const el = document.documentElement;
    const next = theme === "dark" ? "light" : "dark";
    el.setAttribute("data-theme", next);
    localStorage.setItem("pf-theme", next);
    setTheme(next);
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className={`${styles.toggleButton} ${theme === "dark" ? styles.active : ""}`}
      title={theme === "dark" ? "Switch to light" : "Switch to dark"}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
