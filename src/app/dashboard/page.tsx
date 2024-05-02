"use client";

import { useSearchParams } from "next/navigation";
import Header from "../components/header";

export default function Dashboard() {
  const parmas = useSearchParams();

  const username = parmas.get("username");

  return (
    <div>
      <Header />
      <h1>Seja bem-vindo(a){!username ? "" : `, @${username}`}</h1>
    </div>
  );
}
