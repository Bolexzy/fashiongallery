"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Carousel = () => {
  return (
    // carousel box
    <div className="w-screen xl:w-full items-center justify-center mb-10">
      <div className="w-full mx-auto">
        <div className="carousel_slider">
          {/* // carousel container */}

          <div className="carousel_slider_container">
            {/* // carousel content */}

            <div
              className="slide_item relative w-60 h-52 lg:h-60 xl:w-72 xl:h-64"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/cloth_hanger.png')",
              }}
            >
              <div className="absolute top-[80%] left-1/4 -translate-y-[80%] -translate-x-1/4">
                <h3 className="text-2xl text-[#F2F2F2] drop-shadow-xl">
                  Stylist Picks Beat
                </h3>
                <h3 className="text-lg text-[#F2F2F2] drop-shadow-xl">
                  The Heat
                </h3>
                <Link href={"/#shop"}>
                  <button
                    className="btn btn-sm h-[2.3rem]  btn-outline border-white border-[.1rem] rounded-none text-white mt-7 w-[6rem]"
                    style={{ fontFamily: "Alegreya Sans" }}
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>

            <div
              className="slide_item relative w-60 h-52 lg:h-60 xl:w-72 xl:h-64"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/fashion1.png')",
              }}
            >
              <div className="absolute top-[80%] left-1/4 -translate-y-[80%] -translate-x-1/4">
                <h3 className="text-2xl text-[#F2F2F2] drop-shadow-xl">
                  Feel Authentic
                </h3>
                <h3 className="text-lg text-[#F2F2F2] drop-shadow-xl">Peace</h3>
                <Link href={"/#shop"}>
                  <button
                    className="btn btn-sm h-[2.3rem]  btn-outline border-white border-[.1rem] rounded-none text-white mt-7 w-[6rem]"
                    style={{ fontFamily: "Alegreya Sans" }}
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            <div
              className="slide_item relative w-60 h-52  lg:h-60 xl:w-72 xl:h-64"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/fashion2.png')",
              }}
            >
              <div className="absolute top-[80%] left-1/4 -translate-y-[80%] -translate-x-1/4">
                <h3 className="text-2xl text-[#F2F2F2] drop-shadow-xl">
                  Classic with
                </h3>
                <h3 className="text-lg text-[#F2F2F2] drop-shadow-xl">
                  Natural Twist
                </h3>
                <Link href={"/#shop"}>
                  <button
                    className="btn btn-sm h-[2.3rem]  btn-outline border-white border-[.1rem] rounded-none text-white mt-7 w-[6rem]"
                    style={{ fontFamily: "Alegreya Sans" }}
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>

            <div
              className="slide_item relative w-60 h-52  lg:h-60 xl:w-72 xl:h-64"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/fashion3.png')",
              }}
            >
              <div className="absolute top-[80%] left-1/4 -translate-y-[80%] -translate-x-1/4">
                <h3 className="text-2xl text-[#F2F2F2] drop-shadow-xl">
                  Shop More
                </h3>
                <h3 className="text-lg text-[#F2F2F2] drop-shadow-xl">
                  Pay Less
                </h3>
                <Link href={"/#shop"}>
                  <button
                    className="btn btn-sm h-[2.3rem]  btn-outline border-white border-[.1rem] rounded-none text-white mt-7 w-[6rem]"
                    style={{ fontFamily: "Alegreya Sans" }}
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* wrapping twin  */}
          <div className="carousel_slider_container ml-[1rem]">
            {/* // carousel content */}

            <div
              className="slide_item relative w-60 h-52  lg:h-60 xl:w-72 xl:h-64"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/cloth_hanger.png')",
              }}
            >
              <div className="absolute top-[80%] left-1/4 -translate-y-[80%] -translate-x-1/4">
                <h3 className="text-2xl text-[#F2F2F2] drop-shadow-xl">
                  Stylist Picks Beat
                </h3>
                <h3 className="text-lg text-[#F2F2F2] drop-shadow-xl">
                  The Heat
                </h3>
                <Link href={"/#shop"}>
                  <button
                    className="btn btn-sm h-[2.3rem]  btn-outline border-white border-[.1rem] rounded-none text-white mt-7 w-[6rem]"
                    style={{ fontFamily: "Alegreya Sans" }}
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>

            <div
              className="slide_item relative w-60 h-52  lg:h-60 xl:w-72 xl:h-64"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/fashion1.png')",
              }}
            >
              <div className="absolute top-[80%] left-1/4 -translate-y-[80%] -translate-x-1/4">
                <h3 className="text-2xl text-[#F2F2F2] drop-shadow-xl">
                  Feel Authentic
                </h3>
                <h3 className="text-lg text-[#F2F2F2] drop-shadow-xl">Peace</h3>
                <Link href={"/#shop"}>
                  <button
                    className="btn btn-sm h-[2.3rem]  btn-outline border-white border-[.1rem] rounded-none text-white mt-7 w-[6rem]"
                    style={{ fontFamily: "Alegreya Sans" }}
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            <div
              className="slide_item relative w-60 h-52 lg:h-60 xl:w-72 xl:h-64"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/fashion2.png')",
              }}
            >
              <div className="absolute top-[80%] left-1/4 -translate-y-[80%] -translate-x-1/4">
                <h3 className="text-2xl text-[#F2F2F2] drop-shadow-xl">
                  Classic with
                </h3>
                <h3 className="text-lg text-[#F2F2F2] drop-shadow-xl">
                  Natural Twist
                </h3>
                <Link href={"/#shop"}>
                  <button
                    className="btn btn-sm h-[2.3rem]  btn-outline border-white border-[.1rem] rounded-none text-white mt-7 w-[6rem]"
                    style={{ fontFamily: "Alegreya Sans" }}
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>

            <div
              className="slide_item relative w-60 h-52 lg:h-60 xl:w-72 xl:h-64"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/fashion3.png')",
              }}
            >
              <div className="absolute top-[80%] left-1/4 -translate-y-[80%] -translate-x-1/4">
                <h3 className="text-2xl text-[#F2F2F2] drop-shadow-xl">
                  Shop More
                </h3>
                <h3 className="text-lg text-[#F2F2F2] drop-shadow-xl">
                  Pay Less
                </h3>
                <Link href={"/#shop"}>
                  <button
                    className="btn btn-sm h-[2.3rem]  btn-outline border-white border-[.1rem] rounded-none text-white mt-7 w-[6rem]"
                    style={{ fontFamily: "Alegreya Sans" }}
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
