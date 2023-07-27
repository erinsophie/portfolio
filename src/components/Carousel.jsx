import { useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

function Carousel() {
  const icons = [
    { icon: 'devicon-html5-plain', label: 'HTML5' },
    { icon: 'devicon-css3-plain', label: 'CSS3' },
    { icon: 'devicon-javascript-plain', label: 'Javascript' },
    { icon: 'devicon-react-original', label: 'React' },
    { icon: 'devicon-git-plain', label: 'Git' },
    { icon: 'devicon-github-original', label: 'GitHub' },
    { icon: 'devicon-jest-plain', label: 'Jest' },
    { icon: 'devicon-webpack-plain', label: 'Webpack' },
    { icon: 'devicon-npm-original-wordmark', label: 'NPM' },
  ];

  useEffect(() => {
    const flkty = new Flickity('.icons-carousel', {
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      pageDots: false,
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
