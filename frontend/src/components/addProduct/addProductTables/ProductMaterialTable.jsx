import React from "react";
import { FaChevronRight } from "react-icons/fa";

const ProductMaterialTable = ({
  productMaterials,
  selectedMaterial,
  setSelectedMaterial,
}) => {
  return (
    <div className="w-full rounded-lg shadow ring-1 ring-gray-300">
      <table className="w-full">
        <thead className="w-full rounded-lg">
          <tr className="border-b-2 border-gray-400">
            <th className="p-3 text-left">Material</th>
          </tr>
        </thead>
      </table>
      <div className="max-h-96 overflow-y-auto my-2">
        <table className="w-full">
          <tbody className="py-4 max-h-96 overflow-y-auto">
            {productMaterials?.map((material, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-100 cursor-pointer m-2`}
                onClick={() => setSelectedMaterial(material)}
              >
                <td>
                  <p
                    className={`p-2 mx-2 flex items-center justify-between ${
                      selectedMaterial === material
                        ? "bg-secondary rounded-full"
                        : ""
                    }`}
                  >
                    {material}
                    <div className="flex items-center gap-4">
                      (7) <FaChevronRight size={12} />
                    </div>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductMaterialTable;
