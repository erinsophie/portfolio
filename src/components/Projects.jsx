import { useState, useEffect } from 'react';
import '../styles/Projects.css';
import Project from './Project';
import projectsList from './ProjectData';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  function handleNext() {
    if (currentIndex < projectsList.length - 1)
      setCurrentIndex(currentIndex + 1);
    if (currentIndex === projectsList.length - 1) setCurrentIndex(0);
  }

  function handlePrev() {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) setCurrentIndex(projectsList.length - 1);
  }

  return (
    <div className="projects">
      <button onClick={handleNext} className="next-project">
        <i className="fa-solid fa-chevron-up"></i>
      </button>

      <div className={animate ? 'swipeEffect' : ''}>
        <Project {...projectsList[currentIndex]} />
      </div>

      <button onClick={handlePrev} className="prev-project">
        <i className="fa-solid fa-chevron-down"></i>
      </button>
    </div>
  );
}

export default Projects;
