import React from "react";
import { FaChevronRight } from "react-icons/fa";

const ProductTypeTable = ({
  productTypes,
  selectedProduct,
  setSelectedProduct,
}) => {
  return (
    <div className="w-full rounded-lg shadow ring-1 ring-gray-300">
      <table className="w-full">
        <thead className="w-full rounded-lg">
          <tr className="border-b-2 border-gray-400">
            <th className="p-3 text-left">Products</th>
          </tr>
        </thead>
      </table>
      <div className="max-h-96 overflow-y-auto  my-2">
        <table className="w-full">
          <tbody className="py-4 max-h-96 overflow-y-auto">
            {productTypes?.map((product, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-100 cursor-pointer m-2`}
                onClick={() => setSelectedProduct(product)}
              >
                <td className="">
                  <div
                    className={`p-2 mx-2 flex items-center justify-between ${
                      selectedProduct === product
                        ? "bg-secondary rounded-full"
                        : ""
                    }`}
                  >
                    <p>{product}</p>
                    <div className="flex items-center gap-4">
                      (7) <FaChevronRight size={12} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTypeTable;
