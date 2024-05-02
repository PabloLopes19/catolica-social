import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { User } from "phosphor-react";

interface Props {
  name: string;
  username: string;
  photo?: string;
  to: Url;
}

export default function UserItem(props: Readonly<Props>) {
  return (
    <Link
      href={props.to}
      className="flex gap-3 items-center p-5 border-b-2 border-border"
    >
      <div className="flex items-center justify-center bg-border rounded-lg p-3">
        <User size={20} className="text-light" />
      </div>

      <div className="flex flex-col h-full justify-center">
        <h1 className="text-title font-bold">{props.name}</h1>
        <p className="text-light text-sm">@{props.username}</p>
      </div>
    </Link>
  );
}
