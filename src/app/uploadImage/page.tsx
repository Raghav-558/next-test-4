"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import UploadData from "@/components/UploadData";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("isLogin") !== "true") {
      router.push("/");
    }
  }, []);

  return (
    <>
      <UploadData />
    </>
  );
};

export default page;
