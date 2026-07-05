import { useCallback, useEffect, useState } from "react";

export type ThemeMode = "dark" | "light";

const STORAGE_KEY = "theme-mode";
const THEME_EVENT = "theme-mode-change";
const THEME_DEBUG_KEY = "theme-debug";

function isThemeDebugEnabled(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  return window.localStorage.getItem(THEME_DEBUG_KEY) === "1";
}

function themeDebugLog(message: string, payload?: Record<string, unknown>): void {
  if (!isThemeDebugEnabled()) {
    return;
  }

  const timestamp = new Date().toISOString();
  if (payload) {
    console.log(`[theme] ${timestamp} ${message}`, payload);
    return;
  }
  console.log(`[theme] ${timestamp} ${message}`);
}

function applyTheme(mode: ThemeMode): void {
  document.documentElement.setAttribute("data-theme", mode);
}

function persistTheme(mode: ThemeMode): void {
  themeDebugLog("persistTheme:start", {
    nextMode: mode,
    currentAttr: document.documentElement.getAttribute("data-theme"),
    scrollY: window.scrollY,
  });

  applyTheme(mode);
  window.localStorage.setItem(STORAGE_KEY, mode);
  window.dispatchEvent(new CustomEvent<ThemeMode>(THEME_EVENT, { detail: mode }));

  themeDebugLog("persistTheme:end", {
    resultingAttr: document.documentElement.getAttribute("data-theme"),
    storedMode: window.localStorage.getItem(STORAGE_KEY),
  });
}

function getInitialMode(): ThemeMode {
  if (typeof window === "undefined") {
    return "dark";
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "dark" || saved === "light") {
    applyTheme(saved);
    themeDebugLog("getInitialMode:from-storage", { savedMode: saved });
    return saved;
  }

  applyTheme("dark");
  themeDebugLog("getInitialMode:default", { savedMode: saved });
  return "dark";
}

export function useThemeMode() {
  const [mode, setMode] = useState<ThemeMode>(() => getInitialMode());

  useEffect(() => {
    const onThemeChange = (event: Event): void => {
      const next = (event as CustomEvent<ThemeMode>).detail;
      themeDebugLog("theme-event:received", {
        detail: next,
        attrBeforeSetState: document.documentElement.getAttribute("data-theme"),
      });
      if (next === "dark" || next === "light") {
        setMode(next);
      }
    };

    window.addEventListener(THEME_EVENT, onThemeChange);
    return () => {
      window.removeEventListener(THEME_EVENT, onThemeChange);
    };
  }, []);

  const setThemeMode = useCallback(
    (next: ThemeMode): void => {
      themeDebugLog("setThemeMode:called", {
        nextMode: next,
        stateBefore: mode,
        attrBefore: document.documentElement.getAttribute("data-theme"),
      });

      const currentAttr = document.documentElement.getAttribute("data-theme");
      if (currentAttr === next) {
        themeDebugLog("setThemeMode:noop", { nextMode: next, currentAttr });
        return;
      }

      persistTheme(next);
    },
    [mode],
  );

  const toggleThemeMode = useCallback((): void => {
    const attr = document.documentElement.getAttribute("data-theme");
    const current = attr === "dark" || attr === "light" ? attr : mode;
    const next = current === "dark" ? "light" : "dark";

    themeDebugLog("toggleThemeMode:computed", {
      currentMode: current,
      nextMode: next,
      stateMode: mode,
      attrMode: attr,
    });

    persistTheme(next);
  }, [mode]);

  return { mode, setThemeMode, toggleThemeMode };
}
