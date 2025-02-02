import express from "express";
import {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
} from "../services/employeeService";

const router = express.Router();

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Get all employees
 */
router.get("/", (req, res) => res.json(getEmployees()));

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     summary: Get employee by ID
 */
router.get("/:id", (req, res) => {
    const employee = getEmployeeById(Number(req.params.id));
    return employee ? res.json(employee) : res.status(404).json({ error: "Employee not found" });
});

/**
 * @swagger
 * /employees:
 *   post:
 *     summary: Create a new employee
 */
router.post("/", (req, res) => {
    const newEmployee = createEmployee(req.body);
    res.status(201).json(newEmployee);
});

/**
 * @swagger
 * /employees/{id}:
 *   put:
 *     summary: Update an employee
 */
router.put("/:id", (req, res) => {
    const updatedEmployee = updateEmployee(Number(req.params.id), req.body);
    return updatedEmployee ? res.json(updatedEmployee) : res.status(404).json({ error: "Employee not found" });
});

/**
 * @swagger
 * /employees/{id}:
 *   delete:
 *     summary: Delete an employee
 */
router.delete("/:id", (req, res) => {
    return deleteEmployee(Number(req.params.id)) ? res.sendStatus(204) : res.status(404).json({ error: "Employee not found" });
});

export default router;
