export interface ColumnData {
  dataKey: string;
  label: string;
  numeric?: boolean;
  link?: boolean;
  date?: boolean;
  width: number;
  position?: string;
}

export type Order = 'asc' | 'desc';
