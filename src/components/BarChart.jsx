import React, {useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const BarChart = () => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['Jan','feb','mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data:[50,60,40,70,80,50,40,90,50,40,30,40,50],
        backgroundColor: [
          'rgba(192,192,192)',
            'rgba(192,192,192)',
            'rgba(192,192,192)',
            'rgba(192,192,192)',
            'rgba(192,192,192)',
            'rgba(192,192,192)' ,
            'rgba(192,192,192)',
            'rgba(0,0,139)',
            'rgba(192,192,192)',
            'rgba(192,192,192)',
            'rgba(192,192,192)' ,
            'rgba(192,192,192)'        
            
          ],
      },
    
          ],
        }

  const [chartData, setChartData] = useState({
    labels: ["",],
    datasets: [
      {
        label: "Sales",
        data: [5,7,8,3,15,20,11],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderRadius:10
      },
    ],
  });

  return (
    <Bar options={options} data={data} />
  );
};

export default BarChart;
