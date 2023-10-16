"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { MdOutlineHome, MdSearch } from "react-icons/md";
import Box from "./Box";
import SideBarItem from "./SideBarItem";
import Library from "./Library";

export default ({ children }) => {
  const path = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: path !== "/search",
        href: "/",
        icon: MdOutlineHome,
      },
      {
        label: "Search",
        active: path === "/search",
        href: "/search",
        icon: MdSearch,
      },
    ],
    [path],
  );
  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 h-full w-[300px] bg-black p-2">
        <Box>
          <div className="flex flex-col px-5 py-4 gap-y-4">
            {routes.map((item) => (
              <SideBarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className=" overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 py-2 overflow-y-auto">{children}</main>
    </div>
  );
};
