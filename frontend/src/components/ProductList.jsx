import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setBulkActionProductIds,
  toggleProductExpand,
  updateProductDetails,
} from "../store/productSlice";
import toast from "react-hot-toast";

const updateProduct = async (data) => {
  try {
    const response = await fetch(`http://localhost:4000/api/update-product`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to update product");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, filters, searchResults } = useSelector(
    (state) => state.products
  );
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);
    if (isChecked) {
      setSelectedProducts(filteredProducts.map((product) => product.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  const filteredProducts = products.filter((product) => {
    if (filters.product && product.type !== filters.product) return false;
    if (filters.material && product.material !== filters.material) return false;
    return true;
  });

  useEffect(() => {
    dispatch(setBulkActionProductIds(selectedProducts));
    setSelectAll(selectedProducts.length === filteredProducts.length);
  }, [selectedProducts, filteredProducts]);

  const handleQuickEdit = (id) => {
    const product = products.find((p) => p.id === id);
    setFormData({
      [id]: {
        currency: "INR",
        unit: "KG",
      },
    });
    dispatch(toggleProductExpand(id));
  };

  const handleInputChange = (e, productId) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [name]: value,
      },
    }));
  };

  const handleUpdateSubmit = async (e, product) => {
    e.preventDefault();
    setLoading(true);

    try {
      const changedData = {
        ...formData[product.id],
        unit: formData[product.id]?.unit || "KG",
        currency: formData[product.id]?.currency || "INR",
      };

      const requiredFields = [
        "material",
        "thickness",
        "shape",
        "surface",
        "unitLength",
        "outsideDia",
      ];
      const filledFieldsCount = requiredFields.reduce((count, field) => {
        return changedData[field] ? count + 1 : count;
      }, 0);

      // console.log(filledFieldsCount);

      if (filledFieldsCount < 4) {
        toast.error("Please fill at least 4 product details fields");
        setLoading(false);
        return;
      }

      const updateData = {
        id: product.id,
        ...changedData,
      };

      const response = await updateProduct(updateData);

      if (response) {
        toast.success("Product details updated");
        dispatch(
          updateProductDetails({ id: product.id, details: changedData })
        );
        dispatch(toggleProductExpand(product.id));
        setFormData((prev) => {
          const newData = { ...prev };
          delete newData[product.id];
          return newData;
        });
      }
    } catch (error) {
      toast.error(error.message);
      console.error("Failed to update product:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = (productId) => {
    setFormData((prev) => {
      const newData = { ...prev };
      delete newData[productId];
      return newData;
    });
    dispatch(toggleProductExpand(productId));
  };

  // console.log(products);
  return (
    <div className="w-full border-2 border-gray-300 rounded-lg">
      <table className="w-full bg-secondary rounded-lg">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left w-8">
              <input
                type="checkbox"
                className="w-6"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th className="p-3 text-left">Products</th>
            <th className="p-3 text-left">Action</th>
            <th className="p-3 text-left">Product Details</th>
            <th className="p-3 text-left">Price in Unit</th>
          </tr>
        </thead>
        <tbody>
          {(searchResults && searchResults.length > 0
            ? searchResults
            : filteredProducts
          ).map((product) => (
            <React.Fragment key={product.id}>
              <tr
                className={`${
                  product?.isExpanded && "hidden"
                } border-b-2 border-gray-300 bg-white hover:bg-gray-50`}
              >
                <td className="p-3">
                  <input
                    type="checkbox"
                    className="w-6"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => handleSelectProduct(product.id)}
                  />
                </td>
                <td className="p-3">
                  {product.material} {product.grade} {product.type}
                </td>
                <td className="p-3">
                  <div className="space-x-2">
                    <button
                      onClick={() => handleQuickEdit(product.id)}
                      className="text-blue-600"
                    >
                      Quick Edit
                    </button>
                    <span className="text-gray-300">|</span>
                    <button className="text-blue-600">
                      Add Product Details
                    </button>
                  </div>
                </td>
                <td className="px-3">
                  <div>
                    <div>Material: {product.material || "NA"}</div>
                    <div>Unit Length: {product.unitLength || "NA"}</div>
                    <div>Shape: {product.shape || "NA"}</div>
                  </div>
                </td>
                <td className="p-3 text-left">
                  {product?.price ? `${product.price}/KG` : "NA"}
                </td>
              </tr>
              {product?.isExpanded && (
                <tr>
                  <td colSpan="5" className="p-4 bg-gray-200">
                    <p className="font-semibold">Quick Edit</p>
                    <div className="flex justify-start gap-40 items-center border-b-2 border-gray-500">
                      <p>Title: {product.name}</p>
                      <div className="flex justify-start items-center gap-2 py-4">
                        <p>Price:</p>
                        <div className="w-full flex items-center bg-white border border-gray-400 rounded-full">
                          <select
                            value={formData[product.id]?.currency || "INR"}
                            name="currency"
                            onChange={(e) => handleInputChange(e, product.id)}
                            className="border-r-2 border-gray-400 px-5 py-1 bg-white rounded-l-full"
                          >
                            <option value="INR">INR</option>
                            <option value="USD">USD</option>
                          </select>
                          <input
                            name="price"
                            placeholder="price"
                            defaultValue={product.price}
                            onChange={(e) => handleInputChange(e, product.id)}
                            className="w-20 text-center"
                          />
                          <select
                            value={formData[product.id]?.unit || "KG"}
                            name="unit"
                            onChange={(e) => handleInputChange(e, product.id)}
                            className="border-l-2 border-gray-400 px-5 py-1 bg-gray-500 text-white rounded-full"
                          >
                            <option value="KG">KG</option>
                            <option value="MG">MG</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <p className="py-4">
                      <span className="font-semibold">Product Details </span>
                      <span className="text-red-700">
                        (Minimum 4 fields required)
                      </span>
                    </p>
                    <form
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                      onSubmit={(e) => handleUpdateSubmit(e, product)}
                    >
                      <div>
                        <div className="flex justify-between items-center gap-4">
                          <p>Material</p>
                          <input
                            name="material"
                            placeholder="Material"
                            defaultValue={product.material}
                            onChange={(e) => handleInputChange(e, product.id)}
                            className="px-4 border border-gray-400 rounded-full my-2"
                          />
                        </div>
                        <div className="flex justify-between items-center gap-4">
                          <p>Thickness</p>
                          <input
                            name="thickness"
                            placeholder="Thickness"
                            defaultValue={product.thickness}
                            onChange={(e) => handleInputChange(e, product.id)}
                            className="px-4 border border-gray-400 rounded-full my-2"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center gap-4">
                          <p>Shape</p>
                          <input
                            name="shape"
                            placeholder="Shape"
                            defaultValue={product.shape}
                            onChange={(e) => handleInputChange(e, product.id)}
                            className="px-4 border border-gray-400 rounded-full my-2"
                          />
                        </div>
                        <div className="flex justify-between items-center gap-4">
                          <p>Surface Finish</p>
                          <input
                            name="surface"
                            placeholder="Surface"
                            defaultValue={product.surface}
                            onChange={(e) => handleInputChange(e, product.id)}
                            className="px-4 border border-gray-400 rounded-full my-2"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center gap-4">
                          <p>Length</p>
                          <input
                            name="unitLength"
                            placeholder="Unit Length"
                            defaultValue={product.unitLength}
                            onChange={(e) => handleInputChange(e, product.id)}
                            className="px-4 border border-gray-400 rounded-full my-2"
                          />
                        </div>
                        <div className="flex justify-between items-center gap-4">
                          <p>Outside Dia</p>
                          <input
                            name="outsideDia"
                            placeholder="Outside Dia"
                            defaultValue={product.outsideDia}
                            onChange={(e) => handleInputChange(e, product.id)}
                            className="px-4 border border-gray-400 rounded-full my-2"
                          />
                        </div>
                      </div>
                      <div className="flex justify-start items-center gap-6">
                        <button
                          type="submit"
                          disabled={loading}
                          className="px-10 py-2 rounded-full bg-blue-600 text-white disabled:bg-blue-400"
                        >
                          {loading ? "Updating..." : "Update"}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleCancel(product.id)}
                          className="px-10 py-2 rounded-full border border-gray-400"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
