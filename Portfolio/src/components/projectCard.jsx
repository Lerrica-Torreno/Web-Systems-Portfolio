function ProjectCard({
  title,
  description,
  technologies,
  projectLink,
}) {
  return (
    <article className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <div className="project-technologies">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <a
        href={projectLink}
        className="project-button"
        target="_blank"
        rel="noreferrer"
      >
        View Project
      </a>
    </article>
  )
}

export default ProjectCard