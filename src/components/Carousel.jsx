import { useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

function Carousel() {
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

  useEffect(() => {
    const flkty = new Flickity('.icons-carousel', {
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
    });

    return () => flkty.destroy();
  }, []);

  return (
      <div className="icons-carousel">
        {icons.map((item, index) => (
          <div key={index} className="icon">
            <i className={item.icon} alt={`carousel-image-${index}`} />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
  );
}

export default Carousel;
