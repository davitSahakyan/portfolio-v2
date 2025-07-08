export interface ColumnInfoProps {
    heading: string;
    items: ColumnInfoItem[];
}

export interface ColumnInfoItem {
    title: string;
    period: string;
    description: string;
    id?: number;
}
