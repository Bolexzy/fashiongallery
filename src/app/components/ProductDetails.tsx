"use client";
import React, { useContext } from "react";

// cart context
import CartContext from "../context/CartContext";
// product  context
import ProductContext from "../context/ProductsContext";

const ProductDetails = ({ id }: { id: string }) => {
  console.log(`id: ${id}`);

  // get the product with the id
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get the single product from products array based on id
  const product = products?.find((product) => product.id === parseInt(id));

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading..
      </section>
    );
  }

  const { title, description, price, image } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen lg:h-full overflow-auto">
      <div className="container mx-auto ">
        {/* image and text wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* image */}

          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              src={image}
              alt="product image"
              className="max-w-[200px] lg:max-w-sm"
            />
          </div>
          {/* detail text */}
          <div className="flex flex-col flex-1 text-center items-center lg:items-start lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-2xl text-pink-900 font-medium mb-6">
              $ {price}
            </div>
            <p
              className="mb-8 tracking-wide px-4 md:px-8 lg:px-0"
              style={{ fontFamily: "Alegreya Sans" }}
            >
              {description}
            </p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="btn rounded-none max-w-[200px] bg-gray-800 py-4  px-8 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
