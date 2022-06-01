const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

module.exports = (app) => {
  const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
      title: "REST API for Rakuten Ranking",
      version: "1.0.0",
      description:
        "This is a REST API application made with Express. It retrieves data from Rakuten Rankin API.",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development server",
      },
    ],
  };

  const options = {
    swaggerDefinition,
    apis: ["./src/routes/*.js"], // These file paths should be relative to the root directory.
  };

  const swaggerSpec = swaggerJSDoc(options);

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
