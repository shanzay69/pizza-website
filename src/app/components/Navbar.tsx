'use client';
import React, { useState, useEffect } from "react";
import { GiFullPizza } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
  const Pizzanames = [
    "Spicy Legend Ranch",
    "Cheese Pizza",
    "BBQ Chicken Pizza",
    "Veggie Supreme",
    "Pepperoni Passion",
    "Hawaiian Delight",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const currentName = Pizzanames[currentIndex];

    const typingInterval = setInterval(() => {
      if (charIndex < currentName.length) {
        setDisplayText(currentName.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayText("");
          setCurrentIndex((prev) => (prev + 1) % Pizzanames.length);
        }, 1000);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  return (
    <div className="p-5">
      <div className="py-2 px-4 rounded-full border bg-gradient-to-r from-black to-red-900 max-w-screen-lg mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GiFullPizza className="w-9 h-9 text-yellow-600 hover:text-yellow-700" />
            <div className="relative w-full max-w-xs">
              <input
                value={displayText}
                readOnly
                className="w-full rounded-3xl py-2 px-7 sm:px-4 outline-none text-sm pr-14 text-gray-700"
                placeholder="Search for pizza menu."
              />
              <FaSearch className="w-5 h-5 text-yellow-600 absolute top-1/2 right-3 transform -translate-y-1/2" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center text-white text-sm sm:text-base md:text-lg">
              <FaBolt className="w-6 h-6 text-amber-500" />
              <p className="ml-2">
                Order Now and Delivered in
                <span className="text-yellow-600"> 20 minutes</span>
              </p>
            </div>
            <FaCartShopping className="w-8 h-8 text-sky-400 rounded-full ring-2 ring-sky-500 p-1 hover:text-yellow-700" />
          </div>
        </div>
      </div>
    </div>
  );
}





