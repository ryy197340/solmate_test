import { FC, useEffect, useState, useLayoutEffect } from 'react';
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
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Sol/SOLMATE',
      data: labels.map(() => faker.faker.datatype.number({ min: 100, max: 1000 })),
      borderColor: 'rgb(52, 247, 154)',
      backgroundColor: 'rgba(52, 247, 154, 0.5)',
    },
    {
      fill: true,
      label: 'USDT/SOLMATE',
      data: labels.map(() => faker.faker.datatype.number({ min: 100, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      fill: true,
      label: 'USDC/SOLMATE',
      data: labels.map(() => faker.faker.datatype.number({ min: 100, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        let width  = window.innerWidth;
        if(width>1180){
          width = 1180;
        }
        if(width<500){
          width = window.innerWidth-20;
        }
        setSize([width, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

const Statistics: FC = () => {

    const [width, height] = useWindowSize();
    return (
        <div className='bg-gradient-to-r from-white to-sky-400 text-black p-4 px-8'>
            <div className='pb-4'>
                <p className='font-bold text-xl'>Statistics</p>
            </div>
        
            
            <div className=''>
            <Line options={options} data={data} />
            </div>
        </div>
    );
};

export default Statistics;
