// src/App.js
import React from 'react';
import NavBar         from './components/NavBar';
import PriceLineChart from './components/PriceLineChart';
import PriceBarChart  from './components/PriceBarChart';
import PriceTable     from './components/PriceTable';

function App() {
  return (
    <>
      <NavBar />

      <div className="container">
        {/* 折线图 */}
        <PriceLineChart />

        {/* 搜索表格 */}
        <PriceTable />

        {/* 柱状图 */}
        <PriceBarChart />

      </div>
    </>
  );
}

export default App;
