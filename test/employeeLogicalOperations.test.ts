import request from "supertest";
import app from "../src/app";

describe("Employee Logical Operations API", () => {
    let employeeId: number;

    beforeAll(async () => {
        // Create a test employee for these operations
        const response = await request(app)
            .post("/employees")
            .send({
                name: "John Doe",
                position: "Software Engineer",
                department: "IT",
                email: "john.doe@example.com",
                phone: "123-456-7890",
                branchId: 1,
            });
        employeeId = response.body.id;
    });

    it("should get all employees for a specific branch", async () => {
        const response = await request(app).get("/employees/branch/1");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it("should get all employees in a department", async () => {
        const response = await request(app).get("/employees/department/IT");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it("should return 404 if no employees found for the branch", async () => {
        const response = await request(app).get("/employees/branch/999");
        expect(response.status).toBe(404);
        expect(response.body.message).toBe("No employees found for this branch");
    });

    it("should return 404 if no employees found for the department", async () => {
        const response = await request(app).get("/employees/department/HR");
        expect(response.status).toBe(404);
        expect(response.body.message).toBe("No employees found in this department");
    });
});
