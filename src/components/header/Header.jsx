import React, { memo, useState } from "react";
import "./header.css";
import { CiLocationOn } from "react-icons/ci";
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
      <div className="container mx-auto">
        <div className=" flex items-center  gap-[69px] justify-between mt-5 ">
          <Link to={"/"}>
            <img
              className="w-[130px] h-[50px] object-contain "
              src="https://logodix.com/logo/26494.png"
              alt=""
            />
          </Link>

          <div className=" rounded-[5px] border hidden gap-3 py-[6px] px-[8px] sm:flex md:flex lg:flex ">
            <button>
              <CiLocationOn />
            </button>
            <select
              className="border-none outline-none text-[14px] text-[#3BB77E]  "
              name=""
              id=""
            >
              <option value="">Your Location</option>
              <option value="">Toshkent</option>
              <option value="">Samarqand</option>
              <option value="">Namangan</option>
              <option value="">Andijon</option>
              <option value="">Fargona</option>
            </select>
          </div>
          <div
            className={`nav__collect flex  gap-3 ${isMenuOpen ? "show" : ""}`}
          >
            <div className="flex items-center gap-4 navbar navbar__collection">
              <div className="flex items-center gap-1">
                <BasicModal ooo="Add" />
                <CiHeart className="text-[24px] " />
                <NavLink
                  className={
                    "text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e] "
                  }
                  to={"/wishlist"}
                >
                  Admin
                </NavLink>
              </div>
              <div className="flex items-center gap-1 navbar__collection">
                <IoCartOutline className="text-[24px] " />
                <NavLink
                  className={
                    "text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e] "
                  }
                  to={"/Cart"}
                >
                  Cart
                </NavLink>
              </div>
              {/* <button
                onClick={() => dispatch({ type: "LOGOUT" })}
                className="border-none outline-none text-[14px] font-[700] text-[#253D4E] pl-2"
              >
                LOGOUT
              </button> */}
            </div>
          </div>
          <div onClick={toggleMenu} className="navbar__menu">
            <RiMenu2Fill />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
