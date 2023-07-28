function Project({ title, description, site, source, image, tech }) {
  return (
    <div className="project">
      <h2 className="project-title">{title}</h2>

      <div className="project-main">
        <img src={image} alt={title} className="project-img" />
        <div className="project-info">
          <div>
            <p className="bold">Description: </p>
            <p>{description}</p>
          </div>
          <div>
            <p className="bold">Technologies: </p>
            <ul className="tech-list">
              {tech.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="project-links">
        <a href={site}>Live site</a>
        <a href={source}>Github repo</a>
      </div>
    </div>
  );
}

export default Project;
