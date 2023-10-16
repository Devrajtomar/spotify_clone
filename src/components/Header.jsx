"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Icon from "@/components/Icon";
import Button from "./Button";

const Header = ({ children, className }) => {
  const router = useRouter();

  const handleLogOut = () => {
    console.log("Loged Out");
  };

  return (
    <div
      className={twMerge(
        "h-fit bg-gradient-to-b from-emerald-800 p-6",
        className,
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <Icon className="bg-black" onClick={() => router.back()}>
            <RxCaretLeft size={35} className="text-white" />
          </Icon>
          <Icon className="bg-black" onClick={() => router.forward()}>
            <RxCaretRight size={35} className="text-white" />
          </Icon>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <Icon className="bg-white p-2" onClick={() => router.push("/")}>
            <HiHome size={20} className="text-black" />
          </Icon>
          <Icon className="bg-white p-2" onClick={() => router.push("/search")}>
            <BiSearch size={20} className="text-black" />
          </Icon>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button
                onClick={() => {}}
                className="bg-transparent font-medium text-neutral-300"
              >
                Sign up
              </Button>
            </div>
            <div>
              <Button onClick={() => {}} className="bg-white px-6 py-2 ">
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
