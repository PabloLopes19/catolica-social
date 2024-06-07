"use client";

import ContentSidebar from "@/app/components/contentSidebar";
import Header from "@/app/components/header";
import PostCreator from "@/app/components/postCreator";
import SideBar from "@/app/components/sidebar";
import { useParams } from "next/navigation";

import Users from "../../fakeData/users.json";
import Posts from "../../fakeData/posts.json";
import Post from "@/app/components/post";
import ProfileContainer from "@/app/components/profileContainer";

export default function ProfilePage() {
  const params = useParams();

  const slug = params.slug;

  return (
    <div>
      <Header username={slug as string} />

      <div className="flex w-full min-h-[calc(100vh-80px)] justify-center">
        <SideBar />

        <div className="flex w-full scrollbar-hide h-[calc(100vh-80px)] overflow-y-auto max-w-[1200px] flex-col">
          <ProfileContainer
            user={Users.find((user) => user.username === slug) as User}
          />

          {Posts.map((post) => (
            <Post key={post.id} postData={post} />
          ))}
        </div>

        <ContentSidebar title="Usuários" content={Users} />
      </div>
    </div>
  );
}
