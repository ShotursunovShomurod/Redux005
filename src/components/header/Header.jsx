import React, { memo, useState } from "react";
import "./header.css"; // Sizning style faylingiz kerak bo'ladi
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import BasicModal from "../modal/Modal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md mb-5">
        <div className="container mx-auto py-4 flex items-center justify-between px-4 lg:px-0">
          {/* Logo */}
          <Link to={"/"}>
            <img
              className="w-[130px] h-[50px] object-contain"
              src="https://logodix.com/logo/26494.png"
              alt="Logo"
            />
          </Link>

          {/* Navigation Links */}
          <div
            className={`nav__collect flex gap-6 items-center ${
              isMenuOpen ? "flex-col absolute top-full left-0 w-full bg-white py-4" : "hidden lg:flex"
            } transition-all duration-300 lg:relative lg:flex-row lg:w-auto lg:bg-transparent`}
          >
            <div className="flex gap-4 items-center">
              <BasicModal ooo="Create Card" />
              <CiHeart className="text-[24px] cursor-pointer hover:text-red-500 transition" />
              <NavLink
                to={"/wishlist"}
                className="text-[16px] font-medium text-gray-700 hover:text-blue-500"
              >
                Admin
              </NavLink>
            </div>
            <div className="flex gap-4 items-center">
              <IoCartOutline className="text-[24px] cursor-pointer hover:text-green-500 transition" />
              <NavLink
                to={"/Cart"}
                className="text-[16px] font-medium text-gray-700 hover:text-blue-500"
              >
                Cart
              </NavLink>
            </div>
          </div>

          {/* Menu Icon for Mobile */}
          <div onClick={toggleMenu} className="navbar__menu text-2xl lg:hidden cursor-pointer">
            <RiMenu2Fill />
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Header);
