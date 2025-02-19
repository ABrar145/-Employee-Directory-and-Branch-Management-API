import { Request, Response, NextFunction } from "express";
import { BranchModel } from '../models/branchModel';

export async function createBranch(req: Request, res: Response, next: NextFunction) {
  try {
      const branch = await BranchModel.createBranch(req.body);
      res.status(201).json(branch);
  } catch (error) {
      next(error);
  }
}

export async function getBranchById(req: Request, res: Response, next: NextFunction) {
  try {
      const branch = await BranchModel.getBranchById(req.params.id);
      res.json(branch);
  } catch (error) {
      next(error);
  }
}

export async function updateBranch(req: Request, res: Response, next: NextFunction) {
  try {
      const updatedBranch = await BranchModel.updateBranch(req.params.id, req.body);
      res.json(updatedBranch);
  } catch (error) {
      next(error);
  }
}

export async function deleteBranch(req: Request, res: Response, next: NextFunction) {
  try {
      const response = await BranchModel.deleteBranch(req.params.id);
      res.json(response);
  } catch (error) {
      next(error);
  }
}
