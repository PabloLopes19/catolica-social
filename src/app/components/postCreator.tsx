import { TextareaHTMLAttributes } from "react";
import {
  FadersHorizontal,
  Image as ImageIcon,
  Users,
} from "@phosphor-icons/react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function PostCreator(props: Props) {
  return (
    <div className="flex flex-col p-10 gap-3">
      <div className="flex w-full items-center justify-between">
        <h1 className="font-semibold text-title text-lg">Olá, Charlie! 👋</h1>

        {`${props.value}`.length != 0 && (
          <span className="text-light text-sm select-none">
            {`${props.value}`.length}/300
          </span>
        )}
      </div>

      <textarea
        {...props}
        className="outline-none resize-none min-h-[120px] text-subtitle"
        placeholder="Algo em mente hoje?"
        maxLength={300}
      />

      <div className="flex w-full items-center justify-between">
        <div className="sm:flex hidden">
          <button className="settingsButton">
            <FadersHorizontal size={14} />
            Configurações
          </button>
        </div>

        <div className="flex gap-3 w-full items-center flex-wrap sm:justify-end justify-between">
          <div className="flex gap-3 items-center">
            <button className="littleButton">
              <Users size={24} weight="bold" />
            </button>

            <button className="littleButton">
              <ImageIcon size={24} weight="bold" />
            </button>
          </div>

          <button className="bg-primary disabled:brightness-125 px-5 disabled:cursor-not-allowed h-[50px] text-[#fff] font-bold rounded-2xl hover:brightness-90 text-sm transition-all duration-200">
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
}
