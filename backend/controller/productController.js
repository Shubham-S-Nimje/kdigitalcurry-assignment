const { Types } = require("mysql2");
const Product = require("../models/products");
const { Op } = require("sequelize");

const productController = {
  async getAllProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // async getProduct(req, res) {
  //   try {
  //     const product = await Product.findByPk(req.params.id);
  //     if (product) {
  //       res.json(product);
  //     } else {
  //       res.status(404).json({ message: "Product not found" });
  //     }
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // },

  async createProduct(req, res) {
    const { selectedProduct, selectedMaterial, selectedGrades } = req.body;

    try {
      const product = await Product.create({
        type: selectedProduct,
        material: selectedMaterial,
        grade: selectedGrades,
      });
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async updateProduct(req, res) {
    const {
      currency,
      id,
      length,
      material,
      outsideDia,
      price,
      shape,
      surfaceFinish,
      thickness,
      unit,
    } = req.body;
    // console.log(req.body);
    try {
      const product = await Product.findByPk(id);
      if (product) {
        await product.update({
          material,
          thickness,
          shape,
          surface: surfaceFinish,
          unitLength: length,
          outsideDia,
          price,
          currency,
          unit,
          // grade,
          // type,
        });
        res.json(product);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async filterProducts(req, res) {
    try {
      const { product, material } = req.query;
      const whereClause = {};

      if (product) whereClause.product = product;
      if (material) whereClause.material = material;

      const products = await Product.findAll({
        where: whereClause,
      });

      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getSearchedProduct(req, res) {
    const { term } = req.query;

    if (!term) {
      return res.status(400).json({ message: "Search term is required" });
    }

    try {
      const products = await Product.findAll({
        where: {
          [Op.or]: [
            { type: { [Op.like]: `%${term}%` } },
            { material: { [Op.like]: `%${term}%` } },
          ],
        },
      });

      if (products.length > 0) {
        res.json(products);
      } else {
        res.status(404).json({ message: "No products found" });
      }
    } catch (error) {
      console.error("Error searching for products:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async bulkDeleteProduct(req, res) {
    const { requestedIds } = req.body;

    if (!Array.isArray(requestedIds) || requestedIds.length === 0) {
      return res
        .status(400)
        .json({ message: "Invalid request: No IDs provided" });
    }

    try {
      const deletedCount = await Product.destroy({
        where: { id: requestedIds },
      });

      if (deletedCount > 0) {
        res.json({ message: "Products deleted successfully" });
      } else {
        res
          .status(404)
          .json({ message: "No products found with provided IDs" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = productController;
