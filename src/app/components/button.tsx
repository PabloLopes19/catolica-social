import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
  theme?: "Primary" | "Secondary" | "Text";
  disabled?: boolean;
  onClick?: (e: any) => void;
}

export default function Button({
  label,
  theme,
  disabled,
  onClick,
}: Readonly<Props>) {
  function getStyle<String>() {
    if (!theme) return "buttonPrimary";

    if (theme === "Secondary") {
      return "buttonSecondary";
    }
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-full ${getStyle()}`}
    >
      {label ?? ""}
    </button>
  );
}
