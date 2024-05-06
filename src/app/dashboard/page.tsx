"use client";

import Header from "../components/header";
import SideBar from "../components/sidebar";
import ContentSidebar from "../components/contentSidebar";
import Post from "../components/post";

import Users from "../fakeData/users.json";
import Posts from "../fakeData/posts.json";
import { useState } from "react";
import PostCreator from "../components/postCreator";

export default function Dashboard() {
  const [posts] = useState<Post[]>(Posts);

  const [postContent, setPostContent] = useState("");

  return (
    <div>
      <Header />

      <div className="flex w-full min-h-[calc(100vh-80px)] justify-center">
        <SideBar />

        <div className="flex w-full scrollbar-hide h-[calc(100vh-80px)] overflow-y-auto max-w-[1200px] flex-col">
          <PostCreator
            onChange={(e) => setPostContent(e.target.value)}
            value={postContent}
          />

          {posts.map((post) => (
            <Post key={post.id} postData={post} />
          ))}
        </div>

        <ContentSidebar title="Usuários" content={Users} />
      </div>
    </div>
  );
}
