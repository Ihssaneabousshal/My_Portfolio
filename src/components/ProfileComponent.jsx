import cv from '../assets/doc/cv.pdf'
import profilePic from '../assets/images/Aboussahl.jpg'; 
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faCircle, faDownload } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/ProfileSection.css'

const socialMediaLinks = [
  { icon: faLinkedin, url: 'https://www.linkedin.com/in/ihssane-aboussahl/' },
  { icon: faGithub, url: 'https://github.com/Ihssaneabousshal' },
];

const personalInfo = {
  name: 'Ihssane Aboussahl',
  title: 'Cloud Engineer | DevOps | SRE ',
  email: 'ihssaneaboussahl@gmail.com',
  location: 'Rabat, MA',
  availability: 'Available',
  resume: cv,
};

const ProfileComponent = () => (
  <div className="profile-container">
    <div className="profile-section">
      <div className="profile-image">
        <img src={profilePic} alt="Profile Picture" />
      </div>
      <div className="profile-info">
        <h2>{personalInfo.name}</h2>
        <p>{personalInfo.title}</p>
        <div className="social-icons">
          {socialMediaLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
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
        <a href={personalInfo.resume} className="download-btn" download="Ihssane_Aboussahl_CV.pdf">
          <FontAwesomeIcon icon={faDownload} /> Download CV
        </a>
      </div>
    </div>
  </div>
);


export default ProfileComponent;
