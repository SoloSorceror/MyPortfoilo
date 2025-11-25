import React from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import About from './components/About';
import Projects from './components/Projects';
import SocialFeed from './components/SocialFeed';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <DarkModeToggle />
      <Hero />
      <QuickLinks />
      <About />
      <Projects />
      <SocialFeed />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
