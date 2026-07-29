/*
  Simple Header Component

  Props received from App.jsx:
  - name
  - shortName
  - role
  - introduction
*/

import profilePhoto from "../assets/profile.JPG";

function Header({ name, shortName, role, introduction }) {
  return (
    <header className="header" id="home">
      {/* Navigation bar */}
      <nav className="navbar" aria-label="Main navigation">
        <a className="logo" href="#home">
          <span className="logo-symbol">{shortName}</span>
          <span className="logo-name">MyPortfolio</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#journey">Journey</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Introductory section */}
      <div className="hero section-container">
        <div className="hero-content">
          <p className="hero-greeting">Welcome to my portfolio</p>

          <h1>
            Hi, I&apos;m <span>{name}</span>
          </h1>

          <h2>{role}</h2>

          <p className="hero-description">{introduction}</p>

          {/* Action buttons */}
          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              View Projects
            </a>

            <a className="secondary-button" href="#contact">
              Contact Me
            </a>
          </div>

          {/* Technologies */}
          <div className="hero-technologies">
            <span>Technologies</span>

            <div>
              <strong>HTML</strong>
              <strong>Python</strong>
              <strong>SQL</strong>
              <strong>Power BI</strong>
              <strong>Cloud</strong>
              <strong>Networking</strong>
            </div>
          </div>
        </div>

        {/* Simple profile card */}
        <div className="hero-visual">
          <div className="profile-card simple-profile-card">
            <div className="profile-initials">
              <img src={profilePhoto} alt={`${name} profile`} />
            </div>

            <div className="profile-card-content">
              <p>{name}</p>
              <span>{role}</span>
            </div>

            <div className="simple-profile-details">
              <p>Based in the Philippines</p>
              <p>Focused on web development</p>
              <p>Open to learning opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;