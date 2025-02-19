import { Firestore } from '@google-cloud/firestore';
import { firestore } from '../../config/firebase";
const firestore = new Firestore();
const employeesCollection = firestore.collection('employees');

export const EmployeeModel = {
    async createEmployee(data: any) {
        const docRef = await employeesCollection.add(data);
        return { id: docRef.id, ...data };
    },
    async getEmployeeById(id: string) {
        const doc = await employeesCollection.doc(id).get();
        if (!doc.exists) throw new Error('Employee not found');
        return { id: doc.id, ...doc.data() };
    },
    async updateEmployee(id: string, data: any) {
        await employeesCollection.doc(id).update(data);
        return { id, ...data };
    },
    async deleteEmployee(id: string) {
        await employeesCollection.doc(id).delete();
        return { message: 'Employee deleted successfully' };
    }
};
