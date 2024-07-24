import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import '../assets/styles/SideNavComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faCube, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  user: faUser,
  fileAlt: faFileAlt,
  cube: faCube,
  envelope: faEnvelope,
};

const SideNavComponent = () => {
  const { t } = useTranslation();

  const navItems = t('sideNav.items', { returnObjects: true });

  return (
    <div className="side-nav">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          exact={item.exact}
          className="nav-item"
          activeClassName="active"
        >
          <FontAwesomeIcon icon={iconMap[item.icon]} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default SideNavComponent;
