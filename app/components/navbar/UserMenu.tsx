"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return (
    <div className="relative ">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {
            console.log("hello");
          }}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu size={19} />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vh] mx:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col gap-3 cursor-pointer">
            <MenuItem
              onClick={() => {
                console.log("object");
              }}
              label="login"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
