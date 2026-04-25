import type { ReactNode } from "react";
import "./Tag.css";

interface TagProps {
  children: ReactNode;
}

export function Tag({ children }: TagProps) {
  return <span className="tag">{children}</span>;
}
