import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/styles/PortfolioPage.css';

const PortfolioPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getCategories = () => {
    return ['All', ...Object.keys(t('portfolioItems', { returnObjects: true }))];
  };

  const getFilteredItems = () => {
    const items = t('portfolioItems', { returnObjects: true });
    if (selectedCategory === 'All') {
      return Object.values(items).flat();
    }
    return items[selectedCategory] || [];
  };

  const categories = getCategories();
  const filteredItems = getFilteredItems();

  return (
    <div className="main-content">
      <section>
        <h1>Portfolio</h1>
        <div className="portfolio-tabs">
          {categories.map(category => (
            <button
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {t(`${category}`)}
            </button>
          ))}
        </div>
        <div className="portfolio-items">
          {filteredItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              <img src={require(`../${item.image}`)} alt={item.title} />
              <div className="portfolio-item-info">
                <span className={`category-label ${item.category.toLowerCase()}`}>{t(`${item.category}`)}</span>
                <h3>{item.title}</h3>
                {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer">{item.type || t('viewMore')}</a>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
