import type { CSSProperties } from "react";
import { useAccentColor } from "../../hooks/useAccentColor";
import "./ColorPicker.css";

interface SwatchStyle extends CSSProperties {
  "--swatch": string;
}

export function ColorPicker() {
  const { activeId, setAccent, palettes } = useAccentColor();

  return (
    <div className="color-picker" role="group" aria-label="Accent color">
      {palettes.map((palette) => (
        <button
          key={palette.id}
          type="button"
          className={`color-picker__swatch${activeId === palette.id ? " color-picker__swatch--active" : ""}`}
          style={{ "--swatch": palette.swatch } as SwatchStyle}
          aria-label={`${palette.label} accent`}
          aria-pressed={activeId === palette.id}
          onClick={() => setAccent(palette)}
        />
      ))}
    </div>
  );
}
