import { Firestore } from '@google-cloud/firestore';  // Ensure Firestore is imported

const firestore = new Firestore();  // Initialize Firestore
const branchesCollection = firestore.collection('branches');

export const BranchModel = {
    async createBranch(data: any) {
        if (!data.name || !data.address || !data.phone) {
            throw new Error("Invalid data: name, address, and phone are required.");
        }
        try {
            const docRef = await branchesCollection.add(data);
            return { id: docRef.id, ...data };
        } catch (error) {
            console.error('Error creating branch:', error);
            throw new Error('Failed to create branch');
        }
    },

    async getBranchById(id: string) {
        if (!id) throw new Error('Branch ID is required');
        try {
            const doc = await branchesCollection.doc(id).get();
            if (!doc.exists) throw new Error('Branch not found');
            return { id: doc.id, ...doc.data() };
        } catch (error) {
            console.error('Error fetching branch:', error);
            throw new Error('Failed to fetch branch');
        }
    },

    async updateBranch(id: string, data: any) {
        if (!id) throw new Error('Branch ID is required');
        try {
            await branchesCollection.doc(id).update(data);
            return { id, ...data };
        } catch (error) {
            console.error('Error updating branch:', error);
            throw new Error('Failed to update branch');
        }
    },

    async deleteBranch(id: string) {
        if (!id) throw new Error('Branch ID is required');
        try {
            await branchesCollection.doc(id).delete();
            return { message: 'Branch deleted successfully' };
        } catch (error) {
            console.error('Error deleting branch:', error);
            throw new Error('Failed to delete branch');
        }
    }
};
