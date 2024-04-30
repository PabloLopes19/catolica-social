import { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function LargeInput(props: Props) {
  return (
    <div className="relative">
      <textarea
        {...props}
        className="border-2 max-h-[300px] rounded-xl min-h-[150px] w-full text-title border-border p-4 transition-all duration-200 focus:border-primary outline-none"
      />
    </div>
  );
}
