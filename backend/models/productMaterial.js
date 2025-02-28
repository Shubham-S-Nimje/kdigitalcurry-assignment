const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const ProductMaterials = sequelize.define(
  "productMaterials",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = ProductMaterials;
