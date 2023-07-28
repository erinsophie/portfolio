function Project({ title, description, site, source, image }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={site}>Live site</a>
      <a href={source}>Github repo</a>
    </div>
  );
}

export default Project;
