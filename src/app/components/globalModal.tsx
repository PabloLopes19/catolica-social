"use client";

import * as Dialog from "@radix-ui/react-dialog";

import { X } from "@phosphor-icons/react";

interface Props {
  children: React.ReactNode;
  title?: String;
  description?: String;
  content?: React.ReactNode;
}

export default function GlobalModal({
  children,
  title,
  description,
  content,
}: Readonly<Props>) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Overlay className="backdrop-blur-sm p-10 bg-fd-ghost-dark flex items-center justify-center fixed w-screen h-screen px-2 top-0 left-0">
        <Dialog.Content className="flex flex-1 flex-col p-7 gap-3 max-w-[600px] max-h-[100vh-80px] shadow-2xl rounded-xl bg-[#fff]">
          <div className="flex items-center w-full justify-between">
            <h1 className="text-lg text-title font-semibold select-none">
              {title ?? "CatólicaSC"}
            </h1>

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
