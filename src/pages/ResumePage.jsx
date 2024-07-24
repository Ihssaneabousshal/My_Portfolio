import React from 'react';
import { useTranslation } from 'react-i18next';
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

const SkillProgress = ({ skill, level, width }) => (
    <div className="progress-bar">
        <div className="progress" style={{ width: `${width}%` }}>
            <div className="item">{skill}</div>
            <div className="pr">{level}</div>
        </div>
    </div>
);

const ResumePage = () => {
    const { t } = useTranslation();
    const experience = t('resume.experience', { returnObjects: true });
    const education = t('resume.education', { returnObjects: true });
    const skills = t('resume.skills', { returnObjects: true });

    return (
        <div className="main-content">
            <section className="resume-section">
                <h2><FontAwesomeIcon className='resume-icon' icon={faBriefcase} size="x"/> {t('Experience')}</h2>
                <div className="timeline">
                    {experience.map((item, index) => (
                        <TimelineItem key={index} {...item} />
                    ))}
                </div>
            </section>

            <section className="resume-section">
                <h2><FontAwesomeIcon className='resume-icon' icon={faGraduationCap} /> {t('Education')}</h2>
                <div className="timeline">
                    {education.map((item, index) => (
                        <TimelineItem key={index} {...item} />
                    ))}
                </div>
            </section>

            <section className="resume-section skills">
                <h2><FontAwesomeIcon icon={faCogs} className='resume-icon'  /> {t('Skills')}</h2>
                {skills.map(({ skill, level, width }, index) => (
                    <SkillProgress key={index} skill={skill} level={level} width={width} />
                ))}
            </section>
        </div>
    );
};

export default ResumePage;
