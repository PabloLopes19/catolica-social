"use client";

import Header from "../components/header";
import SideBar from "../components/sidebar";
import ContentSidebar from "../components/contentSidebar";
import Post from "../components/post";

import Users from "../fakeData/users.json";
import Posts from "../fakeData/posts.json";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Dashboard() {
  const [posts] = useState<Post[]>(Posts);

  const parmas = useSearchParams();

  const username = parmas.get("username");

  return (
    <div>
      <Header />

      <div className="flex w-full min-h-[calc(100vh-80px)] justify-center">
        <SideBar />

        <div className="flex w-full scrollbar-hide h-[calc(100vh-80px)] overflow-y-auto max-w-[1200px] flex-col">
          <div className="flex w-full p-10 text-description">
            Olá{username ? `, ${username}` : "!"}
          </div>
          {posts.map((post) => (
            <Post key={post.id} postData={post} />
          ))}
        </div>

        <ContentSidebar title="Usuários" content={Users} />
      </div>
    </div>
  );
}
