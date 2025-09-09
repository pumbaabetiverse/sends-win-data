export interface ICategory {
    id: string;
    title: string;
}

export interface IFile {
    name: string;
    percent: number;
    size: number;
    status: "error" | "success" | "done" | "uploading" | "removed";
    type: string;
    uid: string;
    url: string;
}

export interface IPost {
    id: string;
    title: string;
    content: string;
    categoryId: string;
    images: IFile[];
}

export interface IUser {
    id: string;
    parentId: string;
    balance: string;
    previousBalance: string;
}

export interface IDeposit {
    id: string;
    orderId: string;
    note: string;
    amount: string;
    payout: string;
    createdAt: string;
    toBinanceAccountId: string;
}
