const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOption");
const sequelize = require("./utils/database");

const Products = require("./models/products");
const ProductTypes = require("./models/productType");
const ProductMaterials = require("./models/productMaterial");
const ProductGrades = require("./models/productGrade");

const openRoutes = require("./routes/openRoutes");

const { PORT } = process.env;

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//open Routes
app.use("/api", openRoutes);

// Database relations
ProductTypes.hasMany(ProductGrades);
ProductGrades.belongsTo(ProductTypes);

ProductMaterials.hasMany(ProductGrades);
ProductGrades.belongsTo(ProductMaterials);

sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to start server:", err);
  });
