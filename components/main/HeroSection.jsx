"use client";
import React, { useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  // State to manage modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to toggle modal state
  const toggleModal = () => setModalOpen(!isModalOpen);

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
            <button
              onClick={toggleModal}
              className="bg-white text-black text-xl px-12 py-3 rounded-lg hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Modal Component covering the full viewport */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-3/4 max-w-4xl">
            <h2 className="font-bold text-xl mb-4">For tecnical project management click <a href="#" style={{color: 'gray'}}>here</a>.</h2>
            <p className="mb-4">The rest of the page is under construction</p>
            <button onClick={toggleModal} className="px-6 py-2 rounded bg-black text-white hover:bg-gray-900">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
