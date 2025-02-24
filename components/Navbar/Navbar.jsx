"use client";
import { useState } from "react";

import SelectLanguage from "./SelectLanguage";
import NavbarItemsList from "@/components/Navbar/NavbarItemsList";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="fixed top-0 left-0 w-full bg-neutral-800 text-white z-50">
            <div className="w-full flex justify-between items-center p-6">
                {/* Logo */}
                <div>لوگو</div>

                {/* Desktop navigation */}
                <div className="hidden md:flex">
                    <NavbarItemsList />
                </div>

                {/* Desktop language selector */}
                <div className="hidden md:block">
                    <SelectLanguage />
                </div>

                {/* Mobile burger icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <div className="relative w-6 h-6">
      <span
          className={`absolute block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 top-3" : "top-1"
          }`}
      ></span>
                            <span
                                className={`absolute block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                                    isOpen ? "opacity-0" : "top-3"
                                }`}
                            ></span>
                            <span
                                className={`absolute block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                                    isOpen ? "-rotate-45 top-3" : "top-5"
                                }`}
                            ></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile navigation panel */}
            <div
                className={`md:hidden bg-neutral-800 transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="px-4 pt-2 pb-4">
                    <NavbarItemsList />
                </div>
                <div className="px-4 pb-4">
                    <SelectLanguage />
                </div>
            </div>
        </div>
    );
}
