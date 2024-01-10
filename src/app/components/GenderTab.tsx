"use client";
import React, { useContext } from "react";
import ProductContext from "../context/ProductsContext";
import Products from "./Products";

const GenderTab = () => {
  const { products, fetchProducts } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [activeTab, setActiveTab] = React.useState("popular");
  // const [pagedProducts, setPagedProducts] = React.useState<any[]>([]);

  // React.useEffect(() => {
  //   pageProducts("popular");
  // });

  const filteredProducts = products?.filter((item) => {
    return (
      item.category === "women's clothing" || item.category === "men's clothing"
    );
  });

  const itemsPerPage = 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let len = products ? products?.length : 10;

  // const pageProducts = (filter: string) => {
  //   setCurrentPage(1);
  //   if (filter === "men" && menProducts) {
  //     len = menProducts.length;
  //     setPagedProducts(menProducts.slice(startIndex, endIndex));
  //   } else if (filter === "women" && womenProducts) {
  //     len = womenProducts.length;
  //     setPagedProducts(womenProducts.slice(startIndex, endIndex));
  //   } else if (filter === "popular" && filteredProducts) {
  //     len = filteredProducts.length;
  //     setPagedProducts(filteredProducts.slice(startIndex, endIndex));
  //   }
  // };

  const pagedProducts = products?.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(Math.ceil(len / itemsPerPage), prevPage + 1)
    );
  };

  //  filter products on gender
  const handleFilter = (filter: string) => {
    setCurrentPage(1);
    if (filter === "popular") {
      setActiveTab("popular");
      fetchProducts("popular");
    } else if (filter === "men") {
      setActiveTab("men");
      fetchProducts("men");
    } else if (filter === "women") {
      setActiveTab("women");
      fetchProducts("women");
    }
  };

  // console.log(pagedProducts);

  return (
    <div
      className="flex flex-col mx-auto justify-center items-center"
      id="shop"
    >
      <div className="flex">
        <button
          onClick={() => handleFilter("popular")}
          className={`${
            activeTab === "popular" ? "bg-[#594D42]" : "bg-[#C7C7C7]"
          } btn btn-sm w-[100px] h-[35px] lg:h-[50px]   text-white text-base rounded-none font-medium border-white`}
        >
          Popular
        </button>
        <button
          onClick={() => handleFilter("men")}
          className={`${
            activeTab === "men" ? "bg-[#594D42]" : "bg-[#C7C7C7]"
          } btn btn-sm w-[100px] h-[35px] lg:h-[50px]  text-white text-base rounded-none font-medium border-white`}
        >
          Men
        </button>
        <button
          onClick={() => handleFilter("women")}
          className={`${
            activeTab === "women" ? "bg-[#594D42]" : "bg-[#C7C7C7]"
          } btn btn-sm w-[100px] h-[35px] lg:h-[50px]   text-white text-base rounded-none font-medium border-white`}
        >
          Women
        </button>
      </div>
      <Products pagedProducts={pagedProducts} />
      <div className="join border-[#C7C7C7] text-black flex justify-center my-12">
        <button
          className="join-item btn btn-sm  border-[#fff] text-black"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          «
        </button>
        <button className="join-item btn btn-sm bg-[#C7C7C7] border-[#fff] text-black">
          Page {currentPage}
        </button>
        <button
          className="join-item btn  btn-sm bg-[#C7C7C7] border-[#fff] text-black"
          onClick={handleNextPage}
          disabled={
            len
              ? currentPage * itemsPerPage >= len
              : currentPage * itemsPerPage >= 10
          }
        >
          »
        </button>
      </div>
    </div>
  );
};

export default GenderTab;
