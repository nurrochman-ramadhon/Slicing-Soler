"use client"
import Image from "next/image";
import phoneLogo from "../../../public/assets/section 1/headset.png";
import { RxHamburgerMenu } from "react-icons/rx";
import ButtonThemeNavbar from "./buttonNavbar";
import { useState } from "react";
import Sidebar from "./sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const onHandleHamburger = () => {
    return setIsOpen(true);
  };
  const onHandleCloseSidebar = () => {
    return setIsOpen(false)
  }
  return (
    <div className=" flex justify-between items-center px-4 md:px-[80px] md:py-[24px]">
      <div className="flex gap-4 items-center">
        <p className=" font-bold text-[32px] mr-[22px]">soller</p>
        <div className="gap-4 items-center hidden md:flex">
          <p className=" font-medium text-base">Products</p>
          <p className=" font-medium text-base">Solutions</p>
          <p className=" font-medium text-base">Services</p>
          <p className=" font-medium text-base">Configures</p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-[16px]">
        <Image src={phoneLogo} alt="phone" className="w-[24px] h-[24px]" />
        <p className=" text-text1">555 818 282</p>
        <ButtonThemeNavbar title={"Request a quote"} fontWeight={`500`} />
      </div>
      <div
        className="md:hidden flex text-[32px] bg-button1 cursor-pointer rounded-full p-3"
        onClick={onHandleHamburger}
      >
        <RxHamburgerMenu />
      </div>
      {isOpen?<Sidebar onHandleCloseSidebar={onHandleCloseSidebar}/>:""}
    </div>
  );
}
