"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Healthray Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />

          <div>
            <h1 className="text-lg font-bold text-[#E5256C] leading-none">
              Tridev Healthcare
            </h1>
            <p className="text-xs text-gray-500">
              “Where Care Meets Technology”
            </p>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-6 font-medium text-[#1F1F1F]">
          {["Healthray Products", "Speciality", "ABDM"].map((item) => (
            <li key={item} className="relative group">
              <button
                onClick={() => handleDropdown(item)}
                className="hover:text-[#2D9CDB] transition"
              >
                {item} ▾
              </button>

              {openDropdown === item && (
                <ul className="absolute top-full mt-2 w-48 bg-white border rounded shadow z-50 p-2">
                  <li className="hover:bg-gray-100 p-2 cursor-pointer">
                    Option 1
                  </li>
                  <li className="hover:bg-gray-100 p-2 cursor-pointer">
                    Option 2
                  </li>
                  <li className="hover:bg-gray-100 p-2 cursor-pointer">
                    Option 3
                  </li>
                  <li className="hover:bg-gray-100 p-2 cursor-pointer">
                    Option 4
                  </li>
                  <li className="hover:bg-gray-100 p-2 cursor-pointer">
                    Option 5
                  </li>
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link href="#" className="hover:text-[#2D9CDB]">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#2D9CDB]">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div>
          <Link href="#">
            <button className="bg-[#4D60FF] text-white px-6 py-2 rounded-full hover:opacity-90 transition">
              BOOK A DEMO
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
