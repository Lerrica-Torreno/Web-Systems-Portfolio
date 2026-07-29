// Import the reusable components
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";

// Import the stylesheet
import "./App.css";

function App() {
  // Portfolio owner information. Passed to Header as props. 
  const personalInfo = {
    name: "Lerrica Torreno",
    shortName: "LT",
    role: "Computer Science Student",
    introduction:
      "I am exploring web development, data analytics, SAP technologies, and systems administration while building practical technical skills through projects and continuous learning.",
    email: "lerricatorreno007@gmail.com",
    location: "Philippines",
    github: "https://github.com/Lerrica-Torreno",
    linkedin: "https://www.linkedin.com/in/lerrica-jeremy-torreno-555a462a9/",
    credly: "https://www.credly.com/users/lerrica-torreno",
  };

  /*
    Skills are stored in an array so they can be displayed
    dynamically using the map() method.
  */
  const skillGroups = [
  {
    id: 1,
    title: "Programming & Querying",
    skills: ["Python", "SQL", "Bash", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Data Analytics & Visualization",
    skills: [
      "Power BI",
      "Excel",
      "Pandas",
      "Data Visualization",
      "Statistics",
      "PostgreSQL",
    ],
  },
  {
    id: 3,
    title: "Networking & Security",
    skills: [
      "TCP/IP",
      "Cybersecurity",
      "Threat Detection",
      "Network Topology",
    ],
  },
  {
    id: 4,
    title: "Systems & Cloud Infrastructure",
    skills: [
      "Linux",
      "Windows",
      "Cloud Computing",
      "Virtualization",
    ],
  },
  {
    id: 5,
    title: "Developer Tools",
    skills: ["VS Code", "Git", "GitHub", "Terminal"],
  },
  {
    id: 6,
    title: "Productivity & Workplace",
    skills: ["Digital safety", "Collaboration", "Digital Productivity", "Documentation"],
  },
  ];

  /*
  Certification data.

  Add, remove, or edit certifications here.
*/
const certifications = [
  {
    id: 1,
    title: "IC3 Digital Literacy Certification GS6 Level 1",
    issuer: "Certiport",
    year: "2024",
    description:
      `validates essential competency in operating digital devices and navigating online environments. 
      It demonstrates proficiency in basic document creation, digital communication, online collaboration, 
      and information sourcing, alongside a foundational understanding of digital citizenship, safety, and security.`,
    link: "https://www.credly.com/badges/70582307-3ca0-4e08-a168-c1edbed7c20c/public_url",
  },
  {
    id: 2,
    title: "IT Specialist - Networking",
    issuer: "Certiport",
    year: "2024",
    description:
      `Demonstrates core proficiency in networking fundamentals, including TCP/IP protocols, network topologies, 
      and architecture. Covers configuring and troubleshooting wired and wireless network services to ensure 
      reliable system connectivity and performance..`,
    link: "https://www.credly.com/badges/c5004ef1-5c61-4e25-948d-f77bda804e88/public_url",
  },
  {
    id: 3,
    title: "Introduction to Ceybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2025",
    description:
      `Demonstrates foundational knowledge of the global cybersecurity landscape, including threat detection, 
      defense strategies, and system vulnerabilities. Validates an understanding of core security principles 
      required to protect organizational assets and navigate modern cyber risk environments.`,
    link: "https://www.credly.com/badges/c525af24-2820-4077-9933-81ca0a43d036/public_url",
  },
  {
    id: 4,
    title: "Operating Systems Basics",
    issuer: "Cisco Networking Academy",
    year: "2025",
    description:
      `Demonstrates core proficiency in operating system architecture, basic security implementations, 
      and device configuration. Validates practical skills in managing mobile network connectivity, configuring 
      email services, and understanding the core characteristics and functions of modern OS environments.`,
    link: "https://www.credly.com/badges/676c94bc-4c13-4060-b0d4-9e439579a783/public_url",
  },
  {
    id: 5,
    title: "Linux Essentials",
    issuer: "Cisco Networking Academy",
    year: "2025",
    description:
      `Demonstrates hands-on proficiency in Linux system administration across 24 practical lab environments. 
      Validates key skills in command-line navigation, file management, user and group permission management, 
      system security, automated shell scripting, and hardware architecture.`,
    link: "https://www.credly.com/badges/2d534c0f-9c95-47bd-bcc4-9e1f31a5e42a/public_url",
  },
  {
    id: 6,
    title: "Cloud Computing Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2025",
    description:
      `Demonstrates core proficiency in cloud architecture, service models (IaaS, PaaS, SaaS), deployment 
      environments, and cloud security protocols. Covers hands-on concepts including container creation, 
      web app cloud deployment, virtualization, orchestration, and threat analysis in simulated environments.`,
    link: "https://www.credly.com/badges/fc25d9bc-35e7-443b-8c26-c0a1849be632/public_url",
  },
  {
    id: 7,
    title: "Data Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2025",
    description:
      `Demonstrates foundational knowledge of data analytics methodologies, data science applications, and ecosystem tools. 
      Validates practical competency in cleaning, refining, and visualizing datasets using IBM Watson Studio, 
      alongside core data lifecycle concepts.`,
    link: "https://www.credly.com/badges/f5e91b5c-f648-468b-9053-ab7ae69a83f8/public_url",
  },
  {
    id: 8,
    title: "Data Analytics Essentials",
    issuer: "Cisco",
    year: "2025",
    description:
      `Validates end-to-end data analytics capabilities, including data acquisition, transformation, and statistical analysis. 
      Demonstrates hands-on proficiency using industry-standard tools—Excel, SQL, and Tableau—to clean datasets, perform exploratory 
      analysis, and build visual dashboards that extract actionable business insights.`,
    link: "https://www.credly.com/badges/4a32fe36-421e-4fc9-b3c8-224253090c1e/public_url",
  },
  {
    id: 9,
    title: "IT Specialist - Python",
    issuer: "Certiport",
    year: "2026",
    description:
      `Demonstrates proficiency in writing, reading, and debugging Python code to solve complex logic problems. 
      Validates a strong foundation in core programming concepts, data structures, control flow, and clean 
      code practices essential for software development and automation.`,
    link: "https://www.credly.com/badges/b2030220-c0df-4a83-9c69-6be5e866fed2/public_url",
  },
  {
    id: 10,
    title: "Associate Data Analyst",
    issuer: "DataCamp",
    year: "2026",
    description:
      `Demonstrates proficiency in core SQL concepts for database querying, data extraction, and relational database management. 
      Validates practical capabilities in writing efficient queries, filtering and aggregating datasets, and analyzing results 
      to support data-driven decision-making.`,
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/a4bc873fccb53b1f01e5e291f6f23f004be4efd6?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa",
  },
];

  /*
    Project data.

    Each object is passed to ProjectCard as props.
    You can add more projects by creating another object.
  */
 
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      category: "Web Development",
      description:
        "A responsive personal portfolio that presents my background, technical skills, projects, and contact information.",
      technologies: ["React", "JavaScript", "CSS"],
      link: "https://github.com/yourusername/Portfolio-Web-Systems",
      liveLink: "#",
      featured: true,
    },
    {
      id: 2,
      title: "LUMI",
      category: "Capstone Project",
      description:
        "A data-driven environmental intelligence system designed to support renewable-energy decisions through recommendations, forecasting, maps, and simulations.",
      technologies: ["Python", "FastAPI", "JavaScript", "SQL"],
      link: "#",
      liveLink: "#",
      featured: true,
    },
    {
      id: 3,
      title: "JuanMart Sales Dashboard",
      category: "Data Analytics",
      description:
        "A sales analytics dashboard that displays revenue, orders, regional performance, data quality results, and business insights.",
      technologies: ["Python", "Pandas", "SQLite", "Data Visualization"],
      link: "#",
      liveLink: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Renewable Energy Information System",
      category: "Web Application",
      description:
        "A web-based application that helps users review energy information, compare renewable-energy options, and understand environmental conditions.",
      technologies: ["HTML", "CSS", "JavaScript", "Python"],
      link: "#",
      liveLink: "#",
      featured: false,
    },
  ];

  return (
    <div className="app">
      {/*
        Header receives data through props.
        This makes the Header component reusable.
      */}
      <Header
        name={personalInfo.name}
        shortName={personalInfo.shortName}
        role={personalInfo.role}
        introduction={personalInfo.introduction}
      />

      <main>
        {/* About section */}
        <section className="section about-section" id="about">
          <div className="section-container about-layout">
            <div className="about-heading">
              <p className="section-label">About me</p>

              <h2 className="section-title">
                Building useful and meaningful digital experiences
              </h2>
            </div>

            <div className="about-content">
              <p>
                I am a CS student who is still exploring different career paths in
                technology, including web development, data analytics, SAP, and systems
                administration.
              </p>

              <p>
                Through academic activities and personal projects, I have gained experience
                using tools and technologies such as React, JavaScript, Python, SQL, Git,
                and database systems. I also enjoy learning how business systems,
                infrastructure, and data work together.
              </p>

              <p>
                My goal is to continue developing a broad technical foundation while
                discovering which area best matches my skills and interests. I am open to
                learning opportunities that allow me to solve practical problems and grow
                as an IT professional.
              </p>

              {/* Quick personal details */}
              <div className="personal-details">
                <div className="detail-item">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">
                    {personalInfo.location}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Email</span>
                  <a
                    className="detail-value detail-link"
                    href={`mailto:${personalInfo.email}`}
                  >
                    {personalInfo.email}
                  </a>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Availability</span>
                  <span className="detail-value">
                    Open to learning opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* Skills section */}
