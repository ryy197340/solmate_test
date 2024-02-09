import { FC, useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import * as faker from '@faker-js/faker';
import "./index.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  export const options = {
    responsive: true,
    aspectRatio: 4,
    plugins: {
      legend: {
        position: 'top' as const,
        display: false,
        maxHeight: 10
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const labels = ['0', '5', '10', '15', '20', '25', '30'];
  export const data = {
    labels,
    datasets: [
      {
        label: 'SOLMATE',
        data: labels.map(() => faker.faker.datatype.number({ min: 100, max: 1000 })),
        borderColor: 'rgb(0, 0, 0)',
        backgroundColor: 'rgba(52, 247, 154, 0.5)',
      },
    ],
  };
const Chart: FC = () => {


    return (
        <div className='p-4 bg-gradient-to-r from-white to-sky-400'>
           <div className='flex justify-center items-center mb-4'>
                <p className='font-bold text-xl'>Title</p>
                <div className='grow'>

                </div>
                <p className='text-xs'>1 MAY - 2021, 1 JUNE - 2021</p>
           </div>
           <Line options={options} data={data} />
        </div>
    );
};

export default Chart;
