import { HTMLAttributes } from "react";
import { HashLoader } from "react-spinners";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
  theme?: "Primary" | "Secondary" | "Text";
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: any) => void;
}

export default function Button({
  label,
  theme,
  disabled,
  loading,
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
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <HashLoader color={"#fff"} size={18} />
        </div>
      ) : (
        label ?? ""
      )}
    </button>
  );
}
