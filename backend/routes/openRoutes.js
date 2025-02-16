const express = require("express");
const router = express.Router();

const productController = require("../controller/productController");
const dataController = require("../controller/dataController");

router.get("/products", productController.getAllProducts);
router.get("/data/product-materials", dataController.getMaterials);
router.get("/data/product-types", dataController.getProductTypes);
router.get("/data/product-grades", dataController.getAllGrades);
router.get(
  "/data/product-grades/:productType/:productMaterial",
  dataController.getGrades
);

router.post("/add-product", productController.createProduct);
router.put("/update-product", productController.updateProduct);
router.get("/search-product", productController.getSearchedProduct);
router.delete("/delete-product", productController.bulkDeleteProduct);
// router.get("/filter", productController.filterProducts);
// router.get("/:id", productController.getProduct);

module.exports = router;
