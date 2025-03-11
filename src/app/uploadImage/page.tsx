"use client";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("isLogin") !== "true") {
      router.push("/");
    }
  }, []);

  return (
    <>
      <Hero />
    </>
  );
};

export default page;
