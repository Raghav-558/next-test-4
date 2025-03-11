import React from "react";
import Header from "./common/Header";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="max-w-[1172px] mx-auto px-4 pt-[24.3px]">
        <div className="flex items-center justify-between pb-[23.93px] flex-wrap">
          <p>Hello</p>
          <button className="font-medium leading-[100%] text-sm border border-custom-gray border-opacity-50 h-[49px] w-[193px] rounded-[6px] uppercase tracking-[-1%] hover:bg-gray-200 transition-all duration-300">
            Upload more files
          </button>
        </div>
        <div>
          <div className="max-w-[558px] h-[98px]"> Complexity of the code</div>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
