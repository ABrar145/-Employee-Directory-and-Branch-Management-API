import { Router } from "express";
import * as employeeController from "../controllers/employeeController";

const router = Router();

/**
 * @swagger
  * /api/v1/employees:
 *   get:
 *     summary: Get all employees
 *     description: Retrieves a list of all employees.
 *     responses:
 *       200:
 *         description: List of employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 */
router.get("/", employeeController.getAllEmployees); // ✅ Add this route

/**
 * @swagger
* /api/v1/employees/branch/{branchId}:
 *   get:
 *     summary: Get all employees for a specific branch
 *     description: Retrieves all employees belonging to the specified branch ID.
 */
router.get("/branch/:branchId", employeeController.getEmployeesByBranch);

/**
 * @swagger
 * /api/v1/employees/department/{department}:
 *   get:
 *     summary: Get all employees in a department
 *     description: Retrieves all employees in the specified department.
 */
router.get("/department/:department", employeeController.getEmployeesByDepartment);

export default router;
