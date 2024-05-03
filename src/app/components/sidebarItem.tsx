import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { Icon as PhosphorIcon } from "phosphor-react";

interface Props {
  icon?: PhosphorIcon;
  label: string;
  to?: Url;
  selected: boolean;
}

export default function SideBarItem(props: Readonly<Props>) {
  return (
    <Link
      href={props.to ?? "#"}
      className={`flex items-center gap-3 p-5 rounded-xl hover:opacity-40 transition-all duration-200 ${
        props.selected ? "text-primary" : "text-light"
      }`}
    >
      {props.icon && <props.icon size={32} />}

      <h1 className="text-lg">{props.label}</h1>
    </Link>
  );
}
