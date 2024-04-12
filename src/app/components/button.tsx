import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
  theme?: "Primary" | "Secondary" | "Text";
}

export default function Button({ label, theme }: Readonly<Props>) {
  function getStyle<String>() {
    if (!theme) return "buttonPrimary";

    if (theme === "Secondary") {
      return "buttonSecondary";
    }
  }

  return <button className={getStyle()}>{label ?? ""}</button>;
}
