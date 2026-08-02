/*
  Header Component
  - Displays the fixed navigation bar
  - Presents the hero introduction
  - Shows the main action buttons
  - Displays the profile card

  Props received from App.jsx:
  - name: Portfolio owner's full name
  - shortName: Initials used in the logo
  - role: Current role or professional title
  - introduction: Short introductory description
*/

// Profile image used in the hero card
import profilePhoto from "../assets/profile.JPG";

// HEADER COMPONENT
function Header({ name, shortName, role, introduction }) {
  return (
    <header className="header" id="home">
      {/* MAIN NAVIGATION */}
      <nav className="navbar" aria-label="Main navigation">
        {/* Portfolio logo */}
        <a className="logo" href="#home" aria-label="Go to homepage">
          <span className="logo-symbol">{shortName}</span>
          <span className="logo-name">MyPortfolio</span>
        </a>

        {/* Navigation links */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#journey">Journey</a>
          <a href="#projects">Projects</a>
          <a className="nav-contact-link" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="hero section-container">
        <div className="hero-content">
          <p className="hero-greeting">Welcome to my portfolio</p>

          <h1>
            Hi, I&apos;m <span>{name}</span>
          </h1>

          <h2>{role}</h2>

          <p className="hero-description">{introduction}</p>

          {/* Main action buttons */}
          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              View Projects
            </a>

            <a className="secondary-button" href="#contact">
              Contact Me
            </a>

            <a
              className="secondary-button cv-button"
              href="/Lerrica-Torreno-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
          </div>

          {/* Highlighted technologies */}
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

        {/* Profile card */}
        <div className="hero-visual">
          <div className="profile-card simple-profile-card">
            <div className="profile-initials">
              <img
                src={profilePhoto}
                alt={`${name} profile portrait`}
              />
            </div>

            <div className="profile-card-content">
              <p>{name}</p>
              <span>{role}</span>
            </div>

            <div className="simple-profile-details">
              <p>Based in the Philippines</p>
              <p>Exploring multiple areas of technology</p>
              <p>Open to learning opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;