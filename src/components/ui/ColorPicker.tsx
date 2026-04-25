import { useState, type CSSProperties } from "react";
import { useAccentColor, ACCENT_PALETTES } from "../../hooks/useAccentColor";
import "./ColorPicker.css";

interface SwatchStyle extends CSSProperties {
  "--swatch": string;
  "--i": number;
}

interface SegmentStyle extends CSSProperties {
  "--seg-delay": string;
  "--seg-close-delay": string;
}

const CX = 12;
const CY = 12;
const R_OUTER = 10.5;
const R_HOLE = 3.5;
const TOTAL = ACCENT_PALETTES.length;

function pieSlicePath(index: number): string {
  const startAngle = (index / TOTAL) * 2 * Math.PI - Math.PI / 2;
  const endAngle = ((index + 1) / TOTAL) * 2 * Math.PI - Math.PI / 2;
  const ox1 = CX + R_OUTER * Math.cos(startAngle);
  const oy1 = CY + R_OUTER * Math.sin(startAngle);
  const ox2 = CX + R_OUTER * Math.cos(endAngle);
  const oy2 = CY + R_OUTER * Math.sin(endAngle);
  const ix1 = CX + R_HOLE * Math.cos(startAngle);
  const iy1 = CY + R_HOLE * Math.sin(startAngle);
  const ix2 = CX + R_HOLE * Math.cos(endAngle);
  const iy2 = CY + R_HOLE * Math.sin(endAngle);
  const large = 1 / TOTAL > 0.5 ? 1 : 0;
  const f = (n: number) => n.toFixed(3);
  return [
    `M ${f(ix1)} ${f(iy1)}`,
    `L ${f(ox1)} ${f(oy1)}`,
    `A ${R_OUTER} ${R_OUTER} 0 ${large} 1 ${f(ox2)} ${f(oy2)}`,
    `L ${f(ix2)} ${f(iy2)}`,
    `A ${R_HOLE} ${R_HOLE} 0 ${large} 0 ${f(ix1)} ${f(iy1)}`,
    "Z",
  ].join(" ");
}

export function ColorPicker({ direction = "right" }: { direction?: "left" | "right" }) {
  const { activeId, setAccent, palettes } = useAccentColor();
  const [open, setOpen] = useState(false);
  const expandLeft = direction === "left";

  return (
    <div className={`color-picker${expandLeft ? " color-picker--expand-left" : ""}`}>
      <button
        type="button"
        className={`color-wheel-btn${open ? " color-wheel-btn--open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close color picker" : "Choose accent color"}
        aria-expanded={open}
      >
        <svg
          className="color-wheel"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {ACCENT_PALETTES.map((palette, i) => (
            <path
              key={palette.id}
              d={pieSlicePath(i)}
              fill={palette.swatch}
              className="color-wheel__segment"
              style={{
                "--seg-delay": `${(expandLeft ? TOTAL - 1 - i : i) * 52}ms`,
                "--seg-close-delay": `${(expandLeft ? i : TOTAL - 1 - i) * 52}ms`,
              } as SegmentStyle}
            />
          ))}
          <circle cx={CX} cy={CY} r={R_OUTER} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={0.5} />
        </svg>
        <span className="color-wheel-close" aria-hidden="true">
          {expandLeft ? "\u2039" : "\u203A"}
        </span>
      </button>

      <div
        className={`color-picker__swatches${open ? " color-picker__swatches--open" : ""}`}
        role="group"
        aria-label="Accent color"
      >
        {palettes.map((palette, i) => (
          <button
            key={palette.id}
            type="button"
            className={`color-picker__swatch${activeId === palette.id ? " color-picker__swatch--active" : ""}`}
            style={{ "--swatch": palette.swatch, "--i": expandLeft ? palettes.length - 1 - i : i } as SwatchStyle}
            aria-label={`${palette.label} accent`}
            aria-pressed={activeId === palette.id}
            onClick={() => setAccent(palette)}
          />
        ))}
      </div>
    </div>
  );
}
