"use client";
import { ArrowIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
  const homePage = usePathname() === "/";
  const dashboardSection = usePathname() === "/dashboard";
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUser({
        firstName: parsedData.firstName,
        lastName: parsedData.lastName,
      });
    }
  }, []);
  return (
    <div
      className={`py-[19.19px] max-sm:py-4 ${
        dashboardSection && "bg-custom-cream"
      }`}
    >
      <div className="max-w-[1172px] mx-auto px-4 flex items-center justify-between">
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
        <div className="flex cursor-pointer items-center gap-[7px]">
          <Image
            src={
              dashboardSection
                ? "/assets/images/webp/user-profile.webp"
                : "/assets/images/webp/user-profile.webp"
            }
            width={40}
            height={40}
            alt="user-profile"
            className="pointer-events-none"
          />
          {!homePage ? (
            <div className="flex flex-col gap-[1px]">
              <p className="font-medium max-md:text-sm leading-[100%]">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-sm text-black opacity-70 font-inter">Admin</p>
            </div>
          ) : (
            <div className="flex flex-col gap-[1px]">
              <p className="font-medium max-md:text-sm leading-[100%]">Jhon doe</p>
              <p className="text-sm text-black opacity-70 font-inter">Admin</p>
            </div>
          )}
          {!homePage && <ArrowIcon />}
        </div>
      </div>
    </div>
  );
};

export default Header;
