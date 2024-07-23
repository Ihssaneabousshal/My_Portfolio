import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faCogs } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/ResumePage.css';

const TimelineItem = ({ title, duration, location, description, technologies }) => (
    <div className="timeline-item">
        <div className="timeline-icon"></div>
        <div className="timeline-content">
            <h3>{title}</h3>
            <span>{duration} | {location}</span>
            <p>{description.split('. ').map((sentence, index) => (
                <React.Fragment key={index}>
                    - {sentence}.
                    <br />
                </React.Fragment>
            ))}</p>
            {technologies && <p className="technologies"><strong>Technologies:</strong> {technologies}</p>}
        </div>
    </div>
);

const experienceData = [
    {
        title: 'Deloitte as Cloud Intern',
        duration: 'Jan. - Jul. 2024',
        location: 'Casablanca, MA',
        description: 'Developed Terraform IaC modules to automate the creation of environments on Azure. Wrote PowerShell tests. Migrated on-premise applications to Azure using Azure Migrate. Automated deployments and testing via Azure DevOps.',
        technologies: 'Azure, Azure Migrate, Terraform, Azure DevOps',
    },
    {
        title: 'Inpt as DevOps Intern',
        duration: 'Jul. - Aout. 2023',
        location: 'Rabat, MA',
        description: 'Developed an API and containerized it with Docker. Created Terraform modules for provisioning the AWS environment. Configured targets using Ansible playbooks. Automated deployments via Jenkins.',
        technologies: 'Next.js, MongoDB, AWS, Jenkins, Docker, Terraform, Ansible',
    },
    {
        title: 'Capgemini as Cloud Intern',
        duration: 'Jul. 2022',
        location: 'Casablanca, MA',
        description: 'Deployed and configured Azure resources using ARM templates. Monitored applications via Azure Monitor. Created budget alerts with Microsoft Cost Management.',
        technologies: 'Azure Resource Manager (ARM), Azure VMs, Azure Functions, Azure Storage, Microsoft Cost Management, Azure Advisor',
    },
];

const educationData = [
    {
        title: 'National Institute of Posts and Telecommunications ‑ INPT',
        duration: '2021-2024',
        location: 'Rabat, Morocco',
        description: 'Engineering Degree, Cloud Engineering',
    },
    {
        title: 'CPGE Bab Essahra - CPGE Ibn Timiya',
        duration: '2019-2021',
        location: 'Rabat, Morocco',
        description: 'Preparatory Classes, PSI*',
    },
];

const SkillProgress = ({ skill, level, width }) => (
    <div className="progress-bar">
        <div className="progress" style={{ width: `${width}%` }}>
            <div className="item">{skill}</div>
            <div className="pr">{level}</div>
        </div>
    </div>
);

const skills = [
    { skill: 'AWS, AZURE', level: 'Intermediate', width: 80 },
    { skill: 'Bash, PowerShell', level: 'Intermediate', width: 80 },
    { skill: 'NETWORK', level: 'Intermediate', width: 80 },
    { skill: 'FINOPS', level: 'Intermediate', width: 80 },
    { skill: 'Jenkins, GitLab, AzureDevOps', level: 'Intermediate', width: 80 },
    { skill: 'Ansible, Terraform', level: 'Intermediate', width: 80 },
    { skill: 'Docker, Kubernetes', level: 'Intermediate', width: 80 },
    { skill: 'MySQL, MongoDB, PostgreSql', level: 'Intermediate', width: 80 },
];

const ResumePage = () => {
    return (
        <div className="main-content">
            <section className="resume-section ">
                <h2><FontAwesomeIcon className='resume-icon' icon={faBriefcase} size="x"/> Experience</h2>
                <div className="timeline">
                    {experienceData.map((item, index) => (
                        <TimelineItem key={index} {...item} />
                    ))}
                </div>
            </section>

            <section className="resume-section ">
                <h2><FontAwesomeIcon className='resume-icon' icon={faGraduationCap} /> Education</h2>
                <div className="timeline">
                    {educationData.map((item, index) => (
                        <TimelineItem key={index} {...item} />
                    ))}
                </div>
            </section>

            <section className="resume-section skills">
                <h2><FontAwesomeIcon icon={faCogs} className='resume-icon'  /> Skills</h2>
                {skills.map(({ skill, level, width }, index) => (
                    <SkillProgress key={index} skill={skill} level={level} width={width} />
                ))}
            </section>
        </div>
    );
};

export default ResumePage;
