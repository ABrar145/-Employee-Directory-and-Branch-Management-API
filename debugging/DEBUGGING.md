Debugging Analysis
Scenario 1: Employee Retrieval by Branch (GET /employees/branch/:branchId)
Breakpoint Location: src/api/v1/controllers/employeeController.ts, Line 4 (getEmployeesByBranch method)
Objective: Investigate how employees are retrieved based on the branch ID and check if the branch ID is parsed correctly and the employee data is returned as expected.
Debugger Observations
Variable States:

req.params.branchId: "1" (This is the branch ID passed from the request URL)
branchId: 1 (Parsed value of branchId after calling parseInt(req.params.branchId))
employeesInBranch: An array containing employee objects or an empty array if no employees match the branch ID.
Call Stack:

getEmployeesByBranch → employeeService.getEmployeesByBranch
Behavior:

The value of branchId is successfully parsed from the request parameters.
The employeeService.getEmployeesByBranch(branchId) function is called to retrieve employees.
If no employees are found for the given branch ID, the response returns a 404 status with a message "No employees found for this branch". Otherwise, it sends a 200 response with the employee data.

Scenario 2: Branch Creation (POST /branches)
Breakpoint Location: src/api/v1/controllers/branchController.ts, Line 65 (createBranch method)
Objective: Debug the process of creating a new branch and check whether the data is being correctly passed and handled to create a new branch in the system.
Debugger Observations
Variable States:

req.body: { name: "Vancouver Branch", address: "1300 Burrard St, Vancouver", phone: "604-555-1234" }
branchData: Same as req.body since no validation or transformation occurs before passing to branchService.createBranch.
newBranch: { id: 1, name: "Vancouver Branch", address: "1300 Burrard St, Vancouver", phone: "604-555-1234" } (The new branch object created by branchService.createBranch).
Call Stack:

createBranch → branchService.createBranch
Behavior:

The branchData is correctly received from the request body.
The createBranch method in the service is called, and the new branch is added to the in-memory branches array.
The res.status(201).json(newBranch) is executed, and the new branch object is sent back in the response.

Scenario 3: Branch Deletion (DELETE /branches/:id)
Breakpoint Location: src/api/v1/controllers/branchController.ts, Line 11 (deleteBranch method)
Objective: Investigate the branch deletion logic and ensure the correct response is returned based on whether the branch is found or not.
Debugger Observations
Variable States:

req.params.id: "1" (The ID of the branch to delete passed in the request URL)
branchId: 1 (The parsed value of branchId from the URL parameter)
success: true or false, depending on whether the branch with the given ID was found and deleted.
Call Stack:

deleteBranch → branchService.deleteBranch
Behavior:

The branchId is successfully parsed from the request URL.
The branchService.deleteBranch method is called to delete the branch.
If the branch is found and deleted, the response returns a 204 No Content status code.
If the branch is not found, the response returns a 404 with the message "Branch not found".

----------------------------------------------------------------------

Scenario 1: Authentication Middleware Debugging

Breakpoint Location: src/api/v1/middleware/authMiddleware.ts (Line 3)

Objective: Investigate how the authentication middleware processes authorization headers.

Debugger Observations

Variable States:

req.headers.authorization: Contains the token provided in the request.

Call Stack:

authMiddleware.ts → branchRoutes.ts → app.ts

Behavior:

If the authorization header is missing or incorrect, a 403 error is returned.

If valid, request proceeds to the next middleware/controller.

Analysis

What did you learn?

Ensures only authorized users access protected endpoints.

Unexpected Behavior?

If authHeader is incorrectly formatted, access is denied.

Areas for Improvement?

Implement JWT-based authentication instead of hardcoded tokens.

How does this help?

Strengthens API security by validating authentication headers.

Scenario 2: Firestore Branch Model Debugging

Breakpoint Location: src/api/v1/models/branchModel.ts (Line 6)

Objective: Investigate how Firestore interacts with the branch collection and handles errors.

Debugger Observations

Variable States:

firestore: Firestore instance connected to the database.

data: The request payload being validated.

Call Stack:

branchModel.ts → branchController.ts → branchRoutes.ts

Behavior:

If a required field (name, address, phone) is missing, an error is thrown.

If Firestore operations fail, error logs are printed to console.

Analysis

What did you learn?

Firestore throws an error if document structure is incorrect.

Unexpected Behavior?

If Firestore credentials are missing, API fails to connect.

Areas for Improvement?

Add structured error handling to provide clearer messages.

How does this help?

Ensures Firestore operations are reliable and handle edge cases.

Scenario 3: Joi Validation Debugging

Breakpoint Location: src/api/v1/schemas/branchSchema.ts (Line 3)

Objective: Investigate how Joi validates incoming branch data before Firestore operations.

Debugger Observations

Variable States:

req.body: Contains incoming request data.

validationResult.error: Stores validation errors if present.

Call Stack:

branchSchema.ts → validationMiddleware.ts → branchRoutes.ts

Behavior:

If a field is missing or incorrect, a 400 error response is returned.

If validation passes, request moves forward to Firestore operations.

Analysis

What did you learn?

Validation ensures data consistency before database interactions.

Unexpected Behavior?

If regex for phone is incorrect, API rejects valid numbers.

Areas for Improvement?

Provide more user-friendly validation error messages.

How does this help?

Prevents invalid data from entering the database, reducing potential issues.

