"use client";
import React, { useState } from "react";
import Header from "./common/Header";
import Image from "next/image";
import { FEATURES_LIST } from "@/utils/helper";
import { CheckIcon } from "@/utils/icons";
import Footer from "./common/Footer";

const Hero = () => {
  const [preView, setPreView] = useState<string[]>([]);

  const validImageTypes = ["image/jpeg", "image/png", "image/gif"];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const newPreviews: string[] = [];
      Array.from(files).forEach((file) => {
        if (validImageTypes.includes(file.type)) {
          newPreviews.push(URL.createObjectURL(file));
        } else {
          alert(`Error: ${file.name} is not a valid image file.`);
        }
      });
      setPreView((prev) => [...prev, ...newPreviews]);
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files) {
      const newPreviews: string[] = [];
      Array.from(files).forEach((file) => {
        if (validImageTypes.includes(file.type)) {
          newPreviews.push(URL.createObjectURL(file));
        } else {
          alert(`Error: ${file.name} is not a valid image file.`);
        }
      });
      setPreView((prev) => [...prev, ...newPreviews]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="relative">
      <Header />
      <Image
        src="/assets/images/webp/left-vector.webp"
        width={169.25}
        height={211}
        alt="left-vector"
        className="absolute top-[150px] left-0 pointer-events-none"
      />
      <Image
        src="/assets/images/webp/right-vector.webp"
        width={169.25}
        height={211}
        alt="left-vector"
        className="absolute right-0 bottom-[110px] pointer-events-none"
      />

      <div className="max-w-[1172px] mx-auto px-4 pb-[69px]">
        <h3 className="text-[32px] font-semibold leading-[100%] text-center pt-9">
          Read & process your files online
        </h3>
        <div className="max-w-[786px] h-[358px] mx-auto p-4 mt-[34px] shadow-[0px_16px_42.7px_0px_rgba(0,0,0,0.08)] rounded-xl">
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            hidden
            multiple
          />
          <label htmlFor="image">
            <div
              className="flex flex-col items-center justify-center cursor-pointer w-full h-full border border-dashed border-custom-red rounded-lg"
              onDragOver={handleDragOver}
              onDrop={handleDrag}
            >
              <Image
                src={"/assets/images/webp/image-upload-cloud.webp"}
                alt="image-upload-cloud"
                height={24}
                width={24}
                className="pointer-events-none"
              />
              <p className="text-base text-custom-gray leading-[150%] font-inter pt-4">
                Paste or drag and drop files here
              </p>
              <p className="font-inter text-sm leading-[150%] text-custom-gray opacity-40 pt-1">
                WAR, ZIP or EAR, file size no more than 10MB
              </p>
            </div>
          </label>
        </div>

        <div className="max-w-[786px] mx-auto flex items-center justify-between max-md:justify-center pt-12 flex-wrap ">
          <div>
            <p className="text-sm leading-[150%] font-inter max-w-[335px] text-custom-gray max-md:text-center max-md:max-w-none">
              Our accelerator allows you to upload, read, and process multiple
              file types (e.g., Python, JAR, ZIP), extracting key data like
              classes, methods, and structure for easy review.
            </p>
          </div>
          <div>
            <ul className="space-y-2 max-md:justify-center max-md:pt-3">
              {FEATURES_LIST.map((obj, index) => (
                <li
                  key={index}
                  className="flex items-center gap-1.5 text-sm leading-[150%] font-inter text-custom-gray"
                >
                  <CheckIcon />
                  {obj.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
