import { formatAsPercentage } from '../../helpers';
import { Box, Typography } from '@mui/material';

type CompletitionProgressProps = {
  taskCount?: number;
  progressPercentage?: number;
  type: 'task' | 'goal';
};
const CompletitionProgress = ({ taskCount, progressPercentage, type }: CompletitionProgressProps) => {

  return (
    <Box>
      <Typography>
        Відсоток виконання:{' '}
        {progressPercentage !== undefined ? (
          <strong>{formatAsPercentage(progressPercentage as any)}</strong>
        ) : (
          <strong>...</strong>
        )}
      </Typography>
      <Typography>
        {type === 'task' ? 'Загальна кількість завдань:' : 'Загальна кількість цілей'}{' '}
        {taskCount !== undefined ? <strong>{taskCount}</strong> : <strong>...</strong>}
      </Typography>
    </Box>
  );
};

export default CompletitionProgress;
