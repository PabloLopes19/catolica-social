"use client";

import ProfileData from "./profileData";
import Avatar from "./avatar";
import { useState } from "react";

interface Props {
  user: User;
}

export default function ProfileContainer({ user }: Readonly<Props>) {
  const [following, setFollowing] = useState(false);

  return (
    <div className="flex relative flex-col gap-10">
      {/* <Image loader={ /> */}

      <div className="flex w-full h-[200px] bg-primary"></div>

      <div className="flex gap-3 w-full top-[33%] px-10 items-end absolute">
        <div className="flex gap-3 items-end">
          <Avatar />
          <div className="flex flex-col h-full py-4 justify-end">
            <h1 className="text-lg font-semibold text-title">{user.name}</h1>
            <span className="text-sm text-light">@{user.username}</span>
          </div>

          <div className="py-[20px]">
            <button
              onClick={() => setFollowing(!following)}
              className={`text-sm border-[2px] hover:opacity-40 ${
                following ? "bg-primary text-[#fff]" : "text-primary"
              } transition-all duration-200 border-primary px-3 py-1 rounded-xl font-semibold`}
            >
              {following ? "Seguindo" : "Seguir"}
            </button>
          </div>
        </div>

        <div className="flex gap-3 items-center flex-wrap justify-end w-full">
          <div className="flex gap-5 justify-center items-center">
            <ProfileData label="Seguindo" data="24" />
            <ProfileData label="Seguidores" data={"23"} />
            <ProfileData label="Cursando" data="Eng. Software" />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between gap-3 pb-[40px] px-[40px] pt-[75px]">
        <span className="text-lg text-subtitle">{user.bio}</span>
      </div>
    </div>
  );
}
