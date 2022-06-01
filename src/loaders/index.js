const express = require("./express");
const swagger = require("./swagger");

module.exports = (app) => {
  express(app);
  swagger(app);
};
