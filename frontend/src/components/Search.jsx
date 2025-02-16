import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../store/productSlice";
import toast from "react-hot-toast";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const dispatch = useDispatch();
  const { searchResults } = useSelector((state) => state.products);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchTerm && isTyping) {
        handleSearch();
        setIsTyping(false);
      }
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      console.warn("Search term is empty.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:4000/api/search-product?term=${encodeURIComponent(
          searchTerm
        )}`
      );

      if (!response.ok) {
        setSearchData(await response.json());
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setSearchData(data);
    } catch (error) {
      console.error("Search failed:", error.message);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsTyping(true);
  };

  return (
    <div className="mb-4 flex items-center justify-start gap-4">
      <div className="flex justify-start items-center w-1/2">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search products..."
          className="w-full p-3 px-6 bg-white border rounded-l-lg"
        />
        <button
          onClick={() => {
            {
              searchData.length
                ? toast.success(`${searchData.length} Products Found`)
                : toast.error(`${searchData.message}`);
            }
            dispatch(setSearchResults(searchData));
          }}
          className="w-fit px-10 py-3 bg-primary text-white rounded-r-lg hover:border border-primary hover:bg-secondary hover:text-black"
        >
          Search
        </button>
      </div>
      {isTyping && searchTerm && (
        <div className="transform -translate-y-1/2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
        </div>
      )}
      {searchResults && searchTerm && (
        <button
          onClick={() => {
            dispatch(setSearchResults([]));
            setSearchTerm("");
          }}
          className="w-fit px-10 py-3 border bg-secondary text-black rounded-lg hover:border border-primary hover:bg-secondary hover:text-black"
        >
          Clear
        </button>
      )}
      {searchResults && searchTerm && (
        <p>
          {searchResults.length ? (
            `${searchResults.length} Products Found`
          ) : (
            <span className="text-red-600">{searchData.message}</span>
          )}
        </p>
      )}
    </div>
  );
};

export default Search;
