import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="py-[23px] bg-custom-black">
      <div className="max-w-[1172px] mx-auto px-4 flex items-center justify-between max-sm:flex-col gap-2 max-sm:justify-center">
        <p className="text-sm font-inter leading-[150%] text-white/50">
          Made with ❤️ for the people of the internet.
        </p>
        <p className="text-sm font-inter leading-[150%] text-white/50">
          © {currentYear} Dataskate.io, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
