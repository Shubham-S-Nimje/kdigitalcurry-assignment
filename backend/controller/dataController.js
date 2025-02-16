const ProductGrades = require("../models/productGrade");
const ProductMaterials = require("../models/productMaterial");
const ProductTypes = require("../models/productType");

const metadataController = {
  async getMaterials(req, res) {
    try {
      const materials = await ProductMaterials.findAll();
      res.json(materials);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getProductTypes(req, res) {
    try {
      const productTypes = await ProductTypes.findAll();
      res.json(productTypes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAllGrades(req, res) {
    try {
      const grades = await ProductGrades.findAll();
      res.json(grades);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getGrades(req, res) {
    try {
      const { productType, productMaterial } = req.params;

      console.log("Fetching Grades for:", productType, productMaterial);

      const grades = await ProductGrades.findAll({
        attributes: ["name"],
        include: [
          {
            model: ProductTypes,
            where: { name: productType },
            attributes: [],
          },
          {
            model: ProductMaterials,
            where: { name: productMaterial },
            attributes: [],
          },
        ],
      });

      if (!grades.length) {
        return res.status(201).json({
          error: "No grades found for the selected product type and material",
        });
      }

      res.json(grades.map((grade) => grade.name));
    } catch (error) {
      console.error("Error fetching grades:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = metadataController;
