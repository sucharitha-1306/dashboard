import React, {useState} from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend } from 'chart.js';



import { Doughnut  } from 'react-chartjs-2';
import { BsTextCenter } from 'react-icons/bs';
ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend);

  const DoughnutChart = () => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display:false,
        position: 'top',
      },
      title: {
        display: false,
        elements: {
          center: {
            text: '65% of total new customers',
            color: '#FF6384', // Default is #000000
            fontStyle: 'Arial', // Default is Arial
            sidePadding: 20, // Default is 20 (as a percentage)
            minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
            lineHeight: 25 // Default is 25 (in px), used for when text wraps
          }
        }
      },
    },
  };
  
  const labels = ['January-March', 'April-June', 'July-August','September-December'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [40,40,20,40],
        backgroundColor: [
          'rgba(207,52,118,2)',
          'rgba(35,41,122,2)',
          'rgba(72,61,139, 2)',
           'rgba(255,255,255,2)'
        ],
      },
    //   {
    //     label: 'Dataset 2',
    //     data: [5,7,8,3,15,20,11],
    //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //   },
    ],
  };

  const textCenter={
    id:'textCenter',
    beforeDatasetsDraw(chart,args,plugins){
      const{ctx,data}=chart;
      ctx.save()
      ctx.font='bold 8px'
      ctx.fillStyle='black'
      ctx.textAlign='center'
      ctx.textBaseline='middle'
      ctx.fillText('65% of total new customers',chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y)
    }
  }

  const [chartData, setChartData] = useState({
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [100, 200, 300, 400, 500],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  });

  return (
    <Doughnut options={options} data={data} plugins={[textCenter]}/>
  );
};

export default DoughnutChart;