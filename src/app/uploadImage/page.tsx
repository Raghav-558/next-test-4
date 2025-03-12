"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import UploadData from "@/components/UploadData";
import Header from "@/components/common/Header";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("isLogin") !== "true") {
      router.push("/");
    }
  }, []);

  return (
    <>
      <Header/>
      <UploadData />
    </>
  );
};

export default page;
