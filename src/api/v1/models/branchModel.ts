const branchesCollection = firestore.collection('branches');

export const BranchModel = {
    async createBranch(data: any) {
        const docRef = await branchesCollection.add(data);
        return { id: docRef.id, ...data };
    },
    async getBranchById(id: string) {
        const doc = await branchesCollection.doc(id).get();
        if (!doc.exists) throw new Error('Branch not found');
        return { id: doc.id, ...doc.data() };
    },
    async updateBranch(id: string, data: any) {
        await branchesCollection.doc(id).update(data);
        return { id, ...data };
    },
    async deleteBranch(id: string) {
        await branchesCollection.doc(id).delete();
        return { message: 'Branch deleted successfully' };
    }
};
