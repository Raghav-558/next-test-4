"use client";
import { DETAILED_METRICES_LIST } from "@/utils/helper";
import { RightArrowIcon } from "@/utils/icons";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const DetailedMetrices = () => {
  const params = useSearchParams();
  const card = params.get("card") || "default-value";
  const router = useRouter();
  console.log(card, router);
  return (
    <div className="bg-custom-cream">
      <h2 className="pb-[22.07px] font-semibold text-2xl leading-[100%] text-custom-gray">
        Detailed Metrics
      </h2>
      <div className="flex items-center max-lg:flex-wrap max-lg:justify-center justify-between gap-4">
        <div className="flex flex-col gap-4 w-full max-w-[558px]">
          {DETAILED_METRICES_LIST.map((obj, i) => (
            <button
              key={i}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                router.push(
                  `/dashboard?card=${obj.title
                    .toLowerCase()
                    .replaceAll(" ", "-")}`,
                  { scroll: false }
                );
              }}
              className={`flex items-center justify-between bg-white rounded-lg border border-solid text-sm w-full cursor-pointer py-[11px] px-4 ${
                card === obj.title.toLowerCase().replaceAll(" ", "-")
                  ? "border-custom-red"
                  : "border-transparent"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="size-[40px] flex items-center justify-center bg-custom-off-white rounded-full font-medium text-2xl leading-[100%]">
                  {obj.number}
                </div>
                <p className="font-inter text-sm leading-[100%]">{obj.title}</p>
              </div>
              <RightArrowIcon />
            </button>
          ))}
        </div>
        <div className="max-w-[558px] w-full h-full bg-white rounded-lg">
          <Image
            src={"/assets/images/webp/circle-data.webp"}
            width={558}
            height={464}
            alt="circle-data-image"
            className="!pointer-enents-none"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailedMetrices;
