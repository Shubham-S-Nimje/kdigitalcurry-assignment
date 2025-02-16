import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/productSlice";
import { RiGhost2Fill } from "react-icons/ri";
import { BiRightArrow } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import ProductTypeTable from "./addProductTables/ProductTypeTable";
import ProductMaterialTable from "./addProductTables/ProductMaterialTable";
import ProductGradeTable from "./addProductTables/ProductGradeTable";
import toast from "react-hot-toast";

const addnewProduct = async (
  selectedProduct,
  selectedMaterial,
  selectedGrades
) => {
  if (!selectedProduct || !selectedMaterial || selectedGrades.length === 0)
    return;

  try {
    const response = await fetch(`http://localhost:4000/api/add-product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        selectedProduct,
        selectedMaterial,
        selectedGrades,
      }),
    });

    if (!response.ok) {
      toast.error("Failed to add product");
      throw new Error("Failed to add product");
    }

    toast.success("Product added successfully");
    return await response.json();
  } catch (error) {
    toast.error(error.message);
    console.error("Error adding product:", error);
  }
};

const AddProductModal = () => {
  const dispatch = useDispatch();
  const { productTypes, productMaterials, productGrades } = useSelector(
    (state) => state.products
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedGrades, setSelectedGrades] = useState([]);

  // const availableGrades =
  //   selectedProduct && selectedMaterial
  //     ? productGrades[selectedProduct]?.[selectedMaterial] || []
  //     : [];

  const handleGradeSelection = (grade) => {
    setSelectedGrades((prevGrades) =>
      prevGrades.includes(grade)
        ? prevGrades.filter((g) => g !== grade)
        : [...prevGrades, grade]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(selectedProduct, selectedMaterial, selectedGrades);
    try {
      const response = await addnewProduct(
        selectedProduct,
        selectedMaterial,
        selectedGrades
      );

      // console.log(response);

      if (response) {
        dispatch(
          addProduct({
            material: response.material,
            grade: response.grade,
            type: response.type,
            shape: "",
            length: "",
            width: "",
            thickness: "",
          })
        );

        setIsOpen(false);
        setSelectedProduct("");
        setSelectedMaterial("");
        setSelectedGrades([]);
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  // console.log(productTypes, productMaterials, productGrades);
  // console.log(selectedProduct, selectedMaterial, selectedGrades);

  return (
    <div className="flex items-center justify-start gap-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-16 py-1 bg-primary text-white rounded-full hover:border border-primary hover:bg-secondary hover:text-black"
      >
        + Add Products
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg w-3/4 p-6"
          >
            <div className="flex justify-between items-center mb-4 border-b-2 border-gray-300">
              <h2 className="text-xl font-semibold">Add Products</h2>
              <div className="flex mb-2 items-center justify-end gap-4 text-primary">
                <p>
                  {(selectedProduct ? 1 : 0) +
                    (selectedMaterial ? 1 : 0) +
                    (selectedGrades?.length || 0)}
                  /
                  {(productTypes?.length || 0) +
                    (productMaterials?.length || 0) +
                    (productGrades?.length || 0)}{" "}
                  Products Selected
                </p>

                <button
                  onClick={() => setIsOpen(false)}
                  className="border border-primary hover:bg-primary hover:text-white px-2 rounded-full"
                >
                  X
                </button>
              </div>
            </div>

            <div className="flex justify-center items-top gap-4">
              <ProductTypeTable
                productTypes={productTypes}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
              />

              <ProductMaterialTable
                productMaterials={productMaterials}
                selectedMaterial={selectedMaterial}
                setSelectedMaterial={setSelectedMaterial}
              />

              <ProductGradeTable
                selectedProduct={selectedProduct}
                selectedMaterial={selectedMaterial}
                selectedGrades={selectedGrades}
                productGrades={productGrades}
                handleGradeSelection={handleGradeSelection}
              />
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-50 text-gray-600 rounded hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={
                  !selectedProduct ||
                  !selectedMaterial ||
                  selectedGrades.length === 0
                }
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:bg-blue-300"
              >
                Add Products
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddProductModal;
