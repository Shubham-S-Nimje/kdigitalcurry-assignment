const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const Products = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    material: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thickness: {
      type: DataTypes.STRING,
    },
    shape: {
      type: DataTypes.STRING,
    },
    surface: {
      type: DataTypes.STRING,
    },
    unitLength: {
      type: DataTypes.STRING,
    },
    outsideDia: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    currency: {
      type: DataTypes.ENUM("INR", "USD"),
    },
    unit: {
      type: DataTypes.ENUM("KG", "MG"),
    },
    grade: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Products;
