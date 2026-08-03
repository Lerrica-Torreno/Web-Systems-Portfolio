// Reusable components
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";

// Main application stylesheet
import "./App.css";

// PERSONAL INFORMATION
const personalInfo = {
  name: "Lerrica Torreno",
  shortName: "LT",
  role: "Computer Science Student",
  introduction:
    "I am exploring web development, data analytics, SAP technologies, and systems administration while building practical technical skills through projects and continuous learning.",
  email: "lerricatorreno007@gmail.com",
  location: "Philippines",
  github: "https://github.com/Lerrica-Torreno",
  linkedin:
    "https://www.linkedin.com/in/lerrica-jeremy-torreno-555a462a9/",
  credly: "https://www.credly.com/users/lerrica-torreno",
};

// SKILLS
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
    skills: ["Linux", "Windows", "Cloud Computing", "Virtualization"],
  },
  {
    id: 5,
    title: "Developer Tools",
    skills: ["VS Code", "Git", "GitHub", "Terminal"],
  },
  {
    id: 6,
    title: "Productivity & Workplace",
    skills: [
      "Digital Safety",
      "Collaboration",
      "Digital Productivity",
      "Documentation",
    ],
  },
];

// CERTIFICATIONS
const certifications = [
  {
    id: 1,
    title: "IC3 Digital Literacy Certification GS6 Level 1",
    issuer: "Certiport",
    year: "2024",
    description:
      "Validates essential competency in operating digital devices and navigating online environments. It demonstrates proficiency in basic document creation, digital communication, online collaboration, information sourcing, digital citizenship, safety, and security.",
    link: "https://www.credly.com/badges/70582307-3ca0-4e08-a168-c1edbed7c20c/public_url",
  },
  {
    id: 2,
    title: "IT Specialist - Networking",
    issuer: "Certiport",
    year: "2024",
    description:
      "Demonstrates core proficiency in networking fundamentals, including TCP/IP protocols, network topologies, and architecture. Covers configuring and troubleshooting wired and wireless network services to support reliable connectivity and performance.",
    link: "https://www.credly.com/badges/c5004ef1-5c61-4e25-948d-f77bda804e88/public_url",
  },
  {
    id: 3,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2025",
    description:
      "Demonstrates foundational knowledge of the global cybersecurity landscape, including threat detection, defense strategies, and system vulnerabilities. Validates an understanding of security principles used to protect organizational assets.",
    link: "https://www.credly.com/badges/c525af24-2820-4077-9933-81ca0a43d036/public_url",
  },
  {
    id: 4,
    title: "Operating Systems Basics",
    issuer: "Cisco Networking Academy",
    year: "2025",
    description:
      "Demonstrates core proficiency in operating system architecture, basic security implementation, and device configuration. Validates practical skills in mobile connectivity, email services, and modern operating system environments.",
    link: "https://www.credly.com/badges/676c94bc-4c13-4060-b0d4-9e439579a783/public_url",
  },
  {
    id: 5,
    title: "Linux Essentials",
    issuer: "Cisco Networking Academy",
    year: "2025",
    description:
      "Demonstrates hands-on proficiency in Linux system administration through practical lab environments. Covers command-line navigation, file management, permissions, system security, shell scripting, and hardware architecture.",
    link: "https://www.credly.com/badges/2d534c0f-9c95-47bd-bcc4-9e1f31a5e42a/public_url",
  },
  {
    id: 6,
    title: "Cloud Computing Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2025",
    description:
      "Demonstrates knowledge of cloud architecture, service models, deployment environments, virtualization, orchestration, and cloud security. Includes concepts related to containers, web application deployment, and threat analysis.",
    link: "https://www.credly.com/badges/fc25d9bc-35e7-443b-8c26-c0a1849be632/public_url",
  },
  {
    id: 7,
    title: "Data Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2025",
    description:
      "Demonstrates foundational knowledge of data analytics methodologies, data science applications, and ecosystem tools. Includes practical experience in cleaning, refining, and visualizing datasets using IBM Watson Studio.",
    link: "https://www.credly.com/badges/f5e91b5c-f648-468b-9053-ab7ae69a83f8/public_url",
  },
  {
    id: 8,
    title: "Data Analytics Essentials",
    issuer: "Cisco",
    year: "2025",
    description:
      "Validates data acquisition, transformation, statistical analysis, and visualization skills. Demonstrates practical experience using Excel, SQL, and Tableau to clean datasets and build informative dashboards.",
    link: "https://www.credly.com/badges/4a32fe36-421e-4fc9-b3c8-224253090c1e/public_url",
  },
  {
    id: 9,
    title: "IT Specialist - Python",
    issuer: "Certiport",
    year: "2026",
    description:
      "Demonstrates proficiency in writing, reading, and debugging Python code. Validates a foundation in programming concepts, data structures, control flow, problem-solving, and clean coding practices.",
    link: "https://www.credly.com/badges/b2030220-c0df-4a83-9c69-6be5e866fed2/public_url",
  },
  {
    id: 10,
    title: "Associate Data Analyst",
    issuer: "DataCamp",
    year: "2026",
    description:
      "Demonstrates proficiency in SQL concepts for database querying, data extraction, and relational database management. Includes filtering, aggregation, and analysis for data-driven decision-making.",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/a4bc873fccb53b1f01e5e291f6f23f004be4efd6?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa",
  },
  {
    id: 11,
    title: "Introduction to Shell",
    issuer: "DataCamp",
    year: "In Progress",
    description:
      "Developing foundational knowledge of Unix command-line interfaces, shell navigation, process management, task automation, remote system access, and pipeline scripting.",
    link: "#",
  },
  {
    id: 12,
    title: "Understanding Microsoft Azure",
    issuer: "DataCamp",
    year: "In Progress",
    description:
      "Developing foundational knowledge of Microsoft Azure services, including compute, storage, networking, security, cloud-resource management, and scalable application deployment.",
    link: "#",
  },
];

