import './App.css'
import { Box, Grid, Typography } from '@mui/material'
import CompletitionProgress from './components/CompletitionProgress'
import Gauge from './components/Gauge'
import BarDiagram from './components/BarDiagram'
import PieDiagram from './components/PieDiagram'
import DataTable from './components/DataTable'
import { ColumnData } from './components/DataTable/interface'
import ThemeProvider from './theme'
const columns: ColumnData[] = [
  {
    width: 240,
    label: 'Назва',
    dataKey: 'title'
  },
  {
    width: 150,
    label: 'Головний виконавець',
    dataKey: 'mainExecutors',
    position: 'center'
  },
  {
    width: 150,
    label: 'Департамент',
    dataKey: 'departments'
  },
  {
    width: 120,
    label: 'Прогрес',
    dataKey: 'completionPercentage'
  },
  {
    width: 120,
    label: 'Строк виконання',
    dataKey: 'deadlineDate',
    date: true
  },
  {
    width: 120,
    label: 'Дата виконання',
    dataKey: 'completedAt',
    date: true
  },
  {
    width: 120,
    label: 'Статус',
    dataKey: 'status'
  },
  {
    width: 120,
    label: 'Посилання',
    dataKey: 'url',
    link: true
  }
];
function App() {
  const isSuccess = true;

  return (
    <ThemeProvider>
      <Box sx={{ paddingBottom: '24px' }}>
        <CompletitionProgress
          taskCount={144}
          progressPercentage={(50 / 144) * 100}
          type={'task'}
        />
        <Grid container spacing={4} mt={'4px'}>
          <Grid item md={4} sm={6} xs={12}>
            <Box borderRadius={'4px'} sx={{ backgroundColor: 'white' }}>
              <Gauge
                value={35}
                compareValue={32}
                maxValue={68}
                label={'Виконані'}
                isLoading={!isSuccess}
              />
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Box borderRadius={'4px'} sx={{ backgroundColor: 'white' }}>
              <Gauge
                value={35}
                compareValue={41}
                maxValue={65}
                label={'Виконані вчасно'}
                barColor='#FFC1A4'
                isLoading={!isSuccess}
              />
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Box borderRadius={'4px'} sx={{ backgroundColor: 'white' }}>
              <Gauge
                label={'Виконані з запізненням'}
                value={35}
                compareValue={20}
                maxValue={67}
                barColor={'#F9DD6E'}
                isLoading={!isSuccess}
              />
            </Box>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Box borderRadius={'4px'} height={'316px'} sx={{ backgroundColor: 'white' }}>
              <BarDiagram
                values={[
                  {
                    text: 'Виконано з запізненням',
                    value: 31 ?? 1,
                    color: '#FFE271'
                  },
                  {
                    text: 'Не виконано',
                    value: 28 ?? 1,
                    color: '#FF8866'
                  },
                  {
                    text: 'Виконано вчасно',
                    value: 49 ?? 1,
                    color: 'lightgreen'
                  }
                ]}
              />
            </Box>
          </Grid>
          <Grid item md={3} sm={12} xs={12}>
            <Box borderRadius={'4px'} height={'316px'} sx={{ backgroundColor: 'white' }}>
              <PieDiagram
                values={[
                  {
                    text: 'Виконано з запізненням',
                    value: 31 ?? 1,
                    color: '#FFE271'
                  },
                  {
                    text: 'Не виконано',
                    value: 28 ?? 1,
                    color: '#FF8866'
                  },
                  {
                    text: 'Виконано вчасно',
                    value: 49 ?? 1,
                    color: 'lightgreen'
                  }
                ]}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12} sm={12} xs={12} pt={6}>
            <Typography variant="h2" pl={2}>
              Деталізація за поточним прогресом виконання
            </Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12} pt={6}>
            {isSuccess && (
              <DataTable
                data={
                  testData?.length > 0
                    ? testData?.map((item) => ({
                      ...item,
                      mainExecutors: item.mainExecutors?.join(',') ?? '',
                      departments: item.departments?.join(',') ?? '',
                      completedAt: item.completedAt ? new Date(item.completedAt) : null,
                      deadlineDate: new Date(item.deadlineDate)
                    }))
                    : []
                }
                columns={columns}
              />
            )}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default App

