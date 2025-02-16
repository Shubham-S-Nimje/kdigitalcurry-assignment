import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const fetchInitialData = createAsyncThunk(
  "products/fetchInitialData",
  async () => {
    try {
      const [
        productsRes,
        productMaterialsRes,
        productTypesRes,
        productGradesRes,
      ] = await Promise.all([
        fetch("http://localhost:4000/api/products"),
        fetch("http://localhost:4000/api/data/product-materials"),
        fetch("http://localhost:4000/api/data/product-types"),
        fetch(`http://localhost:4000/api/data/product-grades`),
      ]);

      const products = await productsRes.json();
      const materials = await productMaterialsRes.json();
      const grades = await productGradesRes.json();
      const types = await productTypesRes.json();

      // console.log(products, materials, grades, types);

      return {
        products,
        productTypes: types.map((type) => type.name),
        productMaterials: materials.map((material) => material.name),
        productAllGrades: grades.map((grade) => grade.name),
      };
    } catch (error) {
      throw error;
    }
  }
);

export const bulkDeleteProducts = createAsyncThunk(
  "products/bulkDelete",
  async (bulkActionProductIds, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:4000/api/delete-product", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ requestedIds: bulkActionProductIds }),
      });

      if (!response.ok) {
        toast.error("Failed to delete products");
        throw new Error("Failed to delete products");
      }

      toast.success("Products deleted successfully");
      return bulkActionProductIds;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  products: [],
  filters: {
    product: "",
    material: "",
  },
  productCount: "",
  productTypes: [],
  productMaterials: [],
  productAllGrades: [],
  searchResults: [],
  bulkActionProductIds: [],
  isSearching: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleProductExpand: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.isExpanded = !product.isExpanded;
      }
    },
    updateProductDetails: (state, action) => {
      const { id, details } = action.payload;
      const product = state.products.find((p) => p.id === id);
      if (product) {
        Object.assign(product, details);
      }
    },
    addProduct: (state, action) => {
      const newProduct = {
        id: state.products.length + 1,
        ...action.payload,
        isExpanded: false,
      };
      state.products.push(newProduct);
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
      state.isSearching = false;
    },
    clearSearchResults: (state) => {
      state.searchResults = [];
      state.isSearching = false;
    },
    setIsSearching: (state, action) => {
      state.isSearching = action.payload;
    },
    setBulkActionProductIds: (state, action) => {
      state.bulkActionProductIds = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInitialData.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.productMaterials = action.payload.productMaterials;
        state.productTypes = action.payload.productTypes;
        state.productAllGrades = action.payload.productAllGrades;
      })
      .addCase(fetchInitialData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(bulkDeleteProducts.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => !action.payload.includes(product.id)
        );
      })
      .addCase(bulkDeleteProducts.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const {
  toggleProductExpand,
  updateProductDetails,
  addProduct,
  setFilters,
  setSearchResults,
  clearSearchResults,
  setIsSearching,
  setBulkActionProductIds,
} = productSlice.actions;

export default productSlice.reducer;
