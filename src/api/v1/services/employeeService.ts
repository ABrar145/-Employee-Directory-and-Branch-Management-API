import { Employee } from "../interface/employee";
  
  const employees: Employee[] = [
    { id: "1", name: "Alice Johnson", position: "Branch Manager", department: "Management", email: "alice.johnson@pixell-river.com", phone: "604-555-0148", branchId: parseInt("101") },
    { id: "2", name: "Amandeep Singh", position: "Customer Service Representative", department: "Customer Service", email: "amandeep.singh@pixell-river.com", phone: "780-555-0172", branchId: parseInt("102") },
    { id: "3", name: "Maria Garcia", position: "Loan Officer", department: "Loans", email: "maria.garcia@pixell-river.com", phone: "204-555-0193", branchId: parseInt("103") },
  ];
  
  
  export const getAllEmployees = (): Employee[] => {
    return employees;
  };
  
  export const getEmployeeById = (id: string): Employee | undefined => {
    return employees.find((employee) => employee.id === id);
  };
  
  export const addEmployee = (employeeData: Omit<Employee, "id">): Employee | string => {
    // Check for duplicate email or phone
    const duplicate = employees.some(
      (e) => e.email === employeeData.email || e.phone === employeeData.phone
    );
    if (duplicate) {
      return "Employee with the same email or phone already exists.";
    }
  
    const newEmployee: Employee = {
      id: (Math.random() * 10000).toFixed(0),
      ...employeeData,
    };
  
    employees.push(newEmployee);
    return newEmployee;
  };
  
  export const updateEmployee = (id: string, employeeData: Partial<Employee>): Employee | string => {
    const employee = getEmployeeById(id);
    if (!employee) return "Employee not found.";
  
    if (Object.keys(employeeData).length === 0) {
      return "No valid data provided for update.";
    }
  
    Object.assign(employee, employeeData);
    return employee;
  };
  
  export const deleteEmployee = (id: string): boolean | string => {
    const index = employees.findIndex((employee) => employee.id === id);
    if (index === -1) {
      return "Employee not found.";
    }
    employees.splice(index, 1);
    return true;
  };
  
// Get all employees for a branch
export const getEmployeesForBranch = (branchId: string): Employee[] => {
    const branchIdNumber = parseInt(branchId); // Parse branchId to a number
    return employees.filter(employee => employee.branchId === branchIdNumber);
};


// Get all employees for a department
export const getEmployeesByDepartment = (department: string) => {
    return employees.filter(employee => employee.department === department);
};