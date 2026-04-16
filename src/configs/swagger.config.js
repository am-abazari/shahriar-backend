const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");
const SwaggerConfig = (app) => {
  const documents = path.join(process.cwd(), "src", "docs", "*.swagger.js");

  const swaggerDoc = swaggerJSDoc({
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Shahriar",
        description: "Shahriar backend documents",
        version: "1.0.0",
      },
    },
    apis: [documents],
  });
  const swagger = swaggerUI.setup(swaggerDoc, {
    customSiteTitle: "shahriar",
  });

  app.use("/docs", swaggerUI.serve, swagger);
};

module.exports = { SwaggerConfig };
