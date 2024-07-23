import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/SideNavComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faCube, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SideNavComponent = () => {
  return (
    <div className="side-nav">
      <NavLink to="/" exact className="nav-item" activeClassName="active">
        <FontAwesomeIcon icon={faUser} />
        <span>ABOUT</span>
      </NavLink>
      <NavLink to="/resume" className="nav-item" activeClassName="active">
        <FontAwesomeIcon icon={faFileAlt} />
        <span>RESUME</span>
      </NavLink>
      <NavLink to="/portfolio" className="nav-item" activeClassName="active">
        <FontAwesomeIcon icon={faCube} />
        <span>PORTFOLIO</span>
      </NavLink>
      <NavLink to="/contact" className="nav-item" activeClassName="active">
        <FontAwesomeIcon icon={faEnvelope} />
        <span>CONTACT</span>
      </NavLink>
    </div>
  );
};

export default SideNavComponent;
