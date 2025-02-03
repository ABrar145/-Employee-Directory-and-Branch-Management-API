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

export const getAllEmployees = (): Employee[] => {
    return employees;
};

export const getEmployeeById = (id: number): Employee | undefined => {
    return employees.find((employee) => employee.id === id);
};

export const addEmployee = (employeeData: Omit<Employee, "id">): Employee | string => {
    const duplicate = employees.some(
        (e) => e.email === employeeData.email || e.phone === employeeData.phone
    );
    if (duplicate) {
        return "Employee with the same email or phone already exists.";
    }

    const newEmployee: Employee = {
        id: Math.floor(Math.random() * 10000),
        ...employeeData,
    };

    employees.push(newEmployee);
    return newEmployee;
};

export const updateEmployee = (id: number, employeeData: Partial<Employee>): Employee | string => {
    const employee = getEmployeeById(id);
    if (!employee) return "Employee not found.";

    if (Object.keys(employeeData).length === 0) {
        return "No valid data provided for update.";
    }

    Object.assign(employee, employeeData);
    return employee;
};

export const deleteEmployee = (id: number): boolean | string => {
    const index = employees.findIndex((employee) => employee.id === id);
    if (index === -1) {
        return "Employee not found.";
    }
    employees.splice(index, 1);
    return true;
};

export const createEmployee = (employee: Employee) => {
    employees.push(employee);
    return employee;
};

export const getEmployeesForBranch = (branchId: number): Employee[] => {
    return employees.filter(employee => employee.branchId === branchId);
};

export const getEmployeesByDepartment = (department: string) => {
    return employees.filter(employee => employee.department === department);
};
