// components/ThemeToggle/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // read initial theme on mount
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
      style={{
        height: 36, width: 36, borderRadius: 9999,
        border: "1px solid var(--pf-border, rgba(148,163,184,.2))",
        background: "var(--pf-surface, #fff)", color: "var(--pf-text, #111827)",
        display: "inline-flex", alignItems: "center", justifyContent: "center"
      }}
      title={theme === "dark" ? "Switch to light" : "Switch to dark"}
    >
      {theme === "dark" ? <Sun size={16}/> : <Moon size={16}/>}
    </button>
  );
}
