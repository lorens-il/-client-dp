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


export enum DataType {
    DATE_ASC = "date-asc",
    DATE_DESC = "date-desc",
    ALPABLET_ASC = "alphablet-asc",
    ALPABLET_DESC = "alphablet-desc"
}

export type SortProps = {
    dataSort: { name: string; dataType: string }[];
}
export type PopupProps = SortProps & {
    openSort: boolean
    setOpenSort(openSort: boolean): void;
};
