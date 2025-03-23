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
        servers: [{ url: "http://localhost:3000" }], // Ensure correct server port
    },
    apis: ["./src/api/v1/routes/*.ts", "./dist/api/v1/routes/*.js"], // 🛠️ Include both TypeScript & compiled JavaScript files
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app: Express) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(" Swagger is set up at /api-docs");
};

export default setupSwagger;
