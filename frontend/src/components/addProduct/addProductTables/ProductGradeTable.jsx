import React, { useEffect, useState } from "react";

const ProductGradeTable = ({
  selectedProduct,
  selectedMaterial,
  selectedGrades,
  handleGradeSelection,
}) => {
  const [fetchedGrades, setFetchedGrades] = useState([]);

  useEffect(() => {
    const fetchGrades = async () => {
      if (!selectedProduct || !selectedMaterial) return;
      try {
        const response = await fetch(
          `http://localhost:4000/api/data/product-grades/${selectedProduct}/${selectedMaterial}`
        );
        const data = await response.json();
        setFetchedGrades(data);
      } catch (error) {
        console.error("Error fetching grades:", error);
      }
    };

    fetchGrades();
  }, [selectedProduct, selectedMaterial]);

  // console.log(fetchedGrades, fetchedGrades.error);

  return (
    <div className="w-full rounded-lg shadow ring-1 ring-gray-300">
      <table className="w-full">
        <thead className="border rounded-lg">
          <tr className="border-b-2 border-gray-400">
            <th className="p-3 text-left">Grades</th>
          </tr>
        </thead>
      </table>
      <div className="max-h-96 overflow-y-auto my-2">
        <table className="w-full">
          <tbody className="py-4 max-h-60 overflow-y-auto">
            {selectedProduct && selectedMaterial && fetchedGrades.length > 0 ? (
              fetchedGrades?.map((grade, index) => (
                <tr key={index} className="hover:bg-gray-100 cursor-pointer">
                  <td>
                    <div
                      className={`p-2 mx-2 flex items-center justify-between ${
                        selectedGrades.includes(grade)
                          ? "bg-secondary rounded-full"
                          : ""
                      }`}
                      onClick={() => handleGradeSelection(grade)}
                    >
                      <p>
                        {selectedMaterial} {grade} {selectedProduct}
                      </p>
                      <input
                        type="checkbox"
                        checked={selectedGrades.includes(grade)}
                        className="mr-2 w-6"
                        readOnly
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-b bg-white hover:bg-gray-50 cursor-pointer">
                {!selectedProduct && !selectedMaterial && (
                  <td className="p-3 flex items-center">
                    Please Select
                    {!selectedProduct && " Product"}
                    {!selectedMaterial && " Material"}
                  </td>
                )}
                {selectedProduct && selectedMaterial && (
                  <td className="p-3 flex items-center">
                    {selectedProduct &&
                      selectedMaterial &&
                      (fetchedGrades.error || fetchedGrades.length === 0) &&
                      "No Grades Found"}
                  </td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductGradeTable;
