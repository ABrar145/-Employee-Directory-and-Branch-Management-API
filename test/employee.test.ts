import request from "supertest";
import app from "../src/app";

describe("Employee API", () => {
    it("POST /employees - should create a new employee", async () => {
        const res = await request(app).post("/api/v1/employees").send({
            name: "John Doe",
            position: "Developer",
            department: "IT",
            email: "john.doe@example.com",
            phone: "123-456-7890",
            branchId: 1
        });

        expect(res.status).toBe(201);
        expect(res.body.name).toBe("John Doe");
    });

    it("GET /employees - should return all employees", async () => {
        const res = await request(app).get("/api/v1/employees");
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
