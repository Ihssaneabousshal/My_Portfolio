import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNavComponent from './components/SideNavComponent';
import ProfileComponent from './components/ProfileComponent';
import MainContentComponent from './components/MainContentComponent';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        
        <div className="app-container">
          <ProfileComponent />
        </div>
        <div className="content-container">
          <SideNavComponent />
          <MainContentComponent />
        </div>
      </div>
    </Router>
  );
};

export default App;
