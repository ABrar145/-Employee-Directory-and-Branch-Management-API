import { Branch } from "../interfaces/Branch";

let branches: Branch[] = [];
let branchIdCounter = 1;

export const getBranches = (): Branch[] => branches;

export const getBranchById = (id: number): Branch | undefined =>
    branches.find(branch => branch.id === id);

export const createBranch = (branchData: Omit<Branch, "id">): Branch => {
    const newBranch = { id: branchIdCounter++, ...branchData };
    branches.push(newBranch);
    return newBranch;
};

export const updateBranch = (id: number, updates: Partial<Branch>): Branch | null => {
    const index = branches.findIndex(branch => branch.id === id);
    if (index === -1) return null;

    branches[index] = { ...branches[index], ...updates };
    return branches[index];
};

export const deleteBranch = (id: number): boolean => {
    const index = branches.findIndex(branch => branch.id === id);
    if (index === -1) return false;

    branches.splice(index, 1);
    return true;
};
