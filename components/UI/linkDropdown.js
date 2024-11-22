"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export const CustomLinkDropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center justify-between w-full p-2 border rounded-md bg-white text-left focus:outline-none"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Links
        <span className="text-2xl">
          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg flex flex-col gap-2"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            transition={{ duration: 0.2 }}
          >
            {options.map((option) => (
              <Link
                key={option.value}
                href={option.value}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left p-2 hover:bg-gray-200 focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                {option.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
