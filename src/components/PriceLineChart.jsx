import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import prices from '../data/prices';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function PriceLineChart() {
  //  x 
  const labels = prices.map(p => p.month);

  // data
  const datasets = [
    {
      label: 'Gold (USD/oz)',
      data: prices.map(p => p.gold),
      borderColor: 'rgba(255, 205, 86, 1)',
      backgroundColor: 'rgba(255, 205, 86, 0.5)',
      tension: 0.3,
    },
    {
      label: 'Silver (USD/oz)',
      data: prices.map(p => p.silver),
      borderColor: 'rgba(192, 192, 192, 1)',
      backgroundColor: 'rgba(192, 192, 192, 0.5)',
      tension: 0.3,
    },
    {
      label: 'Platinum (USD/oz)',
      data: prices.map(p => p.platinum),
      borderColor: 'rgba(201, 203, 207, 1)',
      backgroundColor: 'rgba(201, 203, 207, 0.5)',
      tension: 0.3,
    },
    {
      label: 'Jade (USD/g)',
      data: prices.map(p => p.jade),
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      tension: 0.3,
    },
    {
      label: 'Diamond (USD/ct)',
      data: prices.map(p => p.diamond),
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
      tension: 0.3,
    },
  ];

  const data = { labels, datasets };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Jewelry Prices Over Time (2023–2024)',
        font: { size: 18 }
      },
      legend: {
        position: 'bottom'
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Price'
        },
        beginAtZero: false
      }
    }
  };

  return <Line data={data} options={options} />;
}
