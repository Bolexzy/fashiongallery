import React, { useContext } from "react";
import styles from "./Products.module.css";
import CartContext from "../context/CartContext";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount: number;
}

const Products = ({
  pagedProducts,
}: {
  pagedProducts: Product[] | undefined;
}) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="mt-24 flex flex-wrap gap-x-5 xl:gap-x-8 gap-y-20 justify-center items-center">
      {pagedProducts?.map((product) => {
        return (
          <div
            key={product.id}
            className={`${styles.item_box} w-[150px] lg:w-[200px] h-[150px] lg:h-[180px] xl:w-[250px] xl:h-[200px] bg-[#FFFFFF] flex flex-col justify-center text-left p-2 relative`}
          >
            <Link
              href={{
                pathname: `products/${product.id}`,
                query: { id: `${product.id}` },
              }}
              className="w-[90px] lg:w-[120px] h-[100px] lg:h-[140px] absolute -top-14"
            >
              <img src={`${product.image}`} className="w-full h-full" />
            </Link>
            <p className="mt-12 lg:mt-20 mb-auto text-gray-500 text-xs xl:text-sm">
              {product.category}
            </p>
            <p
              className=" text-xs lg:text-sm xl:text-base"
              style={{ fontFamily: "Alegreya Sans" }}
            >
              {" "}
              {product.title}
            </p>
            <div className="flex justify-between mt-auto">
              {" "}
              <h2 className="price text-md xl:text-lg ">$ {product.price}</h2>
              <button
                className="btn btn-xs hover:bg-transparent bg-transparent w-auto h-auto border-none text-xs rounded-none font-medium text-pink-900 opacity-0"
                onClick={() => addToCart(product, product.id)}
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
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
