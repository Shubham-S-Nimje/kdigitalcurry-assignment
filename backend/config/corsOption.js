const config = require("./config");

// console.log(config.allowedOrigins);
const corsOptions = {
  origin: config.allowedOrigins,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

module.exports = corsOptions;
