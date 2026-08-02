/*
  ProjectCard Component
  - Displays project information
  - Shows the project status
  - Lists the technologies used
  - Provides repository and live-demo links when available

  Props received from App.jsx:
  - title: Project name
  - category: Project category
  - status: Current project status
  - description: Short project description
  - technologies: Array of tools and technologies used
  - link: GitHub repository URL
  - liveLink: Live project URL
*/

// Project Card Component 
function ProjectCard({
  title,
  category,
  status,
  description,
  technologies,
  link,
  liveLink,
}) {

  // Links containing "#" are treated as unavailable.
  const hasRepository = Boolean(link && link !== "#");
  const hasLiveDemo = Boolean(liveLink && liveLink !== "#");

  return (
    <article className="project-card">
      {/* Project icon and status */}
      <div className="project-card-top">
        <div className="project-icon" aria-hidden="true">
          {title.charAt(0).toUpperCase()}
        </div>

        {status && <span className="project-status">{status}</span>}
      </div>

      {/* Project category and title */}
      <p className="project-category">{category}</p>
      <h3>{title}</h3>

      {/* Project description */}
      <p className="project-description">{description}</p>

      {/* Technologies used */}
      <div className="technology-list" aria-label="Technologies used">
        {technologies.map((technology) => (
          <span className="technology-tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      {/* Project links */}
      <div className="project-links">
        {hasRepository ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View repository
            <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="unavailable-link">
            Repository coming soon
          </span>
        )}

        {hasLiveDemo && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live demo
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;