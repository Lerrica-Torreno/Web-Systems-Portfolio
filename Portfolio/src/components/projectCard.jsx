/*
  ProjectCard component

  Props received:
  - title: Name of the project
  - category: Type or category of the project
  - description: Short project explanation
  - technologies: Array containing the tools used
  - link: GitHub repository link
  - liveLink: Link to the live project
  - featured: Identifies whether the project is featured
*/

function ProjectCard({
  title,
  category,
  description,
  technologies,
  link,
  liveLink,
  featured,
}) {
  /*
    Check whether the provided links are usable.

    A link with "#" is treated as unavailable.
  */
  const hasRepository = link && link !== "#";
  const hasLiveDemo = liveLink && liveLink !== "#";

  return (
    <article className={`project-card ${featured ? "featured-project" : ""}`}>
      <div className="project-card-top">
        <div className="project-icon" aria-hidden="true">
          {title.charAt(0)}
        </div>

        {featured && <span className="featured-label">Featured</span>}
      </div>

      <p className="project-category">{category}</p>

      <h3>{title}</h3>

      <p className="project-description">{description}</p>

      {/* Display every technology as a separate tag */}
      <div className="technology-list">
        {technologies.map((technology) => (
          <span className="technology-tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <div className="project-links">
        {hasRepository ? (
          <a href={link} target="_blank" rel="noreferrer">
            View repository
            <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="unavailable-link">Repository coming soon</span>
        )}

        {hasLiveDemo && (
          <a href={liveLink} target="_blank" rel="noreferrer">
            Live demo
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;