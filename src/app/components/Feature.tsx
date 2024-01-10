import React from "react";

const Feature = () => {
  return (
    <div
      className=" w-12/12 p-2 h-full flex flex-col md:flex-row items-center md:items-center flex-wrap "
      id="features"
    >
      {/* brand new products */}
      <div
        className="md:my-5 md:p-4 flex flex-col  gap-1 md:gap-2 justify-center items-center text-center w-[50%] md:w-[32%]
      "
      >
        <div className="text-[#2b2b2a] flex justify-center items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-14 h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
            />
          </svg>
        </div>
        <p className="font-medium text-sm">Brand New Products</p>
        <p
          className="text-xs tracking-wide text-[#594D42] max-w-[300px]"
          style={{ fontFamily: "Alegreya Sans" }}
        >
          Our Products are of high quality and from trusted brands.
        </p>
        <div className="bg-gray-300 md:bg-transparent w-4/5 h-[2px] md:h-[1px] my-4"></div>
      </div>

      <div className="md:bg-gray-400  md:h-[125px] md:w-[2px]"></div>

      {/* fast 2 day shipping  */}
      <div
        className="md:my-5 md:p-4 flex flex-col  gap-1 md:gap-2 justify-center items-center text-center w-[50%] md:w-[32%]
      "
      >
        <div className="text-[#2b2b2a] flex justify-center items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-14 h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>
        </div>
        <p className="font-medium text-sm">Fast 2 Day Shipping</p>
        <p
          className="text-xs tracking-wide text-[#594D42] max-w-[300px]"
          style={{ fontFamily: "Alegreya Sans" }}
        >
          Enjoy the fastest and reliable 2 day maximum delivery period.
        </p>
        <div className="bg-gray-300 md:bg-transparent w-4/5 h-[2px] md:h-[50px] my-4"></div>
      </div>

      <div className="md:bg-gray-400  md:h-[125px] md:w-[2px]"></div>

      {/* customer support  */}
      <div
        className="md:my-5 md:p-4 flex flex-col  gap-1 md:gap-2 justify-center items-center text-center w-[50%] md:w-[32%]
      "
      >
        <div className="text-[#2b2b2a] flex justify-center items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-14 h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <p className="font-medium text-sm">24/7 Customer Support</p>
        <p
          className="text-xs tracking-wide text-[#594D42] max-w-[300px]"
          style={{ fontFamily: "Alegreya Sans" }}
        >
          Our support team is here to help you for your queries.
        </p>
        <div className="md:bg-transparent md:h-[1px] md:my-4"></div>
      </div>

      <div className=" my-10 md:mt-0 w-full p-4 xl:mx-12">
        <h3 className="uppercase text-xl tracking-widest font-medium text-center">
          CUSTOMER REVIEWS
        </h3>
        <p
          className="text-sm mt-3 normal-case"
          style={{ fontFamily: "Alegreya Sans" }}
        >
          No reviews yet. <span className="underline">Write a review</span>
        </p>
      </div>
    </div>
  );
};

export default Feature;
