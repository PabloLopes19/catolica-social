import SideBarItem from "./sidebarItem";

import { House, MagnifyingGlass, Bell } from "phosphor-react";

export default function SideBar() {
  return (
    <div className="hidden lg:flex w-full h-[calc(100vh-80px)] p-5 border-r-2 border-border max-w-[300px]">
      <div className="flex flex-col gap-3 w-full h-full">
        <div>
          <SideBarItem label="Home" icon={House} selected={false} />
          <SideBarItem
            label="Explorar"
            icon={MagnifyingGlass}
            selected={false}
          />
          <SideBarItem label="Notificações" icon={Bell} selected={false} />
        </div>
      </div>
    </div>
  );
}