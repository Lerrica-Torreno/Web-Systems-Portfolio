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

// Profile image stored inside src/assets
import profilePhoto from "../assets/profile.JPG";

// HEADER COMPONENT
function Header({ name, role, introduction }) {
  return (
    <header className="header" id="home">
      {/* MAIN NAVIGATION */}
      <nav className="navbar" aria-label="Main navigation">
        {/* Portfolio brand */}
        <a className="logo" href="#home" aria-label="Go to homepage">
          <img
            className="logo-image"
            src="/favicon.svg"
            alt="Lerrica Torreno logo"
          />

          <span className="logo-name">Lerrica</span>
        </a>

        {/* Navigation links and CV button */}
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

          <a
            className="nav-cv-link"
            href="/Lerrica-Torreno-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
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
        </div>

        {/* Profile image */}
        <div className="hero-visual">
          <div className="profile-card profile-photo-card">
            <img
              className="profile-card-image"
              src={profilePhoto}
              alt={`${name} profile portrait`}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;