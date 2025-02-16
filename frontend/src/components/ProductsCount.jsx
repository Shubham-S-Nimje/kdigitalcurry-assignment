import React from "react";
import { useSelector } from "react-redux";

const ProductsCount = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="px-16 py-1 bg-white border rounded-full text-lg font-bold items-center">
      {products?.length}/400{" "}
      <span className="text-sm font-normal">Products</span>
    </div>
  );
};

export default ProductsCount;
