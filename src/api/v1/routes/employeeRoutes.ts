import { Router } from "express";
import * as employeeController from "../controllers/employeeController";

const router = Router();

/**
 * @swagger
 * /employees/branch/{branchId}:
 *   get:
 *     summary: Get all employees for a specific branch
 *     description: Retrieves all employees belonging to the specified branch ID.
 *     parameters:
 *       - name: branchId
 *         in: path
 *         required: true
 *         description: ID of the branch to retrieve employees from
 *         schema:
 *           type: integer
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
router.get("/branch/:branchId", employeeController.getEmployeesByBranch);

/**
 * @swagger
 * /employees/department/{department}:
 *   get:
 *     summary: Get all employees in a department
 *     description: Retrieves all employees in the specified department.
 *     parameters:
 *       - name: department
 *         in: path
 *         required: true
 *         description: Name of the department to filter employees by
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of employees in the department
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 */
router.get("/department/:department", employeeController.getEmployeesByDepartment);

export default router;
