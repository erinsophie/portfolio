import '../styles/Projects.css';
import Project from './Project';
import projectsList from './ProjectData'

function Projects() {

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
