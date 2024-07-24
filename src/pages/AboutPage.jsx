import React from 'react';
import '../assets/styles/AboutPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCloud, faSearch, faCode } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const icons = {
  faCloud,
  faCogs,
  faSearch,
  faCode
};

const Activity = ({ icon, title, description }) => (
  <div className="activity">
    <FontAwesomeIcon icon={icons[icon]} className="activity-icon" size="3x" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Description = ({ description }) => (
  <p>
    {description.split('/ ').map((sentence, index) => (
      <React.Fragment key={index}>
        {sentence}
        <br />
        <br />
      </React.Fragment>
    ))}
  </p>
);

const AboutPage = () => {
  const { t } = useTranslation();

  const activities = t('about.activities', { returnObjects: true });


  if (!Array.isArray(activities)) {
    console.error('activities is not an array:', activities);
    return null;
  }

  return (
    <div className="main-content">
      <section className="about-section">
        <h1>{t('about.title')}</h1>
        <Description description={t('about.description')} />
      </section>
      <section className="what-i-doing">
        <h1>{t('about.activitiesTitle')}</h1>
        <div className="activities">
          {activities.map((activity, index) => (
            <Activity key={index} {...activity} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
