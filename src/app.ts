import express from "express";
import morgan from "morgan";
import setupSwagger from "./config/swagger";
import employeeRoutes from "./api/v1/routes/employeeRoutes";
import branchRoutes from "./api/v1/routes/branchRoutes";
import healthRoutes from './api/v1/routes/healthRoutes';
import dotenv from "dotenv";
import helmet from "helmet";

const app = express();
require('dotenv').config();

// Security middleware
app.use(helmet());

app.use(morgan("combined"));
app.use(express.json()); // Middleware for parsing JSON
app.use('/health', healthRoutes);

setupSwagger(app);

app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/branches", branchRoutes);

export default app;
