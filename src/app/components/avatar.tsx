import { User } from "phosphor-react";

export default function Avatar() {
  return (
    <div className="relative group hover:bg-[#a5a5a5] cursor-pointer transition-all duration-200 text-light flex items-center justify-center w-[150px] h-[150px] aspect-square bg-[#fff6f6] rounded-3xl border-4 border-border">
      <User size={32} />

      <span className="hidden font-semibold group-hover:flex transition-all duration-100 text-base absolute text-[#fff]">
        Ver foto
      </span>
    </div>
  );
}
