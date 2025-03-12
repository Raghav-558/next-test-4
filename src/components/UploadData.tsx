"use client";
import { FEATURES_LIST } from "@/utils/helper";
import { CheckIcon,ImageUplaodingIcon, PlusIcon, UploadIcon,} from "@/utils/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const UploadData = () => {
  const router = useRouter();
  const [dataUploaded, setDataUploaded] = useState(false);
  const [fileName, setFileName] = useState("");
  const [uploadCount, setUploadCount] = useState(0);

  const upLoadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileName = e.target.files?.[0].name ?? "";
    setFileName(fileName);
    localStorage.setItem("fileName", fileName);
    setDataUploaded(true);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file) {
      const fileName = file.name;
      setFileName(fileName);
      localStorage.setItem("fileName", fileName);
      setDataUploaded(true);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (dataUploaded && uploadCount < 100) {
      interval = setInterval(() => {
        setUploadCount((prevCount) => {
          if (prevCount >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevCount + 1;
        });
      }, 30);
    }

    if (uploadCount === 100) {
      setTimeout(() => {
        router.push("/dashboard");
      }, 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [dataUploaded, uploadCount]);

  return (
    <div className="relative">
      <Image src={"/assets/images/webp/left-vector.webp"} width={169.25} height={211} alt="left-vector" className="pointer-events-none absolute left-0 top-[80px]" />
      <Image src={"/assets/images/webp/right-vector.webp"} width={169.25} height={211} alt="right-vector" className="pointer-events-none right-0 absolute bottom-[45px]" />
      <div className="pt-9 pb-[69px] max-md:py-10">
        <div className="max-w-[1172px] px-4 mx-auto">
          <h2 className="font-semibold text-center max-lg:text-3xl text-[32px] max-md:text-2xl max-sm:text-xl pb-[34px] leading-[100%] text-custom-gray">
            Read & process your files online
          </h2>
          <div className="max-w-[786px] mx-auto">
            <div className="rounded-xl bg-white w-full p-4 box-shadow">
              <div
                className="rounded-lg border border-dashed border-custom-red w-full h-[326px] cursor-pointer"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                {dataUploaded === false ? (
                  <div className="w-full h-full !cursor-pointer">
                    <input onChange={upLoadFile} type="file" id="file" hidden />
                    <label htmlFor="file">
                      <div className="w-full h-full rounded-lg flex flex-col justify-center items-center">
                        <UploadIcon />
                        <div className="flex flex-col text-center">
                          <p className="font-normal text-custom-gray pt-4 font-inter leading-[150%]">
                            Paste or drag and drop files here
                          </p>
                          <p className="font-inter text-sm text-custom-gray opacity-40 leading-[150%] text-center pt-1 pb-4">
                            WAR, ZIP or EAR, file size no more than 10MB
                          </p>
                        </div>
                        <div className="flex justify-center items-center size-8 rounded-sm bg-custom-red">
                          <PlusIcon />
                        </div>
                      </div>
                    </label>
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center w-full h-full">
                    <div className="flex gap-3 max-w-[370px] w-full p-4 mx-auto">
                      <ImageUplaodingIcon />
                      <div className="flex flex-col w-full gap-2">
                        <div className="flex justify-between max-w-[306px] w-full">
                          <p className="font-inter leading-5 text-custom-gray">
                            Uploading{" "}
                            <span className="font-inter leading-5 text-custom-gray font-bold">
                              {fileName}
                            </span>
                          </p>
                          <p className="font-inter leading-5 text-custom-gray font-bold">
                            {uploadCount}%
                          </p>
                        </div>
                        <div className="w-full h-[3px] rounded-sm">
                          <div
                            className="bg-custom-red w-0 transition-all duration-300 h-full"
                            style={{ width: `${uploadCount}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between max-md:justify-center pt-12 max-md:pt-10">
              <p className="max-w-[335px] max-md:max-w-none max-md:text-center font-inter text-sm leading-[150%] text-custom-gray">
                Our accelerator allows you to upload, read, and process multiple
                file types (e.g., Python, JAR, ZIP), extracting key data like
                classes, methods, and structure for easy review.
              </p>
              <div className="flex flex-col gap-2 max-md:pt-4">
                {FEATURES_LIST.map((obj, index) => (
                  <div key={index} className="flex gap-[9px] items-center">
                    <CheckIcon />
                    <p className="text-sm leading-[150%] font-inter text-custom-gray">
                      {obj.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadData;
