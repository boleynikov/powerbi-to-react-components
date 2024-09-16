import { Box } from '@mui/material';
import { useId } from 'react';
import Chart from 'react-apexcharts';

type ChartSettings = {
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined;
  options: ApexCharts.ApexOptions;
};
type Value = {
  text: string;
  value: number;
  color: string;
};
type BarDiagramProps = {
  values: Value[];
  height?: number;
};

const BarDiagram2 = ({ values, height }: BarDiagramProps) => {
  const id = useId();
  const sum = values.reduce((p, current) => {
    return p + (current as any).value || 0;
  }, 0);
  
  const settings: ChartSettings = {
    series: [
      {
        data: values.map((i) => {
          return i.value !== 0 ? (i.value / sum || 1) * 100 : 0;
        })
      }
    ],
    options: {
      chart: {
        id: `${id}-${Date.now()}`,
        toolbar: {
          show: false
        },
        fontFamily: 'e-ukraine, Arial, sans-serif',
        animations: {
          enabled: true,
          easing: 'linear',
          speed: 800
        },
        redrawOnParentResize: true,
        redrawOnWindowResize: true
      },
      colors: values.map((i) => i.color),
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: 'end',
          distributed: true,
          horizontal: true
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: 0,
        style: {
          colors: ['#000000']
        },
        formatter: function (val: any, opt: any) {
          return `${Number(val).toFixed(2)} % (${values.at(opt.dataPointIndex)?.value || 0})`;
        }
      },
      xaxis: {
        categories: values.map((i) => i.text)
      },
      legend: {
        show: false
      },
      tooltip: {
        custom: function ({ dataPointIndex }: any) {
          return (
            '<div class="arrow_box" style="padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;">' +
            '<span>Кількість: <strong>' +
            values[dataPointIndex]?.value +
            '</strong></span>' +
            '</div>'
          );
        }
      }
    }
  };

  return (
    <Box
      id={id}
      alignItems={'center'}
      justifyContent={'center'}
      pl={2}
      pt={1}
      pr={6}
      overflow={'hidden'}
    >
      <Chart options={settings.options} series={settings.series} height={height || 300} type="bar" />
    </Box>
  );
};

export default BarDiagram2;
