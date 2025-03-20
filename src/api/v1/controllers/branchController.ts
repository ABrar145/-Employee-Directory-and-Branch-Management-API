import { Request, Response, NextFunction } from "express";
import * as branchService from "../services/branchService";
import { Branch } from "../interfaces/branch";

const handleError = (error: unknown, next: NextFunction, message: string) => {
  const err = error instanceof Error ? error : new Error("An unknown error occurred");
  console.error(message, err);
  next(err); // Pass to Express error handler
};

// Create Branch
export const createBranch = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const branchData: Omit<Branch, "id"> = req.body;
    const newBranch = await branchService.createBranch(branchData);
    res.status(201).json(newBranch);
  } catch (error) {
    handleError(error, next, "Error creating branch");
  }
};

// Get Branch by ID
export const getBranchById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const branchId = parseInt(req.params.id);
    const branch = await branchService.getBranchById(branchId);
    if (!branch) {
      res.status(404).json({ message: "Branch not found" });
      return;
    }
    res.status(200).json(branch);
  } catch (error) {
    handleError(error, next, "Error fetching branch");
  }
};

// Update Branch
export const updateBranch = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const branchId = parseInt(req.params.id);
    const updatedData: Partial<Branch> = req.body;
    const updatedBranch = await branchService.updateBranch(branchId, updatedData);
    if (!updatedBranch) {
      res.status(404).json({ message: "Branch not found" });
      return;
    }
    res.status(200).json(updatedBranch);
  } catch (error) {
    handleError(error, next, "Error updating branch");
  }
};

// Delete Branch
export const deleteBranch = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const branchId = parseInt(req.params.id);
    const result = await branchService.deleteBranch(branchId);
    if (!result) {
      res.status(404).json({ message: "Branch not found" });
      return;
    }
    res.status(200).json({ message: "Branch deleted successfully" });
  } catch (error) {
    handleError(error, next, "Error deleting branch");
  }
};
