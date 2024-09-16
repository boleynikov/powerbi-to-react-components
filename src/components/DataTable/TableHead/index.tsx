import { Box, TableCell, TableRow, TableSortLabel } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { ColumnData, Order } from '../interface';

type HeaderType<C, D> = {
  order: Order;
  orderBy: string;
  columns: C[];
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof D) => void;
};
const FixedHeaderContent = <C extends ColumnData, D extends unknown>(props: HeaderType<C, D>) => {
  const { order, orderBy, columns, onRequestSort } = props;
  const createSortHandler = (property: keyof D) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={'center'}
          style={{ width: column.width }}
          sx={{ backgroundColor: '#c1dff5', border: '4px solid #E7EEF3' }}
        >
          <TableSortLabel
            active={orderBy === column.dataKey}
            direction={orderBy === column.dataKey ? order : 'asc'}
            onClick={createSortHandler(column.dataKey as any)}
          >
            {column.label}
            {orderBy === column.dataKey ? (
              <Box component="span" sx={visuallyHidden}>
                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
              </Box>
            ) : null}
          </TableSortLabel>
        </TableCell>
      ))}
    </TableRow>
  );
};

export default FixedHeaderContent;
