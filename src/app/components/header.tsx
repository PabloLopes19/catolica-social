import Link from "next/link";

export default function Header() {
  return (
    <div className="flex border-b border-border items-center justify-center px-10 h-[80px]">
      <div className="flex h-full items-center w-full justify-between max-w-[1200px]">
        <div className="flex items-center gap-3">
          <h1 className="text-primary font-bold text-lg select-none hover:opacity-40 transition-all duration-200 cursor-pointer">
            CatólicaSC
          </h1>
          <div className="h-full w-[3px] bg-border" />
          <Link href="" className="text-light">
            aaa
          </Link>
        </div>
        <h1 className="text-title">Conta</h1>
      </div>
    </div>
  );
}
