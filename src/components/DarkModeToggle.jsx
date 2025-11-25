import React, { useState, useEffect } from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check localStorage for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    useEffect(() => {
        // Apply theme to document
        const theme = isDarkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            className="dark-mode-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
        >
            <div className={`toggle-icon ${isDarkMode ? 'moon' : 'sun'}`}>
                {isDarkMode ? '🌙' : '☀️'}
            </div>
        </button>
    );
};

export default DarkModeToggle;
