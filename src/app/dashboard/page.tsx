"use client";

import { useSearchParams } from "next/navigation";
import Header from "../components/header";
import SideBar from "../components/sidebar";
import ContentSidebar from "../components/contentSidebar";

import Users from "../fakeData/users.json";

export default function Dashboard() {
  const parmas = useSearchParams();

  const username = parmas.get("username");

  return (
    <div>
      <Header />

      <div className="flex w-full min-h-[calc(100vh-80px)] justify-center">
        <SideBar />
        <div className="flex w-full h-[calc(100vh-80px)] max-w-[1200px] flex-col"></div>
        <ContentSidebar title="Usuários" content={Users} />
      </div>
    </div>
  );
}
