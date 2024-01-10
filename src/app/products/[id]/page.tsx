import React from "react";
import ProductDetails from "../../../app/components/ProductDetails";

interface PageProps {
  params: {
    id: string; // Assuming id is a string or number
  };
}

const page = ({ params }: PageProps) => {
  const { id } = params;
  return (
    <div className="">
      <ProductDetails id={id} />
    </div>
  );
};

export default page;
