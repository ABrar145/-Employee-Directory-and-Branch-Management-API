import { Request, Response } from "express";
import * as employeeService from "../services/employeeService";

export const getEmployeesByBranch = (req: Request, res: Response): void => {
  const branchId = parseInt(req.params.branchId);
  const employeesInBranch = employeeService.getEmployeesByBranch(branchId);

  if (employeesInBranch.length === 0) {
      // Instead of returning, just send the response using res
      res.status(404).json({ message: "No employees found for this branch" });
  } else {
      // Send the response with the employee data
      res.json(employeesInBranch);
  }
};


export const getEmployeesByDepartment = (req: Request, res: Response): void => {
  const department = req.params.department;
  const employeesInDepartment = employeeService.getEmployeesByDepartment(department);

  if (employeesInDepartment.length === 0) {
      // Send response without returning it
      res.status(404).json({ message: "No employees found in this department" });
  } else {
      // Send the employee data as a response
      res.json(employeesInDepartment);
  }
};