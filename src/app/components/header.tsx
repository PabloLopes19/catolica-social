import { List, MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";

interface Props {
  username?: string;
}

export default function Header({ username }: Props) {
  return (
    <div className="flex border-b-2 border-border items-center justify-center px-10 h-[80px]">
      <div className="flex h-full items-center w-full justify-between max-w-[1200px]">
        <div className="flex items-center gap-3">
          <h1 className="text-primary font-bold text-lg select-none hover:opacity-40 transition-all duration-200 cursor-pointer">
            CatólicaSC
          </h1>
          <div className="h-full w-[3px] bg-border" />
          <Link href="" className="text-light">
            @{username}
          </Link>
        </div>

        <div className="flex items-center text-light gap-5">
          <button className="flex gap-3 rounded-lg hover:opacity-40 transition-all duration-200">
            <MagnifyingGlass size={20} />
          </button>

          <button className="flex gap-3 rounded-lg hover:opacity-40 transition-all duration-200">
            <List size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