// PROJECTS
const projects = [
  {
    id: 1,
    title: "Job Application Tracker",
    category: "Web Development",
    status: "Planned Project",
    description:
      "A web application for organizing job applications, tracking application status, deadlines, company details, and interview progress.",
    technologies: ["React", "JavaScript", "CSS", "Local Storage"],
    link: "#",
    liveLink: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Foreign Students’ Mental Health Data Analysis",
    category: "Data Analytics",
    status: "Completed Project",
    description:
      "An analysis of factors affecting the mental health of foreign students, including academic pressure, social connection, and length of stay.",
    technologies: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    link: "https://github.com/Lerrica-Torreno/Project-1-Foreign-Students-Mental-Health-Data-Analysis.git",
    liveLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Sales Performance Dashboard",
    category: "Data Analytics",
    status: "Planned Project",
    description:
      "An interactive dashboard that presents revenue, sales trends, regional performance, product performance, and business insights.",
    technologies: ["Power BI", "Excel", "Data Visualization", "Data Cleaning"],
    link: "#",
    liveLink: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Procure-to-Pay Process Simulation",
    category: "SAP",
    status: "Planned Project",
    description:
      "A simulation of the SAP procure-to-pay process covering purchase requisitions, purchase orders, goods receipts, invoices, and payments.",
    technologies: ["SAP", "ERP Concepts", "Business Processes"],
    link: "#",
    liveLink: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Windows Server Active Directory Home Lab",
    category: "Systems Administration",
    status: "Planned Project",
    description:
      "A virtualized Windows Server lab demonstrating Active Directory, domain configuration, user management, group policies, and client connectivity.",
    technologies: [
      "Windows Server",
      "Active Directory",
      "VirtualBox",
      "Networking",
    ],
    link: "#",
    liveLink: "#",
    featured: true,
  },
  {
    id: 6,
    title: "Customer Churn Prediction",
    category: "Artificial Intelligence",
    status: "Completed Project",
    description:
      "A machine-learning project that predicts whether customers are likely to leave a service based on behavioral and account-related data.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    link: "https://github.com/Lerrica-Torreno/Customer-Churn-Prediction.git",
    liveLink: "#",
    featured: true,
  },
  {
    id: 7,
    title: "Personal Portfolio Website",
    category: "Web Development",
    status: "In Progress",
    description:
      "A responsive portfolio website presenting my background, skills, certifications, projects, and contact information.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://github.com/Lerrica-Torreno/Web-Systems-Portfolio.git",
    liveLink: "#",
    featured: false,
  },
  {
    id: 8,
    title: "Whistledown Personal Library",
    category: "Web Development",
    status: "Completed Project",
    description:
      "A personal library interface for organizing, browsing, and managing book-related information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Lerrica-Torreno/Whistledown-Personal-Library.git",
    liveLink: "#",
    featured: false,
  },
  {
    id: 9,
    title: "Basic Association Analysis",
    category: "Data Analytics",
    status: "Completed Project",
    description:
      "A data-mining project that identifies relationships and frequently occurring combinations within a dataset.",
    technologies: ["Python", "Pandas", "Association Rules"],
    link: "https://github.com/Lerrica-Torreno/Basic-Association-Analysis.git",
    liveLink: "#",
    featured: false,
  },
  {
    id: 10,
    title: "SAP S/4HANA Implementation Case Study",
    category: "SAP",
    status: "Planned Project",
    description:
      "A case study examining SAP S/4HANA implementation planning, business requirements, migration considerations, and expected outcomes.",
    technologies: ["SAP S/4HANA", "ERP", "Business Analysis"],
    link: "#",
    liveLink: "#",
    featured: false,
  },
  {
    id: 11,
    title: "Automated System Health Monitor",
    category: "Systems Administration",
    status: "Planned Project",
    description:
      "A monitoring script that checks important system-health indicators such as CPU usage, memory consumption, disk space, and service availability.",
    technologies: ["Python", "Bash", "Linux", "Automation"],
    link: "#",
    liveLink: "#",
    featured: false,
  },
  {
    id: 12,
    title: "Billbot",
    category: "Artificial Intelligence",
    status: "Completed Project",
    description:
      "An Ollama-powered chatbot designed to respond to user questions through a locally hosted language model.",
    technologies: ["Python", "Ollama", "Artificial Intelligence"],
    link: "https://github.com/Lerrica-Torreno/Billbot.git",
    liveLink: "#",
    featured: false,
  },
  {
    id: 13,
    title: "Customer Sentiment Analysis",
    category: "Artificial Intelligence",
    status: "Completed Project",
    description:
      "A natural-language-processing project that classifies customer text as positive, negative, or neutral.",
    technologies: ["Python", "NLP", "Machine Learning"],
    link: "https://github.com/Lerrica-Torreno/Customer-Sentiment-Analysis.git",
    liveLink: "#",
    featured: false,
  },
];

