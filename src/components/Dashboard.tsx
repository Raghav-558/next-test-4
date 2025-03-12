"use client";
import {
  HighComplexityIcon,
  MachinesIcon,
  PairsIcon,
} from "@/utils/icons";
import { useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import DetailedMetrices from "./DetailedMetrices";

const Dashboard = () => {
  const router = useRouter();
  const [imageName, setImageName] = useState("");
  useEffect(() => {
    setImageName(localStorage.getItem("fileName") as any);
  });
  return (
    <>
      <Suspense>
        <div className="bg-custom-cream">
          <div className="max-w-[1172px] mx-auto px-4 pt-[24.3px] pb-12 max-md:pb-10">
            <div className="flex items-center justify-between pb-[23.93px] flex-wrap">
              <p className="font-semibold text-2xl max-sm:text-xl leading-[100%] text-custom-gray">
                {imageName}
              </p>
              <button
                onClick={() => router.push("/uploadImage")}
                className="font-medium leading-[100%] text-sm border border-custom-gray border-opacity-50 h-[49px] w-[193px] max-sm:w-[170px] rounded-[6px] uppercase tracking-[-1%] hover:bg-gray-200 transition-all duration-300 cursor-pointer"
              >
                Upload more files
              </button>
            </div>
            <div className="flex flex-wrap -mx-3 max-sm:-mx-1 pb-[31px]">
              <div className="w-1/2 px-3 max-sm:px-1 max-lg:w-full max-lg:mb-6 max-sm:mb-2">
                <div className="bg-white flex justify-between items-center py-[19px] px-4 max-lg:py-3 max-lg:px-2 rounded-lg">
                  <div className="flex items-center gap-4 max-md:gap-1">
                    <div className="size-[60px] max-lg:size-[50px] rounded-full flex items-center justify-center bg-custom-off-white">
                      <HighComplexityIcon />
                    </div>
                    <p className="font-medium text-xl max-sm:text-base leading-[100%]">
                      Complexity of the code
                    </p>
                  </div>
                  <p className="font-medium text-sm leading-[100%] border border-custom-red text-custom-red bg-custom-off-white rounded-[49px] py-2 px-4 max-w-max max-h-max">
                    HIGH
                  </p>
                </div>
              </div>
              <div className="w-3/12 px-3 max-sm:px-1 max-lg:w-1/2 max-sm:!w-full">
                <div className="bg-white flex gap-4 max-md:gap-2 items-center py-[19px] px-4 max-lg:py-3 max-lg:px-2 max-sm:pl-1 rounded-lg">
                  <div className="size-[60px] max-lg:size-[50px] bg-custom-off-white flex items-center justify-center rounded-full">
                    <MachinesIcon />
                  </div>
                  <div>
                    <span className="font-medium text-[28px] leading-[100%]">
                      -
                    </span>
                    <p className="font-inter text-sm leading-[100%] tracking-[-1%]">
                      No of Machines
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-3/12 px-3 max-sm:px-1 max-lg:w-1/2 max-sm:!w-full max-sm:pt-2">
                <div className="bg-white flex gap-4 max-md:gap-2 items-center py-[19px] px-4 max-lg:py-3 max-lg:px-2 max-sm:pl-1 rounded-lg">
                  <div className="size-[60px] max-lg:size-[50px] bg-custom-off-white flex items-center justify-center rounded-full">
                    <PairsIcon />
                  </div>
                  <div>
                    <span className="font-medium text-[28px] leading-[100%]">
                      -
                    </span>
                    <p className="font-inter text-sm leading-[100%] tracking-[-1%]">
                      No of Pairs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <DetailedMetrices />
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Dashboard;
