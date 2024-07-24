import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faCircle, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/ProfileSection.css';

const iconMapping = {
  faLinkedin: faLinkedin,
  faGithub: faGithub,
};

const ProfileComponent = () => {
  const { t, i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(i18n.language || 'en'); 

  useEffect(() => {
    if (i18n.language === 'en' || i18n.language === 'fr') {
      setActiveLanguage(i18n.language);
    } else {
      i18n.changeLanguage('en'); 
      setActiveLanguage('en');
    }
  }, [i18n.language, i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLanguage(lng);
  };

  const socialMediaLinks = t('profile.socialMediaLinks', { returnObjects: true });
  const personalInfo = t('profile.personalInfo', { returnObjects: true });

  return (
    <div className="profile-container">
      <div className="profile-section">
        <div className="profile-image">
          <img src={require(`../${personalInfo.profilePic}`)} alt="Profile Picture" />
        </div>
        <div className="profile-info">
          <h2>{personalInfo.name}</h2>
          <p>{personalInfo.title}</p>
          <div className="section">
            {socialMediaLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={iconMapping[link.icon]} />
              </a>
            ))}
          </div>
          <div className="section">
            <button
              className={`bt ${activeLanguage === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              Eng
            </button>
            <p>|</p>
            <button
              className={`bt ${activeLanguage === 'fr' ? 'active' : ''}`}
              onClick={() => changeLanguage('fr')}
            >
              Fr
            </button>
          </div>
        </div>
        <div className="contact-info">
          <p>
            <a href={`mailto:${personalInfo.email}`} className="email-link">
              <FontAwesomeIcon icon={faEnvelope} color='#1bb0dd' /> {personalInfo.email}
            </a>
          </p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} color='#1bb0dd' /> {personalInfo.location}</p>
          <p><FontAwesomeIcon icon={faCircle} color='#32CD32' /> {personalInfo.availability}</p>
          <a href={require(`../${personalInfo.resume}`)} className="download-btn" download="Ihssane_Aboussahl_CV.pdf">
            <FontAwesomeIcon icon={faDownload} /> {t('profile.downloadCV')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
