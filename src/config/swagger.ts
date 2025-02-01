import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Employee Directory and Branch Management API",
            version: "1.0.0",
            description: "API documentation for managing employees and branches",
        },
        servers: [{ url: "http://localhost:3000" }],
    },
    apis: ["./src/api/v1/routes/*.ts"], // Points to route files
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app: Express) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log("Swagger docs available at http://localhost:3000/api-docs");
};

export default setupSwagger;
