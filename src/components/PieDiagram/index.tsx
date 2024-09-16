import { Box } from '@mui/material';
import { useId } from 'react';
import Chart from 'react-apexcharts';
type Value = {
  text: string;
  value?: number;
  color?: string;
};
type PieDiagramProps = {
  values: Value[];
  height?: number;
};

const PieDiagram = ({ values, height }: PieDiagramProps) => {
  const id = useId();

  const settings = {
    series: values.map((i) => i.value || 0),

    options: {
      chart: {
        id: `${id}-${Date.now()}`,
        width: 450,
        type: 'donut',
        fontFamily: 'e-ukraine, Arial, sans-serif',
        redrawOnParentResize: true,
        redrawOnWindowResize: true
      },
      dataLabels: {
        enabled: true,
        offsetX: 0,
        style: {
          colors: ['#000000'],
          fontSize: '14px',
          fontFamily: 'e-ukraine, Arial, sans-serif',
          fontWeight: 300
        },
        formatter: function (_: any, opt: any) {
          return values.at(opt.seriesIndex)?.value;
        }
      },
      colors: values.map((i) => i.color || '#000000'),
      legend: {
        show: false,
        position: 'right',
        offsetY: 0,
        height: 230
      },
      tooltip: {
        enabled: false
      }
    }
  };
  
  return (
    <Box id={id} alignItems={'center'} justifyContent={'center'} pt={6} overflow={'hidden'}>
      <Chart options={settings.options as any} series={settings.series} height={height || 300} type="donut" />
    </Box>
  );
};

export default PieDiagram;
