"use client";
import React, { useContext } from "react";

import Link from "next/link";
import SidebarContext from "../context/SidebarContext";
import CartContext from "../context/CartContext";
import CartItem from "./CartItem";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } cartSidebar w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-auto`}
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          shopping bag ({itemAmount})
        </div>
        <div
          className="arrow-right cursor-pointer"
          onClick={() => handleClose()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 hover:translate-x-2 transition-all duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div className="cart flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart?.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      <div className="flex flex-col gap-y-3  py-4 ">
        <div className="flex w-full justify-between items-center ">
          {/* total  */}
          <div className=" uppercase font-semibold">
            {" "}
            <span className="mr-2 ">Total:</span>${" "}
            {total ? parseFloat(total.toFixed(2)) : "0.00"}
          </div>
          {/* clear cart icon  */}
          <div
            className="cursor-pointer text-rose-500  flex justify-center items-center text-xl"
            onClick={() => clearCart()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 hover:scale-110 transition-all duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        </div>
        <Link
          href={"/"}
          className="bg-gray-200 flex p-4 justify-center items-center text-[#594D42] w-full font-medium"
        >
          View cart
        </Link>
        <Link
          href={"/"}
          className="bg-[#594D42] flex p-4 justify-center items-center text-white w-full font-medium"
        >
          View cart
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
