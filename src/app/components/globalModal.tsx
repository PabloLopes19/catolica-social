"use client";

import * as Dialog from "@radix-ui/react-dialog";

import { ArrowLeft, X } from "@phosphor-icons/react";

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
  content?: React.ReactNode;
  goBackFunc?: (e: any) => void;
}

export default function GlobalModal({
  children,
  title,
  description,
  content,
  goBackFunc,
}: Readonly<Props>) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Overlay className="backdrop-blur-sm p-10 bg-fd-ghost-dark flex items-center justify-center fixed w-screen h-screen px-2 top-0 left-0">
        <Dialog.Content className="flex flex-1 flex-col p-7 gap-3 max-w-[600px] max-h-[600px] shadow-2xl rounded-xl bg-[#fff]">
          <div className="flex items-center w-full justify-between">
            <div className="group flex h-[32px]">
              {!!goBackFunc && (
                <button
                  onClick={goBackFunc}
                  className="hover:bg-[#ededed] sm:hidden rounded-md p-2 transition-all text-primary duration-200 group-hover:flex hidden"
                >
                  <ArrowLeft size={16} />
                </button>
              )}
              <h1
                className={`text-lg text-title transition-all duration-200 font-semibold select-none ${
                  !!goBackFunc && "group-hover:translate-x-1"
                }`}
              >
                {title ?? "CatólicaSC"}
              </h1>
            </div>

            <Dialog.Close className="hover:bg-[#ededed] rounded-md p-2 transition-all duration-200">
              <X size={18} />
            </Dialog.Close>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-light">{description}</p>

            {content}
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Root>
  );
}
