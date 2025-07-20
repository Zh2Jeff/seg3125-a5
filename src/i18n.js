import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      appTitle: 'JewPrice Check',
      searchPlaceholder: 'Search months…',
      month: 'Month',
      gold: 'Gold (USD/oz)',
      silver: 'Silver (USD/oz)',
      platinum: 'Platinum (USD/oz)',
      jade: 'Jade (USD/g)',
      diamond: 'Diamond (USD/ct)',
    }
  },
  zh: {
    translation: {
      appTitle: '珠宝价格查询',
      searchPlaceholder: '搜索月份…',
      month: '月份',
      gold: '黄金（美元/盎司）',
      silver: '白银（美元/盎司）',
      platinum: '铂金（美元/盎司）',
      jade: '翡翠（美元/克）',
      diamond: '钻石（美元/克拉）',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',            // default
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
