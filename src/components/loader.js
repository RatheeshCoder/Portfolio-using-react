import React, { useState, useEffect } from 'react';
import loading from '../assets/code-toxic-logo.gif'
import NavBar from './NavBar'
import Hero from '../pages/Hero';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second delay before loading the page
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []);

  if (isLoading) {
    // Display your rotating loading image here
    const loaderStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };
    return (
        <div style={loaderStyle}>
        <img src={loading} alt="Loading" />
      </div>
    );
  }

  // Render the actual content of your page when isLoading is false
  return (
    <div className="page-content">
      <NavBar />
      <div className="home">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default LoadingAnimation;
