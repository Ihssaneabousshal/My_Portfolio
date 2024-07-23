import React, { useState } from 'react';
import '../assets/styles/PortfolioPage.css';

import jenkinsImage from '../assets/images/jenkins.png';
import devopsImage from '../assets/images/devops.png';
import hotelImage from '../assets/images/hotel.png';
import awsArchitectImage from '../assets/images/aws-architect.png';
import awsPractImage from '../assets/images/aws-pract.jpg';
import az900Image from '../assets/images/az900.png';

const portfolioItems = [
  {
    category: 'Project',
    title: 'Implémentation d’une CI/CD pipeline pour les Containers',
    description: 'Technologies :Jenkins, Maven, SonarQube, Docker, Kubernetes, Helm',
    image: jenkinsImage,
  },
  {
    category: 'Project',
    title: "Mise en place d'une solution DevSecOps dans Azure DevOps",
    description: 'Technologies : Azure DevOps, SonarCloud, Snyk, OWASP ZAP',
    image: devopsImage,
  },
  {
    category: 'Project',
    title: "BookIt : Une application web microservices de réservation d'hôtel",
    description: 'Technologies :Jenkins, Maven, SonarQube, Docker, Kubernetes, Helm',
    image: hotelImage,
  },
  {
    category: 'Certifications',
    title: 'SAA-C03 : AWS Certified Solutions Architect - Associate',
    type:'Certificate',
    link: 'https://www.credly.com/badges/199eaa02-76ac-486f-aba9-e0e9ca65b551/linked_in_profile',
    image: awsArchitectImage,
  },
  {
    category: 'Certifications',
    title: 'CLF-C01 : Aws Cloud Practionner',
    type:'Certificate',
    link: 'https://www.credly.com/badges/199eaa02-76ac-486f-aba9-e0e9ca65b551/linked_in_profile',
    image: awsPractImage,
  },
  {
    category: 'Certifications',
    title: 'Az 900 : Azure Fundamentals',
    type:'Certificate',
    link: 'https://www.credly.com/badges/f2a99507-597b-49a8-8c85-728f7244ef09?source=linked_in_profile',
    image: az900Image,
  },
];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="main-content">
      <section className="">
        <h1>Portfolio</h1>
        <div className="portfolio-tabs">
          {['All', 'Certifications', 'Project'].map(category => (
            <button
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="portfolio-items">
          {filteredItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              <img src={item.image} alt={item.title} />
              <div className="portfolio-item-info">
                <span className={`category-label ${item.category.toLowerCase()}`}>{item.category}</span>
                <h3>{item.title}</h3>
                <a href={item.link}>{item.type}</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
