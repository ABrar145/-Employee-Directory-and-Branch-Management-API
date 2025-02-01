import express from "express";

const router = express.Router();

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Retrieve a list of employees
 *     description: Fetches all employees from the database.
 *     responses:
 *       200:
 *         description: Successfully retrieved employees
 *       500:
 *         description: Server error
 */
router.get("/employees", (req, res) => {
    res.status(200).json({ message: "List of employees" });
});

export default router;
