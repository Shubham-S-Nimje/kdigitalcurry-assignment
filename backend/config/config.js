require("dotenv").config();
const { FRONTEND_URL } = process.env;

// console.log(FRONTEND_URL);
module.exports = {
  allowedOrigins: ["self", FRONTEND_URL].filter(Boolean),
};
