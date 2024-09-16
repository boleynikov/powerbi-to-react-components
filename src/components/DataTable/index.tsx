import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';
import { Link } from '@mui/material';
import { ColumnData, Order } from './interface';
import { useMemo } from 'react';
import { getComparator } from './utils';
import FixedHeaderContent from './TableHead';

const VirtuosoTableComponents: TableComponents = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{
        borderCollapse: 'separate',
        tableLayout: 'fixed'
      }}
    />
  ),
  TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  ))
};

function rowContent<C extends ColumnData>(_index: number, row: any, columns: C[]) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.link || column?.position === 'center' ? 'center' : 'left'}
          sx={{
            backgroundColor: _index % 2 === 0 ? '#FFFFFF' : '#E7EEF3',
            border: '4px solid #E7EEF3'
          }}
        >
          {column.link ? (
            <Link href={row[column.dataKey]} target="_blank">
              Перехід на картку
            </Link>
          ) 
          : column.date ? (
            row[column.dataKey] !== null ? (
              new Date(row[column.dataKey]).toLocaleDateString('en-GB').replace(/\//g, '.')
            ) : (
              ''
            )
          ) 
          : (
            row[column.dataKey]
          )}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

type DataTableProps<T, C> = {
  data: T[];
  columns: C[];
};

const DataTable = <T extends unknown, D extends unknown, C extends ColumnData>({
  data,
  columns
}: DataTableProps<T, C>) => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof D>('title' as keyof D);

  const handleRequestSort = (_: React.MouseEvent<unknown>, property: keyof D) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const visibleRows = useMemo(
    () => [...data].sort(getComparator(order, orderBy) as any),
    [data, order, orderBy]
  );

  return (
    <Paper style={{ height: 600 }} elevation={0}>
      <TableVirtuoso
        data={visibleRows as any[]}
        components={VirtuosoTableComponents}
        fixedHeaderContent={() => (
          <FixedHeaderContent
            order={order}
            orderBy={String(orderBy)}
            columns={columns}
            onRequestSort={handleRequestSort as any}
          />
        )}
        itemContent={(_index: number, row: any) => rowContent(_index, row, columns)}
        style={{
          boxShadow: 'none'
        }}
      />
    </Paper>
  );
};

export default DataTable;
