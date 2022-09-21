import { Box, SimpleGrid, Text, theme } from '@chakra-ui/react'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'

// Disable SSR because Chart cant be requested on server side
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

export default function Graphics() {

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600]
      },
      axisTicks: {
        color: theme.colors.gray[600]
      },
      categories: [
        '2022-09-17T00:00:00.000Z',
        '2022-09-18T00:00:00.000Z',
        '2022-09-19T00:00:00.000Z',
        '2022-09-20T00:00:00.000Z',
        '2022-09-21T00:00:00.000Z',
        '2022-09-22T00:00:00.000Z',
        '2022-09-23T00:00:00.000Z',
      ],
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3
      }
    }
  };

  const series = [
    { name: 'series1', data: [31, 120, 10, 20, 61, 18, 109]}
  ]

  return (
    <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">

      <Box p="8" bgColor="gray.800" borderRadius={8}>
        <Text fontSize="lg" mb="4"> Inscritos da Semana </Text>
        <Chart options={options} series={series} type='area' height={160}/>
      </Box>

      <Box p="8" bgColor="gray.800" borderRadius={8}>
        <Text fontSize="lg" mb="4"> Inscritos da Semana </Text>
        <Chart options={options} series={series} type='area' height={160}/>
      </Box>

    </SimpleGrid>
  )
}
