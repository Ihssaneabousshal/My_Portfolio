import React from 'react';
import '../assets/styles/AboutPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCloud, faSearch, faCode } from '@fortawesome/free-solid-svg-icons';

const Activity = ({ icon, title, description }) => (
  <div className="activity">
    <FontAwesomeIcon icon={icon} className="activity-icon" size="3x" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const activitiesData = [
  {
    icon: faCloud,
    title: 'Cloud Engineer',
    description: 'I craft secure, scalable cloud solutions ',
  },
  {
    icon: faCogs,
    title: 'DevOps',
    description: 'I speed up deployments and making processes more efficient with automation and CI/CD',
  },
  
  {
    icon: faSearch,
    title: 'SRE',
    description: 'I make sure a software is rock-solid, reliable, and ready for anything',
  },
  {
    icon: faCode,
    title: 'Software Development',
    description: 'I continuously learn and code, whether it’s for fun or specific projects . My GitHub might not be perfect but trust me I love to code ;)',
  },
];

const AboutPage = () => {
  return (
    <div className="main-content">
      <section className="about-section">
        <h1>About Me</h1>
        <p>I am Ihssane Aboussahl, a dedicated and skilled Cloud and DevOps Engineer with a robust background in cloud computing services, infrastructure provisioning, automation, and continuous integration. I am passionate about leveraging my technical expertise to contribute to innovative projects and streamline development processes.</p>
        <p>Have experience working with tools such as Jenkins, Terraform, and Ansible to streamline development processes and ensure efficient code deployment. Proficient in managing and monitoring cloud infrastructure services on AWS and Azure, as well as maintaining high availability in Kubernetes-based container clusters. My expertise also includes integrating automation testing into the CI/CD pipeline and developing scripts to automate tasks, improving efficiency and reducing manual effort.</p>
        <p>With an Engineer's degree in Computer Science, I am committed to continuous learning and professional growth. I am seeking opportunities to leverage my skills and contribute to the success of cloud engineering, DevOps, SRE projects.</p>
        <p>Beyond my professional pursuits, I am committed to continuous learning and personal growth. In my spare time, I enjoy reading, exploring graphic design, and engaging in outdoor activities.</p>
      </section>
      <section className="what-i-doing">
        <h1>What I'm Doing</h1>
        <div className="activities">
          {activitiesData.map((activity, index) => (
            <Activity key={index} {...activity} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
