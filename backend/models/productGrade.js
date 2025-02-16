const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const ProductGrades = sequelize.define(
  "productGrades",
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
    },
  },
  {
    timestamps: true,
  }
);

module.exports = ProductGrades;
