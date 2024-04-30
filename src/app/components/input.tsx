"use client";

import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeClosed } from "@phosphor-icons/react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: Props) {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="relative">
      <input
        className="border-2 rounded-xl w-full text-title border-border p-4 transition-all duration-200 focus:border-primary outline-none"
        {...props}
        type={
          props.type === "password"
            ? visible
              ? "text"
              : "password"
            : props.type
        }
      />

      {props.type === "password" && (
        <div className="absolute top-[32%] left-[92%] text-light hover:opacity-25 transition-all duration-200">
          <button onClick={() => setVisible(!visible)}>
            {visible ? <Eye size={18} /> : <EyeClosed size={18} />}
          </button>
        </div>
      )}
    </div>
  );
}
