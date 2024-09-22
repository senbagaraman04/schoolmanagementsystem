

export interface CreateBranchPayload {
    branchName: string;
    branchPhone: string;
    branchAddress: string;
}

export interface Branch {
    branchId: string;
    branchName: string;
    branchAddress: string;
    branchPhone: string;
    branchEmail: string;
    branchCode: string;
    isActive: boolean;
}