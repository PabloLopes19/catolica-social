import Link from "next/link";
import { User } from "phosphor-react";

interface Props {
  user: User;
}

export default function PostOwner({ user }: Readonly<Props>) {
  return (
    <Link
      href={`/user/${user.username}`}
      className="flex gap-3 hover:opacity-40 duration-200 transition-all"
    >
      <div className="w-[50px] bg-border text-light aspect-square flex items-center justify-center rounded-lg">
        <User size={24} />
      </div>

      <div className="flex flex-col h-full justify-center">
        <h1 className="text-title font-bold">{user.name}</h1>
        <p className="text-light text-sm">@{user.username}</p>
      </div>
    </Link>
  );
}
