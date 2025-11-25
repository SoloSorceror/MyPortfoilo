import React, { useState } from 'react';
import './About.css';

const About = () => {
    const [showAllSkills, setShowAllSkills] = useState(false);
    const [expandedCard, setExpandedCard] = useState(null);

    // Core skills shown initially
    const coreSkills = [
        { name: 'MongoDB', icon: '🍃', category: 'Database' },
        { name: 'Express.js', icon: '⚡', category: 'Backend' },
        { name: 'React.js', icon: '⚛️', category: 'Frontend' },
        { name: 'Node.js', icon: '🟢', category: 'Backend' },
        { name: 'JavaScript', icon: '🟨', category: 'Language' },
        { name: 'Python', icon: '🐍', category: 'Language' }
    ];

    // Additional skills shown when expanded
    const additionalSkills = [
        { name: 'C++', icon: '⚙️', category: 'Language' },
        { name: 'n8n', icon: '🔄', category: 'Automation' },
        { name: 'Machine Learning', icon: '🤖', category: 'AI/ML' },
        { name: 'Git', icon: '📚', category: 'Tools' },
        { name: 'Docker', icon: '🐳', category: 'DevOps' },
        { name: 'SQL', icon: '🗄️', category: 'Database' }
    ];

    const displayedSkills = showAllSkills ? [...coreSkills, ...additionalSkills] : coreSkills;

    const interests = [
        { name: 'Chess', icon: '♟️', description: 'Strategic thinking & planning' },
        { name: 'Competitive Programming', icon: '💻', description: 'Problem solving & algorithms' },
        { name: 'Learning New Tech', icon: '📚', description: 'Continuous growth & innovation' },
        { name: 'Open Source', icon: '🌐', description: 'Contributing to community' },
        { name: 'Reading', icon: '📰', description: 'Staying updated with trends' },
        { name: 'Building Projects', icon: '🚀', description: 'Hands-on learning' }
    ];

    // Experience data with detailed information
    const experiences = [
        {
            id: 1,
            type: 'Internship',
            role: 'Full Stack Developer Intern',
            company: 'Orbosis Global',
            period: 'Nov 2024 - Present',
            description: 'Worked on building scalable web applications using MERN stack',
            details: {
                responsibilities: [
                    'Developed RESTful APIs using Node.js and Express',
                    'Built responsive user interfaces with React.js',
                    'Implemented MongoDB database schemas and queries',
                    'Collaborated with team using Git and Agile methodologies'
                ],
                technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Git'],
                achievements: [
                    'Collabrated with my team and worked on live projects',
                    'Learned and implemented new technologies'
                ]
            }
        },
        {
            id: 2,
            type: 'Education',
            role: 'Academic Background',
            company: 'Multiple Institutions',
            period: '2008 - Present',
            description: 'My educational journey from schooling to engineering.',
            details: {
                timeline: [
                    {
                        institution: 'Lovely Professional University',
                        degree: 'Computer Science Engineering',
                        period: '2023 - Present',
                        details: [
                            'Focused on Software Development, ML, and Data Structures',
                            'Data Structures and Algorithms',
                            'Machine Learning and AI',
                            'Web Technologies'
                        ]
                    },
                    {
                        institution: 'Pearl Academy Biswanath College',
                        degree: 'Higher Secondary (11th & 12th)',
                        period: '2021 - 2023',
                        details: [
                            'Completed Higher Secondary Education',
                            'Physics, Chemistry, Mathematics, Computer Science',
                            'Academic Excellence'
                        ]
                    },
                    {
                        institution: 'Stella Maris School Helem Assam',
                        degree: 'Schooling',
                        period: '2008 - 2020',
                        details: [
                            'Completed Primary and Secondary Schooling',
                            'Foundation in Science and Mathematics'
                        ]
                    }
                ],
                achievements: [
                    'Attended multiple hackathons',
                    'Worked on multiple projects',
                    'Learned and implemented new technologies'
                ]
            }
        },
        {
            id: 5,
            type: 'Project',
            role: 'Freelance Developer',
            company: 'Self-Employed',
            period: '2023 - Present',
            description: 'Building custom solutions for clients and personal projects',
            details: {
                projects: [
                    'E-commerce platforms with payment integration',
                    'Automation workflows using n8n',
                    'Portfolio websites for clients',
                    'Chrome extensions for productivity'
                ],
                technologies: ['React', 'Node.js', 'n8n', 'MongoDB', 'Stripe API'],
                achievements: [
                    'Updated with latest technologies',
                    'Good remarks from peers and clients',
                    'Built reusable component library'
                ]
            }
        }
    ];

    const toggleCard = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-intro card">
                        <div className="about-header">
                            <div className="header-dots">
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                            <span className="header-label">Introduction</span>
                        </div>
                        <div className="about-text">
                            <h3>Hi, I'm Sanjay Chetry! 👋</h3>
                            <p>
                                I'm a passionate full-stack developer with expertise in the <strong>MERN stack</strong>
                                (MongoDB, Express.js, React.js, Node.js). I love building innovative web applications
                                and exploring the fascinating world of <strong>Machine Learning</strong>.
                            </p>
                            <p>
                                My journey in tech is driven by curiosity and a constant desire to learn. Whether it's
                                mastering a new framework, solving complex algorithms, or understanding ML models,
                                I'm always pushing my boundaries.
                            </p>
                            <p>
                                When I'm not coding, you'll find me strategizing over a chess board ♟️, competing
                                in programming competitions, or hanging out with friends. These activities keep my
                                problem-solving skills sharp and my mind engaged!
                            </p>
                        </div>
                    </div>

                    <div className="skills-card card">
                        <div className="card-header-custom">
                            <div className="header-dots">
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                            <span className="header-label">Tech Stack</span>
                        </div>
                        <div className="skills-content">
                            {displayedSkills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <span className="skill-icon">{skill.icon}</span>
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-category">{skill.category}</span>
                                </div>
                            ))}
                        </div>
                        <button
                            className="view-more-skills-btn"
                            onClick={() => setShowAllSkills(!showAllSkills)}
                        >
                            <span className="btn-text">
                                {showAllSkills ? 'Show Less' : `View More Skills (+${additionalSkills.length})`}
                            </span>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                style={{
                                    transform: showAllSkills ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease'
                                }}
                            >
                                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </button>
                    </div>

                    <div className="interests-section">
                        <h3 className="subsection-title">Interests & Hobbies</h3>
                        <div className="interests-scroll-container">
                            <div className="interests-horizontal-scroll">
                                {interests.map((interest, index) => (
                                    <div key={index} className="interest-card card-mini">
                                        <span className="interest-icon-large">{interest.icon}</span>
                                        <h4>{interest.name}</h4>
                                        <p>{interest.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="scroll-hint">
                            ← Scroll horizontally to see more →
                        </div>
                    </div>

                    <div className="experience-section">
                        <h3 className="subsection-title">Experience & Education</h3>
                        <div className="experience-scroll-container">
                            <div className="experience-horizontal-scroll">
                                {experiences.map((exp) => (
                                    <div
                                        key={exp.id}
                                        className={`experience-card card ${expandedCard === exp.id ? 'expanded' : ''}`}
                                        onClick={() => toggleCard(exp.id)}
                                    >
                                        <div className="card-header-custom">
                                            <div className="header-dots">
                                                <span className="dot"></span>
                                                <span className="dot"></span>
                                            </div>
                                            <span className="header-label">{exp.type}</span>
                                        </div>
                                        <div className="experience-content">
                                            <h4 className="exp-role">{exp.role}</h4>
                                            <div className="exp-meta">
                                                <span className="exp-company">{exp.company}</span>
                                                <span className="exp-period">{exp.period}</span>
                                            </div>
                                            <p className="exp-description">{exp.description}</p>

                                            {expandedCard === exp.id && (
                                                <div className="exp-details">
                                                    {exp.details.timeline && (
                                                        <div className="detail-section">
                                                            <div className="timeline-list">
                                                                {exp.details.timeline.map((item, idx) => (
                                                                    <div key={idx} className="timeline-item" style={{ marginBottom: '1.5rem' }}>
                                                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                                            <h5 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1rem' }}>{item.institution}</h5>
                                                                            <span className="exp-period" style={{ fontSize: '0.85rem' }}>{item.period}</span>
                                                                        </div>
                                                                        <p style={{ margin: '0 0 0.5rem 0', color: 'var(--primary-color)', fontWeight: 500, fontSize: '0.9rem' }}>{item.degree}</p>
                                                                        <ul style={{ marginTop: 0 }}>
                                                                            {item.details.map((detail, dIdx) => (
                                                                                <li key={dIdx}>{detail}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                    {exp.details.responsibilities && (
                                                        <div className="detail-section">
                                                            <h5>Responsibilities:</h5>
                                                            <ul>
                                                                {exp.details.responsibilities.map((item, idx) => (
                                                                    <li key={idx}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {exp.details.courses && (
                                                        <div className="detail-section">
                                                            <h5>Key Courses:</h5>
                                                            <ul>
                                                                {exp.details.courses.map((item, idx) => (
                                                                    <li key={idx}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {exp.details.projects && (
                                                        <div className="detail-section">
                                                            <h5>Projects:</h5>
                                                            <ul>
                                                                {exp.details.projects.map((item, idx) => (
                                                                    <li key={idx}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {exp.details.technologies && (
                                                        <div className="detail-section">
                                                            <h5>Technologies:</h5>
                                                            <div className="tech-tags">
                                                                {exp.details.technologies.map((tech, idx) => (
                                                                    <span key={idx} className="tech-tag">{tech}</span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {exp.details.achievements && (
                                                        <div className="detail-section">
                                                            <h5>Achievements:</h5>
                                                            <ul>
                                                                {exp.details.achievements.map((item, idx) => (
                                                                    <li key={idx}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            <div className="expand-indicator">
                                                {expandedCard === exp.id ? 'Click to collapse' : 'Click to expand'}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="scroll-hint">
                            ← Scroll horizontally to see more →
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
