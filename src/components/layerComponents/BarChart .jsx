import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'orange',
      },
      {
        label: 'Dataset 2',
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: 'lightcoral',
      },
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Disable aspect ratio to allow custom width/height
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white rounded-lg m-3 shadow-current" style={{ width: '40%', height: '270px' }}>
      <Bar data={data} options={options} width={100} height={267} />
    </div>
  );
};

export default BarChart;
