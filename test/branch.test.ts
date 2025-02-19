import request from 'supertest';
import app from '../src/app'; 

describe('Branch API Tests', () => {
    let branchId: string;

    test('Should create a new branch', async () => {
        const response = await request(app)
            .post('/api/v1/branches')
            .send({
                name: "Test Branch",
                address: "123 Testing St",
                phone: "+11234567890"
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        branchId = response.body.id;
    });

    test('Should fetch a branch by ID', async () => {
        const response = await request(app).get(`/api/v1/branches/${branchId}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', branchId);
    });

    test('Should update a branch', async () => {
        const response = await request(app)
            .put(`/api/v1/branches/${branchId}`)
            .send({
                name: "Updated Test Branch",
                address: "456 New Address",
                phone: "+11234567891"
            });
        expect(response.status).toBe(200);
        expect(response.body.name).toBe("Updated Test Branch");
    });

    test('Should delete a branch', async () => {
        const response = await request(app).delete(`/api/v1/branches/${branchId}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Branch deleted successfully");
    });

    test('Should return 400 for invalid data', async () => {
        const response = await request(app)
            .post('/api/v1/branches')
            .send({
                name: "", // Invalid, name is required
                address: "789 Invalid St"
            });
        expect(response.status).toBe(400);
    });
});
