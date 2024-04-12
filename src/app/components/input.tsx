import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: Props) {
  return (
    <div>
      <input
        className="border-2 rounded-xl w-full text-title border-border p-4 transition-all duration-200 focus:border-primary outline-none"
        {...props}
      />
    </div>
  );
}