<section className="section skills-section" id="skills">
  <div className="section-container">
    {/* Skills section heading */}
    <div className="section-heading centered-heading">
      <p className="section-label">Technical Skills</p>

      <h2 className="section-title">
        Tools and technologies I use
      </h2>

      <p className="section-description">
        My technical skills include programming, data analytics, networking,
        cybersecurity, systems infrastructure, cloud technologies, and
        development tools.
      </p>
    </div>

    {/* Display every skill group */}
    <div className="skill-groups-grid">
      {skillGroups.map((group, groupIndex) => (
        <article className="skill-group-card" key={group.id}>
          {/* Skill group title */}
          <div className="skill-group-header">
            <span className="skill-group-number">
              {String(groupIndex + 1).padStart(2, "0")}
            </span>

            <h3>{group.title}</h3>
          </div>

          {/* Skills inside the group */}
          <div className="skill-group-list">
            {group.skills.map((skill, skillIndex) => (
              <div className="grouped-skill-item" key={skill}>
                <span className="grouped-skill-number">
                  {String(skillIndex + 1).padStart(2, "0")}
                </span>

                <span className="grouped-skill-name">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

        {/* Certifications section */}
<section
  className="section certifications-section"
  id="certifications">
  <div className="section-container">
    <div className="section-heading centered-heading">
      <p className="section-label">Certifications</p>

      <h2 className="section-title">
        Courses and certifications I have completed
      </h2>

      <p className="section-description">
        These certifications represent the additional skills and knowledge I
        have gained through online courses and technical training.
      </p>
    </div>

    {/* Display every certification from the array */}
    <div className="certifications-grid">
      {certifications.map((certification) => (
        <article
          className="certification-card"
          key={certification.id}
        >
          <div className="certification-card-top">
            <span className="certification-icon">
              {String(certification.id).padStart(2, "0")}
            </span>

            <span className="certification-year">
              {certification.year}
            </span>
          </div>

          <p className="certification-issuer">
            {certification.issuer}
          </p>

          <h3>{certification.title}</h3>

          <p className="certification-description">
            {certification.description}
          </p>

          {certification.link !== "#" ? (
            <a
              className="certification-link"
              href={certification.link}
              target="_blank"
              rel="noreferrer"
            >
              View certificate
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="certificate-unavailable">
              Certificate link coming soon
            </span>
          )}
        </article>
      ))}
    </div>
  </div>
</section>

        {/* Education and experience section */}
        <section className="section journey-section" id="journey">
          <div className="section-container">
            <div className="section-heading">
              <p className="section-label">My journey</p>
              <h2 className="section-title">Education and experience</h2>
            </div>

            <div className="timeline">
              {/* Education timeline item */}
              <article className="timeline-item">
                <div className="timeline-marker" />

                <div className="timeline-content">
                  <p className="timeline-date">Present</p>
                  <h3>Computer Science Student</h3>
                  <p className="timeline-subtitle">
                    University of Perpetual Help System Dalta - Molino Campus
                  </p>

                  <p>
                    Studying software development, web systems, databases,
                    information management, systems analysis, and other
                    computing-related subjects.
                  </p>
                </div>
              </article>

              {/* Web development timeline item */}
              <article className="timeline-item">
                <div className="timeline-marker" />

                <div className="timeline-content">
                  <p className="timeline-date">Current Focus</p>
                  <h3>Web Development</h3>

                  <p className="timeline-subtitle">
                    React, JavaScript, CSS, and Python
                  </p>

                  <p>
                    Building responsive interfaces, reusable React components, and simple
                    web applications while improving my understanding of frontend and
                    backend development.
                  </p>
                </div>
            </article>

            {/* Data analytics timeline item */}
            <article className="timeline-item">
              <div className="timeline-marker" />

              <div className="timeline-content">
                <p className="timeline-date">Exploring</p>
                <h3>Data Analytics</h3>

                <p className="timeline-subtitle">
                  Python, SQL, Excel, Tableau, and Data Visualization
                </p>

                <p>
                  Learning how to clean, organize, analyze, and present data in a clear
                  way to support better understanding and decision-making.
                </p>
              </div>
          </article>

            {/* Systems administration timeline item */}
            <article className="timeline-item">
              <div className="timeline-marker" />

              <div className="timeline-content">
                <p className="timeline-date">Exploring</p>
                <h3>Systems Administration</h3>

                <p className="timeline-subtitle">
                    Linux, Windows, Networking, Cloud, and Virtualization
                </p>

                <p>
                  Developing foundational knowledge in operating systems, system
                  configuration, user management, networking, troubleshooting, and cloud infrastructure.
                </p>
              </div>
          </article>

            {/* SAP timeline item */}
            <article className="timeline-item">
              <div className="timeline-marker" />

              <div className="timeline-content">
                <p className="timeline-date">Interested In</p>
                <h3>SAP Technologies</h3>

                <p className="timeline-subtitle">
                    Enterprise Systems, Business Processes, and Administration
                </p>

                <p>
                  Exploring how SAP systems support business operations and learning more
                  about enterprise applications, system administration, and technical support.
                </p>
              </div>
          </article>

              {/* Project timeline item */}
              <article className="timeline-item">
                <div className="timeline-marker" />

                <div className="timeline-content">
                  <p className="timeline-date">Academic Project | In Progress</p>
                  <h3>LUMI</h3>
                  <p className="timeline-subtitle">
                    Renewable Energy Decision Support
                  </p>

                  <p>
                    Collaborating in a team environment to design and develop a web-based decision support system 
                    for renewable energy evaluation. The platform leverages data analysis and interactive models 
                    to streamline sustainability planning and data-driven energy assessment.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section className="section projects-section" id="projects">
          <div className="section-container">
            <div className="section-heading project-heading">
              <div>
                <p className="section-label">Selected projects</p>
                <h2 className="section-title">Some things I have worked on</h2>
              </div>

              <p className="project-heading-description">
                These projects demonstrate my experience in web development,
                system design, data processing, and user-interface development.
              </p>
            </div>

            <div className="projects-grid">
              {/*
                Every project is passed to ProjectCard through props.
                The spread operator passes all project object properties.
              */}
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section className="section contact-section" id="contact">
          <div className="section-container contact-container">
            <div className="contact-content">
              <p className="section-label light-label">Contact</p>

              <h2>Let&apos;s build something meaningful together.</h2>

              <p>
                I am interested in learning opportunities, academic
                collaborations, internship opportunities, and beginner-friendly
                development projects.
              </p>

              <div className="contact-actions">
                <a
                  className="primary-button light-button"
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    personalInfo.email
                  )}&su=${encodeURIComponent("Portfolio Inquiry")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send me an email
                </a>

                <a
                  className="secondary-button dark-outline-button"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub
                </a>

                <a
                  className="secondary-button dark-outline-button"
                  href={personalInfo.credly}
                  target="_blank"
                  rel="noreferrer"
                > 
                  View Credly
                </a>
              </div>
            </div>

            {/* Contact information card */}
            <aside className="contact-card">
              <div className="contact-card-item">
                <span>Email</span>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    personalInfo.email
                  )}&su=${encodeURIComponent("Portfolio Inquiry")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {personalInfo.email}
              </a>
              </div>

              <div className="contact-card-item">
                <span>Location</span>
                <p>{personalInfo.location}</p>
              </div>

              <div className="contact-card-item">
                <span>GitHub</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Lerrica-Torreno
                </a>
              </div>

              <div className="contact-card-item">
                <span>LinkedIn</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/Lerrica-Jeremy-Torreno
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      {/* Website footer */}
      <footer className="footer">
        <div className="footer-container">
          <div>
            <p className="footer-name">{personalInfo.name}</p>
            <p className="footer-description">
              Computer Science Student
            </p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <p className="copyright">
            © 2026 {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;