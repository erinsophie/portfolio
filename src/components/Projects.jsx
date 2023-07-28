import { useState } from 'react';
import '../styles/Projects.css';
import Project from './Project';
import projectsList from './ProjectData';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState('none');

  function handleNext() {
    if (currentIndex < projectsList.length - 1)
      setCurrentIndex(currentIndex + 1);
    if (currentIndex === projectsList.length - 1) setCurrentIndex(0);

    triggerAnimation('up');
  }

  function handlePrev() {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) setCurrentIndex(projectsList.length - 1);

    triggerAnimation('down');
  }

  const triggerAnimation = (direction) => {
    setSwipeDirection(direction);
    setTimeout(() => {
      setSwipeDirection('none');
    }, 500);
  };

  return (
    <div className="projects">
      <button onClick={handleNext} className="next-project">
        <i className="fa-solid fa-chevron-up"></i>
      </button>

      <Project
        {...projectsList[currentIndex]}
        className={
          swipeDirection === 'up'
            ? 'swipeUpEffect'
            : swipeDirection === 'down'
            ? 'swipeDownEffect'
            : ''
        }
      />

      <button onClick={handlePrev} className="prev-project">
        <i className="fa-solid fa-chevron-down"></i>
      </button>
    </div>
  );
}

export default Projects;
