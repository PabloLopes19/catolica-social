"use client";

import { Export, Heart } from "phosphor-react";
import PostOwner from "./postOwner";
import { useState } from "react";

interface Props {
  postData: Post;
}

export default function Post(props: Readonly<Props>) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full flex flex-col border-t-2 border-border">
      <div className="flex flex-col gap-3 p-10">
        <PostOwner user={props.postData.owner} />

        <div className="flex flex-col gap-3 justify-between">
          <p className="text-lg text-subtitle">{props.postData.text}</p>
          <p className="text-sm text-light">19/02/2003 às 10:30</p>
        </div>
      </div>

      <div className="flex">
        <button
          onClick={() => setLiked(!liked)}
          className={`w-full group flex items-center gap-3 justify-center h-[80px] hover:opacity-40 transition-all duration-200 ${
            liked ? "text-primary fill-rose-950" : "text-light"
          }`}
        >
          <Heart
            size={24}
            weight={liked ? "fill" : "light"}
            className={`transition-all duration-200`}
          />
          <h1 className="group-hover:flex hidden">
            {liked ? props.postData.likes + 1 : props.postData.likes}
          </h1>
        </button>
        <button className="w-full flex items-center justify-center h-[80px] hover:opacity-40 transition-all duration-200 text-light">
          <Export size={24} />
        </button>
      </div>
    </div>
  );
}
