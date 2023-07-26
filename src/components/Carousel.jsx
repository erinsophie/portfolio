import { useState } from 'react';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const iconsToShow = 5;

  const icons = [
    { icon: 'devicon-html5-plain colored', label: 'HTML5' },
    { icon: 'devicon-css3-plain colored', label: 'CSS3' },
    { icon: 'devicon-javascript-plain colored', label: 'Javascript' },
    { icon: 'devicon-react-original colored', label: 'React' },
    { icon: 'devicon-git-plain colored', label: 'Git' },
    { icon: 'devicon-github-original colored', label: 'GitHub' },
    { icon: 'devicon-jest-plain colored', label: 'Jest' },
    { icon: 'devicon-webpack-plain colored', label: 'Webpack' },
    { icon: 'devicon-npm-original-wordmark colored', label: 'NPM' },
  ];

  const totalIcons = icons.length;

  function handleNext() {
    setCurrentIndex((currentIndex + 1) % totalIcons);
  }

  function handlePrev() {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : totalIcons - 1);
  }

  const getVisibleIcons = () => {
    const visibleIcons = [];
    for (let i = 0; i < iconsToShow; i++) {
      visibleIcons.push(icons[(currentIndex + i) % totalIcons]);
    }
    return visibleIcons;
  };

  return (
    <div className="skills-container">
      <button onClick={handlePrev}>prev</button>

      <div className="skills-carousel">
        {getVisibleIcons().map((skill, index) => (
          <div key={index} className="skill">
            <i className={skill.icon}></i>
            <p>{skill.label}</p>
          </div>
        ))}
      </div>

      <button onClick={handleNext}>next</button>
    </div>
  );
}

export default Carousel;
