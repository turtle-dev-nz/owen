import { useCallback, useEffect, useState } from "react";

export type ThemeMode = "dark" | "light";

const STORAGE_KEY = "theme-mode";
const THEME_EVENT = "theme-mode-change";

function applyTheme(mode: ThemeMode): void {
  document.documentElement.setAttribute("data-theme", mode);
}

function persistTheme(mode: ThemeMode): void {
  applyTheme(mode);
  window.localStorage.setItem(STORAGE_KEY, mode);
  window.dispatchEvent(new CustomEvent<ThemeMode>(THEME_EVENT, { detail: mode }));
}

function getInitialMode(): ThemeMode {
  if (typeof window === "undefined") {
    return "dark";
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "dark" || saved === "light") {
    applyTheme(saved);
    return saved;
  }

  applyTheme("dark");
  return "dark";
}

export function useThemeMode() {
  const [mode, setMode] = useState<ThemeMode>(() => getInitialMode());

  useEffect(() => {
    const onThemeChange = (event: Event): void => {
      const next = (event as CustomEvent<ThemeMode>).detail;
      if (next === "dark" || next === "light") {
        setMode(next);
      }
    };

    window.addEventListener(THEME_EVENT, onThemeChange);
    return () => {
      window.removeEventListener(THEME_EVENT, onThemeChange);
    };
  }, []);

  const setThemeMode = useCallback((next: ThemeMode): void => {
    persistTheme(next);
    setMode(next);
  }, []);

  const toggleThemeMode = useCallback((): void => {
    setMode((current) => {
      const next = current === "dark" ? "light" : "dark";
      persistTheme(next);
      return next;
    });
  }, []);

  return { mode, setThemeMode, toggleThemeMode };
}
