import React from 'react';
import PriceLineChart from '../components/PriceLineChart';
import PriceBarChart  from '../components/PriceBarChart';
import LanguageSwitch from '../components/LanguageSwitch';

export default function Dashboard() {
  return (
    <div className="dashboard-container" style={{ padding: 20 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Jewelry Price Dashboard</h1>
        <LanguageSwitch />
      </header>

      <div style={{ display: 'flex', gap: 20 }}>
        <div style={{ flex: 1 }}>
          <PriceLineChart />
        </div>
        <div style={{ flex: 1 }}>
          <PriceBarChart />
        </div>
      </div>

      <footer style={{ marginTop: 40, fontSize: 12, color: '#666' }}>
        Data source: Synthetic Data for Assignment 5.
      </footer>
    </div>
  );
}
