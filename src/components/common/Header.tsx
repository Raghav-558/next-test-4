"use client";
import { ArrowIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="max-w-[1172px] mx-auto px-4">
      <div className="py-[19.19px] flex items-center justify-between max-sm:py-4">
        <div className="flex items-center gap-[10px]">
          <Link href={"/"}>
            <Image
              src="/assets/images/webp/page-logo.webp"
              width={144}
              height={39}
              alt="Page-Logo"
              className="pointer-events-none"
            />
          </Link>
          <div className="border-[1.5px] h-[19px] max-sm:hidden"></div>
          <p className="font-medium leading-[100%] pt-0.5 whitespace-nowrap max-sm:hidden">
            TMM Accelerator
          </p>
        </div>
        <div className="flex items-center gap-[7px]">
          <Image
            src="/assets/images/webp/user-profile.webp"
            width={40}
            height={40}
            alt="useer-profile"
            className="pointer-events-none"
          />
          <div className="flex items-center gap-[13px]">
            <div className="flex flex-col">
              <p className="font-medium leading-[100%]">Jhon doe</p>
              <p className="font-inter text-sm leading-[100%] opacity-70 pt-[1px]">
                Admin
              </p>
            </div>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
