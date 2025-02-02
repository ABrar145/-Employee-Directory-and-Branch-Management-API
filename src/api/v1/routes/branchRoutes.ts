import express from "express";
import {
    getBranches,
    getBranchById,
    createBranch,
    updateBranch,
    deleteBranch
} from "../services/branchService";

const router = express.Router();

router.get("/", (req, res) => res.json(getBranches()));

router.get("/:id", (req, res) => {
    const branch = getBranchById(Number(req.params.id));
    return branch ? res.json(branch) : res.status(404).json({ error: "Branch not found" });
});

router.post("/", (req, res) => {
    const newBranch = createBranch(req.body);
    res.status(201).json(newBranch);
});

router.put("/:id", (req, res) => {
    const updatedBranch = updateBranch(Number(req.params.id), req.body);
    return updatedBranch ? res.json(updatedBranch) : res.status(404).json({ error: "Branch not found" });
});

router.delete("/:id", (req, res) => {
    return deleteBranch(Number(req.params.id)) ? res.sendStatus(204) : res.status(404).json({ error: "Branch not found" });
});

export default router;
