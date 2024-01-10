"use client";
import React, { useEffect, useState } from "react";
import SidebarContext from "../context/SidebarContext";
import CartContext from "../context/CartContext";

import { useContext } from "react";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <div className="">
      <div
        className={`${
          isActive ? "hidden" : "block"
        } bg-gray-500 text-center text-gray-50 p-2 transition-all`}
      >
        Free Shipping All Orders $99 and Over{" "}
      </div>

      <div
        className={`navbar ${
          isActive ? "bg-white shadow-md" : "bg-none "
        } navbar_header h-16 fixed z-10 transition-all mb-12 lg:p-10 xl:mb-20`}
      >
        {/* hamburger menu  */}
        <div className="navbar-start">
          {/* dropdown hamburger */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white-100 rounded-box w-52"
            >
              <li>
                <a href="/#features">Why Us?</a>
              </li>
              <li>
                <a href="/#shop">Shop</a>
                <ul className="p-2">
                  <li>
                    <a>Men</a>
                  </li>
                  <li>
                    <a>Women</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/#newsletter">Newsletter</a>
              </li>
            </ul>
          </div>
          <a
            href="/#"
            className="btn btn-ghost text-xl font-normal tracking-widest lg:font-medium lg:text-2xl"
          >
            Fashion Gallery
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/#features">Why Us?</a>
            </li>
            <li>
              <details>
                <summary>Shop</summary>
                <ul className="p-2 bg-slate-100">
                  <li>
                    <a href="/#shop">Men</a>
                  </li>
                  <li>
                    <a href="/#shop">Women</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="/#newsletter">Newsletter</a>
            </li>
          </ul>
        </div>

        {/* extra navigations and cart */}
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <span className="badge badge-xs badge-primary indicator-item text-[12px] w-[18px] h-[18px] text-white ">
                {itemAmount}{" "}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
