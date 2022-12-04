export type Hardware = {
    id: number;
    name: string;
    status: string;
    category: string;
    Date: DateT;
    createdAt: string;
    updatedAt: string;
    WorkerId: number;
};

export type DateT = {
    id: number;
    date: Date;
    HardwareId: number;
};

export type SortProps = { dataSort: { name: string; dataType: string }[] };
