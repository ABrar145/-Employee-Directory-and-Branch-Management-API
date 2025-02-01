import express from "express";
import morgan from "morgan";

const app = express();

// Middleware for request logging
app.use(morgan("combined"));

// Basic health check route
app.get("/health", (req, res) => {
    res.status(200).send("Server is healthy");
});

export default app;
