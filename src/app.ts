import express from "express";
import morgan from "morgan";
import setupSwagger from "./config/swagger";

const app = express();

// Middleware for logging
app.use(morgan("combined"));

// Setup Swagger documentation
setupSwagger(app);

// Basic health check route
app.get("/health", (req, res) => {
    res.status(200).send("Server is healthy");
});

export default app;
