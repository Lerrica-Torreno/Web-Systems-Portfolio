import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import heroImg from './assets/profile.jpg'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        {/* Home section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="introduction">Hello, I am</p>

            <h1>Lerrica Jeremy Torreno</h1>

            <h2>Web Developer and CS Student</h2>

            <p>
              I create simple, responsive, and user-friendly websites. I enjoy
              learning new technologies and building projects that solve
              real-world problems.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View Projects
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-image-container">
            <img
              src={heroImg}
              alt="Developer illustration"
              className="hero-image"
            />
          </div>
        </section>

        {/* About section */}
        <section className="section" id="about">
          <div className="section-heading">
            <p>Get to know me</p>
            <h2>About Me</h2>
          </div>

          <div className="about-content">
            <p>
              I am an aspiring developer who is interested in web development,
              data management, and software design. I enjoy turning ideas into
              working applications using modern technologies.
            </p>

            <p>
              My goal is to continue improving my programming skills while
              creating systems that are useful, accessible, and easy to use.
            </p>
          </div>
        </section>

        {/* Contact section */}
        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p>Let us connect</p>
            <h2>Contact Me</h2>
          </div>

          <div className="contact-content">
            <p>
              You may contact me through my email for projects, collaborations,
              or other inquiries.
            </p>

            <a
              href="lerricatorreno007@gmail.com"
              className="primary-button"
            >
              lerricatorreno007@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Lerrica Jeremy Torreno. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
