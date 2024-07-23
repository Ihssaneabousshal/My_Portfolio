import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ResumePage from '../pages/ResumePage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import '../assets/styles/MainContentComponent.css';

const MainContentComponent = () => {
  return (
    
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    
  );
};

export default MainContentComponent;
