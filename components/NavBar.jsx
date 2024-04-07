"use client";
import React from "react";
import Image from "next/image";
import styles from "./NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full flex items-center justify-between bg-black text-white py-4 px-8 z-50 ${styles.navBar}`}
    >
      <div className="logo font-bold">
        <div className={styles.logoWrapper}>
          <Image src="/assets/vica-logo-nobackground.png" width={120} height={100} alt="vica logo" />
        </div>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div className={`menu flex gap-4 ${isOpen ? "flex" : "hidden"} md:flex`}>
        {/* Adjust font size for mobile */}
        <a href="#tech-pm" className={`hover:text-gray-400 transition-colors duration-150 ${styles.navItem}`}>
          Tech PM
        </a>
        <a href="#saas" className={`hover:text-gray-400 transition-colors duration-150 ${styles.navItem}`}>
          SaaS
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
