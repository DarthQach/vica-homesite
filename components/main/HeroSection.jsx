import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="relative w-full overflow-hidden" style={{ height: "calc(100vh - 130px)" }}>
        <div className="absolute inset-0 z-0">
          <Image src="/assets/heroImage.jpg" alt="Hero Image" layout="fill" objectFit="cover" quality={100} />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl text-white font-bold mb-4 mx-[50px]">
              "Any sufficiently advanced technology is indistinguishable from magic."
            </h1>
            <h3 className="text-white mb-4">- Arthur C. Clarke</h3>
            <div className="mt-12"></div>
            <a
              href="#"
              className="bg-white text-black text-xl px-12 py-3 rounded-lg hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
