import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bulkDeleteProducts, setFilters } from "../store/productSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const { productTypes, productMaterials, bulkActionProductIds, filters } =
    useSelector((state) => state.products);
  const [selectedBulkAction, setSelectedBulkAction] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(filters.product);
  const [selectedMaterial, setSelectedMaterial] = useState(filters.material);

  const handleFilterApply = () => {
    dispatch(
      setFilters({ product: selectedProduct, material: selectedMaterial })
    );
  };

  const bulkActionHandler = async () => {
    if (selectedBulkAction.length === 0) {
      console.warn("No products selected for deletion");
      return;
    }

    dispatch(bulkDeleteProducts(bulkActionProductIds));
  };

  // const bulkActionHandler = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:4000/api/delete-product`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ requestedIds: bulkActionProductIds }), // Sending IDs in body
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Error deleting products`);
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Bulk delete failed:", error.message);
  //   }
  // };

  // console.log(selectedBulkAction);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center-4 mb-6">
      <div className="flex justify-between gap-4 items-center">
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="pl-4 py-1 border rounded-xl"
        >
          <option value="">Products</option>
          {productTypes?.map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>
        <select
          value={selectedMaterial}
          onChange={(e) => setSelectedMaterial(e.target.value)}
          className="pl-4 py-1 border rounded-xl"
        >
          <option value="">Materials</option>
          {productMaterials?.map((material) => (
            <option key={material} value={material}>
              {material}
            </option>
          ))}
        </select>
        {filters.product && filters.material && (
          <button
            onClick={() =>
              dispatch(
                setFilters({
                  product: "",
                  material: "",
                })
              )
            }
            className="px-6 py-1 border rounded-xl bg-secondary"
          >
            Clear
          </button>
        )}
        <button
          onClick={handleFilterApply}
          className="px-6 py-1 border rounded-xl bg-white"
        >
          Filter
        </button>
        <select
          value={selectedBulkAction}
          onChange={(e) => setSelectedBulkAction(e.target.value)}
          className="ml-10 pl-4 py-1 border rounded-xl"
        >
          <option value="">Bulk Actions</option>
          <option value="delete">Delete</option>
        </select>
        <button
          disabled={!bulkActionProductIds?.length || selectedBulkAction === ""}
          onClick={bulkActionHandler}
          className={`px-4 py-1 border rounded-xl ${
            bulkActionProductIds?.length && selectedBulkAction !== ""
              ? "bg-secondary border-primary"
              : "bg-white"
          }`}
        >
          Apply
        </button>
      </div>

      <div className="flex items-center justify-end gap-4">
        <p>Products</p>
        <select value="25" className="pl-4 py-1 pr-4 border rounded-xl">
          <option value="25">25</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
