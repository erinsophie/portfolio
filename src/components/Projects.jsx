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
    },
  ];

  return (
    <div className="projects">
      {projectsList.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;
