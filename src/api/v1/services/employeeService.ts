import { Employee } from "../interfaces/employee";

let employees: Employee[] = [];
let employeeIdCounter = 1;

export const getEmployees = (): Employee[] => employees;

export const getEmployeeById = (id: number): Employee | undefined =>
    employees.find(emp => emp.id === id);

export const createEmployee = (employeeData: Omit<Employee, "id">): Employee => {
    const newEmployee = { id: employeeIdCounter++, ...employeeData };
    employees.push(newEmployee);
    return newEmployee;
};

export const updateEmployee = (id: number, updates: Partial<Employee>): Employee | null => {
    const index = employees.findIndex(emp => emp.id === id);
    if (index === -1) return null;

    employees[index] = { ...employees[index], ...updates };
    return employees[index];
};

export const deleteEmployee = (id: number): boolean => {
    const index = employees.findIndex(emp => emp.id === id);
    if (index === -1) return false;

    employees.splice(index, 1);
    return true;
};
