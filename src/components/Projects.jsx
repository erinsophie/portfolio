import '../styles/Projects.css';
import Project from './Project';
import weatherAppImg from '../assets/img/weather-app.png';

function Projects() {
  const projectsList = [
    {
      title: 'Weather App',
      description: `Search for any city and the current data, including local time, temperature and condition will be displayed. Toggle to see either today's forecast or this week's forecast. Displays the next 12 hours of weather, adjusting for the city's local time.`,
      site: 'https://erinsophie.github.io/weather-app/',
      source: 'https://github.com/erinsophie/weather-app',
      image: weatherAppImg,
      tech: 'HTML, CSS, Javascript, Weather API',
    },
  ];

  return (
    <div className="projects">
      <button className="next-project">
        <i className="fa-solid fa-chevron-up"></i>
      </button>
      {projectsList.map((project, index) => (
        <Project key={index} {...project} />
      ))}
      <button className="prev-project">
        <i className="fa-solid fa-chevron-down"></i>
      </button>
    </div>
  );
}

export default Projects;
