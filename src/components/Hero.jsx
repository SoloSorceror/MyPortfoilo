import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hello.<br />
              I'm Sanjay.
            </h1>
            <p className="hero-subtitle">
              I'm a creative developer and designer passionate about building
              beautiful and functional web experiences.
            </p>
            <a href="#projects" className="btn hero-btn">
              View my work
              <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
          </div>
          <div className="hero-illustration">
            <div className="retro-computer">
              <div className="computer-screen">
                <div className="screen-content">
                  <div className="screen-face">
                    <div className="eye eye-left"></div>
                    <div className="eye eye-right"></div>
                    <div className="smile"></div>
                  </div>
                </div>
                <div className="screen-base"></div>
              </div>
              <div className="pen-holder">
                <div className="pen"></div>
                <div className="pen-tip"></div>
                <div className="bubble bubble-1"></div>
                <div className="bubble bubble-2"></div>
                <div className="bubble bubble-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
