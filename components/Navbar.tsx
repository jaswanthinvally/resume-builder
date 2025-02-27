"use client"
import { useState } from "react";
import SmallButton from "./SmallButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 py-3 font-poppins  shadow-md">
      {/* Logo */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <h1 className="font-semibold text-2xl text-sky-500">Resume Pro</h1>
        {/* Hamburger Button (Visible on Mobile Only) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {/* Hamburger Icon */}
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links (Hidden on Mobile, Toggles with Hamburger) */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row justify-center items-center w-full md:w-auto mt-4 md:mt-0`}
      >
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <li className="px-4 py-2 text-lg font-semibold">Create Resume</li>
          <li className="px-4 py-2 text-lg font-semibold">ATS Screen</li>
          <li className="px-4 py-2 text-lg font-semibold">Pricing</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center space-x-4 mt-4 md:mt-0">
        <SmallButton name="Login" />
        <SmallButton name="Sign up" />
      </div>
    </div>
  );
}