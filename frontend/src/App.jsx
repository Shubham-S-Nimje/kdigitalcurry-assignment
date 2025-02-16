import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import ProductList from "./components/ProductList";
import AddProductModal from "./components/addProduct/AddProductModal";
import Filters from "./components/Filters";
import Search from "./components/Search";
import { fetchInitialData } from "./store/productSlice";
import { Toaster } from "react-hot-toast";

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center">
    <div className="bg-red-50 p-4 text-center rounded-lg shadow text-primary">
      <h3 className="font-bold mb-2">Error Loading Data</h3>
      <p>{message}</p>
      <button
        onClick={() => store.dispatch(fetchInitialData())}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
      >
        Retry
      </button>
    </div>
  </div>
);

const AppContent = () => {
  const { loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    store.dispatch(fetchInitialData());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="sticky top-0 bg-white shadow border-b border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-primary">Directory Listing</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center mb-6">
          <AddProductModal />
        </div>
        <Search />
        <Filters />
        <ProductList />
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <AppContent />
    </Provider>
  );
};

export default App;
