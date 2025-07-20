// src/components/PriceTable.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import prices from '../data/prices';

export default function PriceTable() {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');

  // 按月份过滤
  const filtered = prices.filter(row =>
    row.month.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mb-5">
      <input
        type="text"
        className="form-control mb-3"
        placeholder={t('searchPlaceholder')}
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="table-responsive">
        <table className="table table-striped align-middle">
          <thead>
            <tr>
              <th>{t('month')}</th>
              <th>{t('gold')}</th>
              <th>{t('silver')}</th>
              <th>{t('platinum')}</th>
              <th>{t('jade')}</th>
              <th>{t('diamond')}</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(row => (
              <tr key={row.month}>
                <td>{row.month}</td>
                <td>{row.gold}</td>
                <td>{row.silver}</td>
                <td>{row.platinum}</td>
                <td>{row.jade}</td>
                <td>{row.diamond}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