// Separate highlighted projects from the remaining projects 
const featuredProjects = projects.filter((project) => project.featured);
const moreProjects = projects.filter((project) => !project.featured);

// MAIN APPLICATION COMPONENT
function App() {
  const gmailComposeUrl =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=${encodeURIComponent(personalInfo.email)}` +
    `&su=${encodeURIComponent("Portfolio Inquiry")}`;

  return (
    <div className="app">
      {/* Hero and navigation */}
      <Header
        name={personalInfo.name}
        shortName={personalInfo.shortName}
        role={personalInfo.role}
        introduction={personalInfo.introduction}
      />

      <main>
        {/* ABOUT SECTION */}
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
                I am a Computer Science student exploring career paths in web
                development, data analytics, SAP, and systems administration.
              </p>

              <p>
                Through academic activities and personal projects, I have
                gained experience with React, JavaScript, Python, SQL, Git, and
                database systems. I also enjoy learning how business systems,
                infrastructure, and data work together.
              </p>

              <p>
                My goal is to develop a broad technical foundation while
                discovering which field best matches my skills and interests. I
                am open to opportunities that allow me to solve practical
                problems and grow as an IT professional.
              </p>

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

        {/* SKILLS SECTION */}
        <section className="section skills-section" id="skills">
          <div className="section-container">
            <div className="section-heading centered-heading">
              <p className="section-label">Technical skills</p>

              <h2 className="section-title">
                Tools and technologies I use
              </h2>

              <p className="section-description">
                My skills include programming, data analytics, networking,
                cybersecurity, systems infrastructure, cloud technologies, and
                development tools.
              </p>
            </div>

            <div className="skill-groups-grid">
              {skillGroups.map((group, groupIndex) => (
                <article className="skill-group-card" key={group.id}>
                  <div className="skill-group-header">
                    <span className="skill-group-number">
                      {String(groupIndex + 1).padStart(2, "0")}
                    </span>

                    <h3>{group.title}</h3>
                  </div>

                  <div className="skill-group-list">
                    {group.skills.map((skill, skillIndex) => (
                      <div className="grouped-skill-item" key={skill}>
                        <span className="grouped-skill-number">
                          {String(skillIndex + 1).padStart(2, "0")}
                        </span>

                        <span className="grouped-skill-name">{skill}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section
          className="section certifications-section"
          id="certifications"
        >
          <div className="section-container">
            <div className="section-heading centered-heading">
              <p className="section-label">Certifications</p>

              <h2 className="section-title">
                Courses and Certifications
              </h2>

              <p className="section-description">
                These credentials represent the additional knowledge and
                practical skills I have gained through technical training and
                online learning.
              </p>
            </div>

            <div className="certifications-grid">
              {certifications.map((certification) => {
                const hasCertificate =
                  certification.link && certification.link !== "#";

                return (
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

                    {hasCertificate ? (
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
                        Certificate available upon completion
                      </span>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* JOURNEY SECTION */}
        <section className="section journey-section" id="journey">
          <div className="section-container">
            <div className="section-heading">
              <p className="section-label">My journey</p>
              <h2 className="section-title">Education and experience</h2>
            </div>

            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-marker" />

                <div className="timeline-content">
                  <p className="timeline-date">Present</p>
                  <h3>Computer Science Student</h3>

                  <p className="timeline-subtitle">
                    University of Perpetual Help System DALTA - Molino Campus
                  </p>

                  <p>
                    Studying software development, web systems, databases,
                    information management, systems analysis, and other
                    computing-related subjects.
                  </p>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-marker" />

                <div className="timeline-content">
                  <p className="timeline-date">Current Focus</p>
                  <h3>Web Development</h3>

                  <p className="timeline-subtitle">
                    React, JavaScript, CSS, HTML and Python
                  </p>

                  <p>
                    Building responsive interfaces, reusable React components,
                    and web applications while improving my understanding of
                    frontend and backend development.
                  </p>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-marker" />

                <div className="timeline-content">
                  <p className="timeline-date">Exploring</p>
                  <h3>Data Analytics</h3>

                  <p className="timeline-subtitle">
                    Python, SQL, Excel, Tableau, and Data Visualization
                  </p>

                  <p>
                    Learning how to clean, organize, analyze, and present data
                    clearly to support understanding and decision-making.
                  </p>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-marker" />

                <div className="timeline-content">
                  <p className="timeline-date">Exploring</p>
                  <h3>Systems Administration</h3>

                  <p className="timeline-subtitle">
                    Linux, Windows, Networking, Cloud, and Virtualization
                  </p>

                  <p>
                    Developing foundational knowledge in operating systems,
                    system configuration, user management, networking,
                    troubleshooting, and cloud infrastructure.
                  </p>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-marker" />

                <div className="timeline-content">
                  <p className="timeline-date">Interested In</p>
                  <h3>SAP Technologies</h3>

                  <p className="timeline-subtitle">
                    Enterprise Systems, Business Processes, and Administration
                  </p>

                  <p>
                    Exploring how SAP systems support business operations and
                    learning about enterprise applications, administration,
                    and technical support.
                  </p>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-marker" />

                <div className="timeline-content">
                  <p className="timeline-date">
                    Academic Project | In Progress
                  </p>

                  <h3>LUMI</h3>

                  <p className="timeline-subtitle">
                    Renewable Energy Decision Support
                  </p>

                  <p>
                    Collaborating in a team to develop a web-based decision
                    support system for renewable-energy evaluation using data
                    analysis and interactive models.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section projects-section" id="projects">
          <div className="section-container">
            <div className="section-heading project-heading">
              <div>
                <p className="section-label">Featured projects</p>

                <h2 className="section-title">
                  Projects that best represent my skills
                </h2>
              </div>

              <p className="project-heading-description">
                These selected projects demonstrate my experience in web
                development, data analytics, SAP, systems administration, and
                artificial intelligence.
              </p>
            </div>

            <div className="projects-grid">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>

            <div className="more-projects-section">
              <div className="more-projects-heading">
                <p className="section-label">More projects</p>

                <h3>Additional work and learning projects</h3>

                <p>
                  These projects reflect my continued learning across different
                  areas of technology.
                </p>
              </div>

              <div className="projects-grid">
                {moreProjects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="section contact-section" id="contact">
          <div className="section-container contact-container">
            <div className="contact-content">
              <p className="section-label light-label">Contact</p>

              <h2>Let&apos;s build something meaningful together.</h2>

              <p>
                I am interested in learning opportunities, academic
                collaborations, internships, and beginner-friendly development
                projects.
              </p>

              <div className="contact-actions">
                <a
                  className="primary-button light-button"
                  href={gmailComposeUrl}
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

            <aside className="contact-card">
              <div className="contact-card-item">
                <span>Email</span>

                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  linkedin.com/in/lerrica-jeremy-torreno
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div>
            <p className="footer-name">{personalInfo.name}</p>
            <p className="footer-description">{personalInfo.role}</p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#certifications">Certifications</a>
            <a href="#journey">Journey</a>
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