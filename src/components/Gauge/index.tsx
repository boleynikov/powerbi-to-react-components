import { Box, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import ColorNumberMarker from './ColorNumberMarker';
import { CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
type GaugeProps = {
  value?: number;
  compareValue?: number;
  maxValue?: number;
  label: string;
  barColor?: string;
  isLoading?: boolean;
};

const CustomCircularProgress = styled(CircularProgress)({
  animationDuration: '4s',
  color: '#E7EEF3'
});

const CustomGauge = ({
  label,
  barColor,
  isLoading,
  value = 0,
  maxValue = 0,
  compareValue = 0
}: GaugeProps) => {
  const isMobile = useMediaQuery((th: Theme) => th.breakpoints.down('sm'));
  return (
    <Box padding={4}>
      <Typography align="center">{label}</Typography>
      {isLoading ? (
        <Box display={'flex'} justifyContent={'center'}>
          <CustomCircularProgress size={120} thickness={5} />
        </Box>
      ) : (
        <Gauge
          value={value}
          valueMax={maxValue}
          startAngle={-90}
          endAngle={90}
          cornerRadius="20%"
          innerRadius="45%"
          outerRadius="60%"
          margin={{ top: -50 }}
          valueMin={0}
          width={300}
          height={120}
          sx={() => ({
            position: 'relative',
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 24,
              position: 'absolute',
              top: 40
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: barColor ?? '#9BE8BE',
              margin: 5
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: '#F3F2F1'
            },
            width: 'auto'
          })}
        />
      )}
      <Stack direction={'column'}>
        <Stack
          direction={'row'}
          spacing={isMobile ? 6 : 5}
          columnGap={isMobile ? 6 : undefined}
          justifyContent={'space-evenly'}
          position={'relative'}
        >
          <Typography
            sx={{
              marginTop: '-20px !important'
            }}
          >
            {0}
          </Typography>
          <Typography
            sx={{
              marginTop: '-20px !important'
            }}
          >
            {maxValue}
          </Typography>
        </Stack>
        {compareValue !== undefined && (
          <Stack direction={'row'} spacing={2} alignSelf={'center'}>
            <Typography variant={'h5'}>Порівняння: {compareValue}</Typography>
            <ColorNumberMarker
              value={
                value === 0 ? 0 : value !== undefined ? ((value - compareValue) / value) * 100 : 0
              }
              formatter={(v: number) => (
                <>
                  {`${v.toFixed(2)} %`} {v > 0 ? <>&uarr;</> : v < 0 ? <>&darr;</> : <></>}
                </>
              )}
              valueColor={{
                normalColor: '#818589',
                greaterColor: '#355E3B',
                lessColor: '#800020'
              }}
              backgroundColor={{
                normalColor: '#E7EEF3',
                greaterColor: '#CDF4DF',
                lessColor: '#FFD7CC'
              }}
            />
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default CustomGauge;