const testData = [
  {
    title: 'Прийняти проект Стратегії подолання бідності',
    mainExecutors: null,
    departments: null,
    completionPercentage: 100,
    deadlineDate: '2015-12-31',
    completedAt: '2024-05-30',
    status: 'Виконано з запізненням',
    url: '/tasks-view/task/view/1016'
  },
  {
    title: 'Прийняти план заходів із реалізації Стратегії',
    mainExecutors: null,
    departments: null,
    completionPercentage: 100,
    deadlineDate: '2015-12-31',
    completedAt: '2024-05-30',
    status: 'Виконано з запізненням',
    url: '/tasks-view/task/view/1017'
  },
  {
    title:
      'Прийняти проект нормативно-правового акта про ринок фруктів та овочів  щодо організації виробників та плану визнання',
    mainExecutors: null,
    departments: null,
    completionPercentage: 0,
    deadlineDate: '2020-12-31',
    completedAt: null,
    status: 'Не виконано',
    url: '/tasks-view/task/view/372'
  },
  {
    title:
      'Прийняти проект нормативно-правого акта щодо порядку процедури оскарження  для спільних заяв у національних компетентних органах',
    mainExecutors: null,
    departments: null,
    completionPercentage: 100,
    deadlineDate: '2018-12-31',
    completedAt: '2018-12-30',
    status: 'Виконано вчасно',
    url: '/tasks-view/task/view/3'
  },
  {
    title:
      'Прийняти проект нормативно-правого акта про процедуру повідомлень Комісії ЄС про укладання угоди під час процедури оскарження',
    mainExecutors: null,
    departments: null,
    completionPercentage: 100,
    deadlineDate: '2018-12-31',
    completedAt: '2018-12-30',
    status: 'Виконано вчасно',
    url: '/tasks-view/task/view/4'
  },
  {
    title:
      'Прийняти проект нормативно-правого акта щодо прийняття поправок до заявок стосовно реєстрації номенклатури продукції сільськогосподарського походження',
    mainExecutors: null,
    departments: null,
    completionPercentage: 100,
    deadlineDate: '2018-12-31',
    completedAt: '2018-12-30',
    status: 'Виконано вчасно',
    url: '/tasks-view/task/view/5'
  },
  {
    title:
      'Прийняти проект Закону України про внесення змін до деяких законодавчих актів України щодо вдосконалення правової охорони географічних зазначень кормів та сировини, назва яких має захищене позначення походження',
    mainExecutors: null,
    departments: null,
    completionPercentage: 100,
    deadlineDate: '2019-12-31',
    completedAt: '2019-12-30',
    status: 'Виконано вчасно',
    url: '/tasks-view/task/view/6'
  },
  {
    title:
      'Прийняти проект нормативно-правового акта про процедуру маркування продукції кормів і сировини відповідно до встановленого порядку присвоєння символіки якості, а також форми і процедури щорічної звітності перед компетентними органами ЄС стосовно маркування продукції',
    mainExecutors: null,
    departments: null,
    completionPercentage: 100,
    deadlineDate: '2019-12-31',
    completedAt: '2019-12-30',
    status: 'Виконано вчасно',
    url: '/tasks-view/task/view/7'
  },
  {
    title:
      'Прийняти проект нормативно-правого акта щодо порядку специфікації продукції з описом її характеристик',
    mainExecutors: null,
    departments: null,
    completionPercentage: 100,
    deadlineDate: '2019-12-31',
    completedAt: '2019-12-30',
    status: 'Виконано вчасно',
    url: '/tasks-view/task/view/8'
  },
  {
    title:
      'Прийняти проект Закону України про внесення змін до деяких законодавчих актів України щодо визначення понять та термінів щодо органічного виробництва, обігу та маркування органічної  продукції та сировини',
    mainExecutors: null,
    departments: null,
    completionPercentage: 100,
    deadlineDate: '2018-12-31',
    completedAt: '2018-12-30',
    status: 'Виконано вчасно',
    url: '/tasks-view/task/view/9'
  },
  {
    title:
      'Прийняти проект Закону України про внесення змін до Закону України "Про виробництво та обіг органічної сільськогосподарської продукції та сировини"  щодо дотримання правил та принципів ЄС у виробництві та обігу органічної продукції та сировини',
    mainExecutors: null,
    departments: null,
    completionPercentage: 100,
    deadlineDate: '2018-12-31',
    completedAt: '2018-12-30',
    status: 'Виконано вчасно',
    url: '/tasks-view/task/view/10'
  },
  {
    title:
      'Прийняти проект нормативно-правового акта щодо затвердження якісних характеристик екстрактів кави і цикорію',
    mainExecutors: ["Test"],
    departments: null,
    completionPercentage: 100,
    deadlineDate: '2018-12-31',
    completedAt: '2018-12-30',
    status: 'Виконано вчасно',
    url: '/tasks-view/task/view/99'
  },
  {
    title:
      'Прийняти проект Закону України про внесення змін до Закону України "Про виробництво та обіг органічної сільськогосподарської продукції та сировини"  щодо встановлення загальних правил сільськогосподарського виробництва та їх дотримання',
    mainExecutors: null,
    departments: ["Test"],
    completionPercentage: 100,
    deadlineDate: '2018-12-31',
    completedAt: '2018-12-30',
    status: 'Виконано вчасно',
    url: '/tasks-view/task/view/11'
  }
];