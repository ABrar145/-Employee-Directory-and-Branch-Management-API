import request from "supertest";
import app from "../src/app";

describe("Branch Management API", () => {
    it("should create a new branch", async () => {
        const response = await request(app)
            .post("/api/v1/branches")
            .send({ name: "Main Branch", address: "123 Main St", phone: "123-456-7890" });

        expect(response.status).toBe(201);
        expect(response.body.name).toBe("Main Branch");
    });

    it("should fetch all branches", async () => {
        const response = await request(app).get("/api/v1/branches");
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it("should fetch a branch by ID", async () => {
        const response = await request(app).get("/api/v1/branches/1");
        expect(response.status).toBe(200);
        expect(response.body.name).toBe("Main Branch");
    });

    it("should update a branch", async () => {
        const response = await request(app)
            .put("/api/v1/branches/1")
            .send({ address: "456 New St" });

        expect(response.status).toBe(200);
        expect(response.body.address).toBe("456 New St");
    });

    it("should delete a branch", async () => {
        const response = await request(app).delete("/api/v1/branches/1");
        expect(response.status).toBe(204);
    });

    it("should return 404 for a non-existent branch", async () => {
        const response = await request(app).get("/api/v1/branches/999");
        expect(response.status).toBe(404);
    });
});
