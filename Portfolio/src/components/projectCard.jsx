function ProjectCard({
  number,
  title,
  category,
  status,
  description,
  technologies,
  link,
  liveLink,
}) {
  const hasGithub =
    link &&
    link !== "#";

  const hasLiveLink =
    liveLink &&
    liveLink !== "#";

  return (
    <article className="project-card">

      <div className="project-top">
        <span className="project-number">
          {number}
        </span>

        <span className="project-status">
          {status}
        </span>
      </div>

      <div className="project-body">

        <p className="project-category">
          {category}
        </p>

        <h3 className="project-title">
          {title}
        </h3>

        <p className="project-description">
          {description}
        </p>

      </div>

      <div className="project-technologies">
        {technologies.map((technology) => (
          <span
            className="project-technology"
            key={technology}
          >
            {technology}
          </span>
        ))}
      </div>

      {(hasGithub || hasLiveLink) && (
        <div className="project-actions">

          {hasGithub && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span>↗</span>
            </a>
          )}

          {hasLiveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="project-live-link"
            >
              Live project
              <span>↗</span>
            </a>
          )}

        </div>
      )}

    </article>
  );
}

export default ProjectCard;