"use client";
import Link from "next/link";
import React, { useContext } from "react";
import CartContext from "../context/CartContext";

// Define the type for item
interface Item {
  id: string;
  title: string;
  image: string;
  price: number;
  amount: number;
}

const CartItem = ({ item }: { item: Item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image  */}
        <Link href={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>

        <div className="w-full flex flex-col">
          {/* title and remove icon */}
          <div className="flex justify-between mb-2">
            <Link
              href={{
                pathname: `products/${id}`,
                query: { id: `${id}` },
              }}
              className=" text-sm uppercase font-medium  max-w-[240px] text-[#594D42] hover:underline "
            >
              {title}
            </Link>

            <div
              className="remove_icon text-gray-500 hover:text-red-500 transition text-xl cursor-pointer"
              onClick={() => removeFromCart(id)}
            >
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>

          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* quantity */}

            <div className=" flex flex-1 max-w-[100px] items-center h-full  border text-primary font-medium">
              {/* minus icon */}
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex justify-center items-center cursor-pointer h-full text-[#594D42]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </div>

              {/* amount */}
              <div className="h-full text-[#594D42]  flex justify-center items-center px-2">
                {amount ? parseFloat(amount.toFixed(2)) : "0.00"}
              </div>
              {/* plus icon  */}
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 flex text-[#594D42] justify-center items-center cursor-pointer h-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
            {/* item price */}
            <div className="price flex-1 flex items-center justify-around">
              $ {price}
            </div>
            {/* final price to 2 decimals*/}
            <div className="flex-1 flex justify-end items-center text-[#594D42] font-medium">
              {" "}
              {`$ ${price * amount}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
