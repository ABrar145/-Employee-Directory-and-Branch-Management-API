import express from "express";
import morgan from "morgan";
import setupSwagger from "./config/swagger";
import employeeRoutes from "./api/v1/routes/employeeRoutes";
import branchRoutes from "./api/v1/routes/branchRoutes";

const app = express();

app.use(morgan("combined"));
app.use(express.json()); // Middleware for parsing JSON

setupSwagger(app);

app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/branches", branchRoutes);

export default app;
