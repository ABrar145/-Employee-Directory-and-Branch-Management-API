import { Router } from "express";
import {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
} from "../controllers/employeeController";

const router = Router();

/**
 * @swagger
 * /employees:
 *   post:
 *     summary: Create a new employee
 *     description: Adds a new employee to the directory.
 *     responses:
 *       201:
 *         description: Employee created successfully
 */
router.post("/", createEmployee);

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Get all employees
 *     description: Returns a list of all employees.
 */
router.get("/", getAllEmployees);

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     summary: Get employee by ID
 *     description: Returns a specific employee by their ID.
 */
router.get("/:id", getEmployeeById);

/**
 * @swagger
 * /employees/{id}:
 *   put:
 *     summary: Update employee details
 *     description: Updates an existing employee's details.
 */
router.put("/:id", updateEmployee);

/**
 * @swagger
 * /employees/{id}:
 *   delete:
 *     summary: Delete an employee
 *     description: Removes an employee from the directory.
 */
router.delete("/:id", deleteEmployee);

export default router;
