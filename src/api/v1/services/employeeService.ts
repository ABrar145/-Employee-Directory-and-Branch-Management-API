import { Employee } from "../interfaces/employee";

let employees: Employee[] = [
    { id: 1, name: "Alice Johnson", position: "Branch Manager", department: "Management", email: "alice.johnson@pixell-river.com", phone: "604-555-0148", branchId: 1 },
    { id: 2, name: "Amandeep Singh", position: "Customer Service Representative", department: "Customer Service", email: "amandeep.singh@pixell-river.com", phone: "780-555-0172", branchId: 2 },
    { id: 3, name: "Maria Garcia", position: "Loan Officer", department: "Loans", email: "maria.garcia@pixell-river.com", phone: "204-555-0193", branchId: 3 },
    { id: 4, name: "James Wilson", position: "IT Support Specialist", department: "IT", email: "james.wilson@pixell-river.com", phone: "604-555-0134", branchId: 1 },
    { id: 5, name: "Linda Martinez", position: "Financial Advisor", department: "Advisory", email: "linda.martinez@pixell-river.com", phone: "780-555-0165", branchId: 2 },
    { id: 6, name: "Michael Brown", position: "Teller", department: "Operations", email: "michael.brown@pixell-river.com", phone: "204-555-0187", branchId: 3 },
    { id: 7, name: "Patricia Taylor", position: "Operations Manager", department: "Operations", email: "patricia.taylor@pixell-river.com", phone: "204-555-0204", branchId: 3 },
    { id: 8, name: "Chen Wei", position: "Senior Loan Officer", department: "Loans", email: "chen.wei@pixell-river.com", phone: "204-555-0218", branchId: 5 },
    { id: 9, name: "Charles Thomas", position: "Accountant", department: "Finance", email: "charles.thomas@pixell-river.com", phone: "204-555-0225", branchId: 5 },
    { id: 10, name: "Elizabeth Jackson", position: "Marketing Specialist", department: "Marketing", email: "elizabeth.jackson@pixell-river.com", phone: "204-555-0234", branchId: 5 },
];

export const createEmployee = (employeeData: Omit<Employee, "id">): Employee => {
    const newEmployee: Employee = { id: employees.length + 1, ...employeeData };
    employees.push(newEmployee);
    return newEmployee;
};

export const getAllEmployees = (): Employee[] => employees;

export const getEmployeeById = (id: number): Employee | undefined => {
    return employees.find(emp => emp.id === id);
};

export const getEmployeesByBranch = (branchId: number): Employee[] => {
    return employees.filter(emp => emp.branchId === branchId);
};

export const getEmployeesByDepartment = (department: string): Employee[] => {
    return employees.filter(emp => emp.department.toLowerCase() === department.toLowerCase());
};

export const updateEmployee = (id: number, updatedData: Partial<Employee>): Employee | null => {
    const empIndex = employees.findIndex(emp => emp.id === id);
    if (empIndex === -1) return null;

    employees[empIndex] = { ...employees[empIndex], ...updatedData };
    return employees[empIndex];
};

export const deleteEmployee = (id: number): boolean => {
    const initialLength = employees.length;
    employees = employees.filter(emp => emp.id !== id);
    return employees.length < initialLength;
};
