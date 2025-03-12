"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const WelcomeForm = () => {
  const router = useRouter();
  const formValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const [formData, setFormData] = useState(formValues);
  const [error, setError] = useState(false);
  const emailRegax =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(true);
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === ""
    ) {
      setError(true);
    } else if (!emailRegax.test(formData.email)) {
      setError(true);
    } else {
      localStorage.setItem("formData", JSON.stringify(formData));
      localStorage.setItem("isLogin", "true");
      setFormData(formValues);
      setError(false);
      alert("Login Successful");
      router.push("/uploadImage");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("isLogin") === "true") {
      router.push("/uplaodImage");
    }
  }, []);

  return (
    <div className="max-w-[1172px] px-4 mx-auto py-16 max-md:py-10">
      <div className="flex flex-col relative justify-center items-center">
        <h1 className="text-4xl max-sm:text-3xl text-center leading-[100%] pb-10 max-md:pb-8">
          Welcome form
        </h1>
        <form noValidate className="rounded-md w-full max-w-[400px]">
          <div className="mb-4">
            <label className="block text-lg max-md:text-base pb-2 max-md:pb-1" htmlFor="firstName">
              First Name
            </label>
            <input onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} type="text" id="firstName" placeholder="First name" className="border-2 border-black outline-none rounded-md w-full py-2 px-3"/>
            {error && formData.firstName.length === 0 && ( <p className="text-red-500 pt-1 pl-1">First name is required</p> )}
          </div>
          <div className="mb-4">
            <label className="block text-lg max-md:text-base pb-2 max-md:pb-1" htmlFor="lastName">Last Name</label>
            <input onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} type="text" id="lastName" placeholder="Last name" className="border-2 border-black outline-none rounded-md w-full py-2 px-3"/>
            {error && formData.lastName.length === 0 && (<p className="text-red-500 pt-1 pl-1">Last name is required</p> )} </div>
          <div className="mb-4">
            <label
              className="block text-lg max-md:text-base pb-2 max-md:pb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              id="email"
              placeholder="Email address"
              className="border-2 border-black outline-none rounded-md w-full py-2 px-3"
            />
            {error && formData.email.length === 0 ? (
              <p className="text-red-500 pt-1 pl-1 ">
                Email address is required
              </p>
            ) : (
              error &&
              !emailRegax.test(formData.email) && (
                <p className="text-red-500 pt-1 pl-1 ">
                  Please enter a valid email address
                </p>
              )
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="w-full mt-2 md:mt-4 border-2 border-gray-600 font-medium text-lg max-md:text-base bg-gray-400 py-2 px-3 rounded-md hover:bg-gray-600 hover:text-white transition-all duration-300 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default WelcomeForm;
