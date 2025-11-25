import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A modern e-commerce platform built with React and Node.js. Features include real-time inventory, secure payments, and an intuitive admin dashboard.',
            date: '2025-06-15',
            image: 'https://plus.unsplash.com/premium_photo-1672883551967-ab11316526b4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            link: 'https://github.com/SoloSorceror/EcommerceWebsite'
        },
        {
            id: 2,
            title: 'Lyra Ai',
            description: 'A SaaS-integrated medical reception chatbot using a React UI and a custom NLP pipeline that extracts symptoms, generates symptom codes, and classifies patient issues with high accuracy, with LLM fallback for low- confidence cases',
            date: '2025-10-26',
            image: '/public/LyraAi.jpg',
            link: 'https://github.com/SoloSorceror/Lyra'
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'Beautiful weather dashboard with real-time data, 7-day forecasts, and interactive maps. Built Using OpenWeather API.',
            date: '2024-11-10',
            image: '/public/weather.jpg',
            link: 'https://github.com/SoloSorceror/weather-whisperer-bot-buddy'
        },
        {
            id: 4,
            title: 'My Portfolio',
            description: 'This is my portfolio website, You are currently on it!',
            date: '2025-11-26',
            image: '/public/PortfolioMe.jpg',
            link: '#'
        }
    ];

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    };

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Projects</h2>

                <div className="projects-scroll-container">
                    <div className="projects-horizontal-scroll">
                        {projects.map((project) => (
                            <article key={project.id} className="project-card card">
                                <div className="project-header">
                                    <div className="project-dots">
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                    <span className="project-date">{formatDate(project.date)}</span>
                                </div>
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <a
                                        href={project.link}
                                        className="btn project-btn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View project
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="scroll-hint">
                    ← Scroll horizontally to see more →
                </div>

                <div className="view-more-container">
                    <a
                        href="https://github.com/SoloSorceror"
                        className="btn view-more-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View More Projects on GitHub
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
