"use client";
import { HighComplexityIcon, MachinesIcon, PairsIcon } from "@/utils/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const [imageName, setImageName] = useState("");
  useEffect(() => {
    setImageName(localStorage.getItem("fileName") as any);
  });
  return (
    <div className="bg-custom-cream">
      <div className="max-w-[1172px] mx-auto px-4 pt-[24.3px]">
        <div className="flex items-center justify-between pb-[23.93px] flex-wrap">
          <p className="font-semibold text-2xl leading-[100%] text-custom-gray">
            {imageName}
          </p>
          <button
            onClick={() => router.push("/uploadImage")}
            className="font-medium leading-[100%] text-sm border border-custom-gray border-opacity-50 h-[49px] w-[193px] rounded-[6px] uppercase tracking-[-1%] hover:bg-gray-200 transition-all duration-300"
          >
            Upload more files
          </button>
        </div>
        <div className="flex items-center justify-between flex-wrap">
          <div className="max-w-[558px] w-full h-[98px] max-xl: flex items-center justify-between bg-white py-[19px] px-4 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="size-[60px] rounded-full flex items-center justify-center bg-custom-off-white">
                <HighComplexityIcon />
              </div>
              <p className="font-medium text-xl leading-[100%] tracking-[-1%]">
                Complexity of the code
              </p>
            </div>
            <button className="w-[69px] h-[33px] border border-custom-red text-custom-red bg-custom-off-white rounded-[49px] uppercase">
              High
            </button>
          </div>
          <div className="bg-white max-w-[267px] w-full max-xl: flex items-center gap-4 py-[19px] px-4 rounded-lg">
            <div className="size-[60px] bg-custom-off-white flex items-center justify-center rounded-full">
              <MachinesIcon />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium text-[28px] leading-[100%]">-</p>
              <p className="font-inter text-sm leading-[100%] tracking-[-1%]">
                No of Machines
              </p>
            </div>
          </div>
          <div className="bg-white max-w-[267px] w-full max-xl: flex items-center gap-4 py-[19px] px-4 rounded-lg">
            <div className="size-[60px] bg-custom-off-white flex items-center justify-center rounded-full">
              <PairsIcon />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium text-[28px] leading-[100%]">-</p>
              <p className="font-inter text-sm leading-[100%] tracking-[-1%]">
                No of Pairs
              </p>
            </div>
          </div>
        </div>
              <div>
                  
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
