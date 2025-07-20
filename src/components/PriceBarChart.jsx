// src/components/SalesBarChart.jsx
import React, { useState, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';


// —— sale data ——
const monthlySales = {
  // 2023 
  "2023-01": { Gold: 1250, Silver:  900, Platinum: 350, Jade: 180, Diamond: 1000 },
  "2023-02": { Gold: 1300, Silver:  950, Platinum: 370, Jade: 200, Diamond: 1050 },
  "2023-03": { Gold: 1280, Silver:  920, Platinum: 360, Jade: 190, Diamond: 1020 },
  "2023-04": { Gold: 1320, Silver:  980, Platinum: 400, Jade: 210, Diamond: 1100 },
  "2023-05": { Gold: 1350, Silver: 1000, Platinum: 420, Jade: 220, Diamond: 1150 },
  "2023-06": { Gold: 1400, Silver: 1050, Platinum: 450, Jade: 230, Diamond: 1200 },
  "2023-07": { Gold: 1380, Silver: 1030, Platinum: 440, Jade: 225, Diamond: 1180 },
  "2023-08": { Gold: 1420, Silver: 1070, Platinum: 460, Jade: 240, Diamond: 1250 },
  "2023-09": { Gold: 1450, Silver: 1100, Platinum: 480, Jade: 250, Diamond: 1300 },
  "2023-10": { Gold: 1430, Silver: 1080, Platinum: 470, Jade: 245, Diamond: 1280 },
  "2023-11": { Gold: 1470, Silver: 1120, Platinum: 490, Jade: 260, Diamond: 1350 },
  "2023-12": { Gold: 1500, Silver: 1150, Platinum: 500, Jade: 270, Diamond: 1400 },

  // 2024 
  "2024-01": { Gold: 1480, Silver: 1130, Platinum: 480, Jade: 260, Diamond: 1380 },
  "2024-02": { Gold: 1520, Silver: 1170, Platinum: 510, Jade: 280, Diamond: 1450 },
  "2024-03": { Gold: 1550, Silver: 1200, Platinum: 530, Jade: 290, Diamond: 1500 },
  "2024-04": { Gold: 1530, Silver: 1180, Platinum: 520, Jade: 285, Diamond: 1480 },
  "2024-05": { Gold: 1580, Silver: 1230, Platinum: 550, Jade: 300, Diamond: 1550 },
  "2024-06": { Gold: 1600, Silver: 1250, Platinum: 570, Jade: 310, Diamond: 1600 },
  "2024-07": { Gold: 1580, Silver: 1230, Platinum: 560, Jade: 305, Diamond: 1580 },
  "2024-08": { Gold: 1620, Silver: 1280, Platinum: 590, Jade: 320, Diamond: 1650 },
  "2024-09": { Gold: 1650, Silver: 1300, Platinum: 600, Jade: 330, Diamond: 1700 },
  "2024-10": { Gold: 1630, Silver: 1280, Platinum: 590, Jade: 325, Diamond: 1680 },
  "2024-11": { Gold: 1680, Silver: 1330, Platinum: 620, Jade: 340, Diamond: 1750 },
  "2024-12": { Gold: 1700, Silver: 1350, Platinum: 630, Jade: 350, Diamond: 1800 },
};

const allMonths = Object.keys(monthlySales);

// color
const colors = {
  Gold:    'rgba(255, 205,  86, 0.8)',
  Silver:  'rgba(201, 203, 207, 0.8)',
  Platinum:'rgba(180, 180, 200, 0.8)',
  Jade:    'rgba(100, 180, 180, 0.8)',
  Diamond: 'rgba(153, 102, 255, 0.8)',
};

export default function SalesBarChart() {

  const [selectedMonths, setSelectedMonths] = useState(
    [allMonths[allMonths.length - 1]]
  );


  const chartData = useMemo(() => {

    const categories = Object.keys(monthlySales[allMonths[0]]);

    const datasets = categories.map(cat => ({
      label: cat,
      backgroundColor: colors[cat],
      data: selectedMonths.map(m => monthlySales[m][cat] || 0),
    }));

    return {
      labels: selectedMonths,
      datasets,
    };
  }, [selectedMonths]);


  const toggleMonth = month => {
    setSelectedMonths(prev =>
      prev.includes(month)
        ? prev.filter(m => m !== month)
        : [...prev, month]
    );
  };

  return (
    <div>
      <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        Jewelry Sales Comparison
      </h3>

      {/* month control */}
      <div style={{ marginBottom: '1rem' }}>
        {allMonths.map(month => (
          <label key={month} style={{ marginRight: '1rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={selectedMonths.includes(month)}
              onChange={() => toggleMonth(month)}
            />{' '}
            {month}
          </label>
        ))}
      </div>

      {/* bar */}
      <Bar
        data={chartData}
        options={{
          indexAxis: 'y',
          scales: {
            x: {
              title: {
                display: true,
                text: 'Sales Volume',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Category',
              },
            },
          },
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        }}
      />
    </div>
  );
}
