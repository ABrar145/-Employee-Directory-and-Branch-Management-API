import { Router } from "express";
import { createBranch, getBranchById, updateBranch, deleteBranch } from "../controllers/branchController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Branch Management
 *   description: API endpoints for managing branches
 */

/**


/**
 * @swagger
 * /api/v1/branches:
 *   post:
 *     summary: Create a new branch
 *     tags: [Branch Management]
 */
router.post("/", createBranch);

/**
 * @swagger
 * /api/v1/branches/{id}:
 *   get:
 *     summary: Get branch by ID
 *     tags: [Branch Management]
 */
router.get("/:id", getBranchById);

/**
 * @swagger
 * /api/v1/branches/{id}:
 *   put:
 *     summary: Update a branch
 *     tags: [Branch Management]
 */
router.put("/:id", updateBranch);

/**
 * @swagger
 * /api/v1/branches/{id}:
 *   delete:
 *     summary: Delete a branch
 *     tags: [Branch Management]
 */
router.delete("/:id", deleteBranch);

export default router;
