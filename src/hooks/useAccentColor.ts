import { useState, useCallback } from "react";

export interface AccentVars {
  "--color-accent": string;
  "--color-accent-hover": string;
  "--color-accent-light": string;
  "--color-accent-glow": string;
  "--shadow-accent": string;
}

export interface AccentPalette {
  id: string;
  label: string;
  swatch: string;
  vars: AccentVars;
}

export const ACCENT_PALETTES: AccentPalette[] = [
  {
    id: "red",
    label: "Red",
    swatch: "#ef4444",
    vars: {
      "--color-accent": "#ef4444",
      "--color-accent-hover": "#dc2626",
      "--color-accent-light": "#f87171",
      "--color-accent-glow": "rgba(239, 68, 68, 0.12)",
      "--shadow-accent": "0 0 24px rgba(239, 68, 68, 0.25)",
    },
  },
  {
    id: "orange",
    label: "Orange",
    swatch: "#f97316",
    vars: {
      "--color-accent": "#f97316",
      "--color-accent-hover": "#ea580c",
      "--color-accent-light": "#fb923c",
      "--color-accent-glow": "rgba(249, 115, 22, 0.12)",
      "--shadow-accent": "0 0 24px rgba(249, 115, 22, 0.25)",
    },
  },
  {
    id: "yellow",
    label: "Yellow",
    swatch: "#eab308",
    vars: {
      "--color-accent": "#eab308",
      "--color-accent-hover": "#ca8a04",
      "--color-accent-light": "#facc15",
      "--color-accent-glow": "rgba(234, 179, 8, 0.12)",
      "--shadow-accent": "0 0 24px rgba(234, 179, 8, 0.25)",
    },
  },
  {
    id: "green",
    label: "Green",
    swatch: "#10b981",
    vars: {
      "--color-accent": "#10b981",
      "--color-accent-hover": "#059669",
      "--color-accent-light": "#34d399",
      "--color-accent-glow": "rgba(16, 185, 129, 0.12)",
      "--shadow-accent": "0 0 24px rgba(16, 185, 129, 0.25)",
    },
  },

  {
    id: "blue",
    label: "Blue",
    swatch: "#3b82f6",
    vars: {
      "--color-accent": "#3b82f6",
      "--color-accent-hover": "#2563eb",
      "--color-accent-light": "#60a5fa",
      "--color-accent-glow": "rgba(59, 130, 246, 0.12)",
      "--shadow-accent": "0 0 24px rgba(59, 130, 246, 0.25)",
    },
  },
  {
    id: "indigo",
    label: "Indigo",
    swatch: "#6366f1",
    vars: {
      "--color-accent": "#6366f1",
      "--color-accent-hover": "#4f46e5",
      "--color-accent-light": "#818cf8",
      "--color-accent-glow": "rgba(99, 102, 241, 0.12)",
      "--shadow-accent": "0 0 24px rgba(99, 102, 241, 0.25)",
    },
  },
  {
    id: "purple",
    label: "Purple",
    swatch: "#a855f7",
    vars: {
      "--color-accent": "#a855f7",
      "--color-accent-hover": "#9333ea",
      "--color-accent-light": "#c084fc",
      "--color-accent-glow": "rgba(168, 85, 247, 0.12)",
      "--shadow-accent": "0 0 24px rgba(168, 85, 247, 0.25)",
    },
  },
];

function applyPalette(palette: AccentPalette): void {
  const root = document.documentElement;
  for (const [prop, value] of Object.entries(palette.vars)) {
    root.style.setProperty(prop, value);
  }
}

export function useAccentColor() {
  const defaultPalette = ACCENT_PALETTES.find((p) => p.id === "orange") ?? ACCENT_PALETTES[0];

  const [activeId, setActiveId] = useState<string>(() => {
    applyPalette(defaultPalette);
    return defaultPalette.id;
  });

  const setAccent = useCallback((palette: AccentPalette): void => {
    applyPalette(palette);
    setActiveId(palette.id);
  }, []);

  return { activeId, setAccent, palettes: ACCENT_PALETTES };
}
