import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import aiWeatherImage from './assets/ai-weather-screenshot.png'
import Achievements from './Achievements';
import Resume from "./Resume";
import myPhoto from './assets/myphoto.jpg';
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";

// ✅ ADDED WRAPPER (NEW)
const AchievementsPage = () => (
  <div className="app-shell">
    <NavBar />
    <Achievements />
  </div>
)

const NavBar = () => (
  <header className="top-nav">
    <div className="brand">NH <span>Portfolio</span></div>
    <nav>
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
      <NavLink to="/skills" className={({ isActive }) => isActive ? 'active-link' : ''}>Skills</NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? 'active-link' : ''}>Projects</NavLink>
      
      <NavLink to="/certifications" className={({ isActive }) => isActive ? 'active-link' : ''}>Certifications</NavLink>

      {/* ✅ ADDED */}
      <NavLink to="/achievements" className={({ isActive }) => isActive ? 'active-link' : ''}>Achievements</NavLink>
      <NavLink to="/resume" className={({ isActive }) => isActive ? 'active-link' : ''}>Resume</NavLink>

      <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''}>Contact</NavLink>
    </nav>
  </header>
)

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="app-shell">
      <NavBar />
      <section className="hero">
        <div className="hero-content">
          <div className="avatar-wrap">
  <img src={myPhoto} alt="profile" className="avatar-img" />
</div>
        <p className="eyebrow">Full Stack Developer</p>
        <h1>NAFISHA HAQUE</h1>
        <p className="hero-sub">Welcome to my digital space! I design smart solutions through code, transforming ideas into engaging experiences that address real-world challenges.</p><br />
        <div className="skill-pills"><span>JavaScript</span><span>React</span><span>Node.js</span><span>Express</span><span>MongoDB</span><span>Git</span></div><br />
        <div className="hero-actions"><NavLink className="btn primary" to="/projects">View My Work</NavLink><a className="btn outline" href="https://github.com/NAFISHAHAQUE" target="_blank" rel="noreferrer">GitHub Profile</a></div>
      </div>
    </section>
    <About />
    <div className="scroll-down" onClick={() => navigate("/projects")}>
  <div className="mouse"></div>
  <p>see my projects</p>
</div>
  </div>
);
};

/* ❗ YOUR FULL EXISTING CODE (Skills, Projects, About, Contact, Certifications) REMAINS SAME ❗ */
const Skills = () => {
  const [activeFilter, setActiveFilter] = React.useState('All Skills')

  const skillItems = [
    { label: 'C', category: 'Programming Languages', value: 70, icon: 'C' },
    { label: 'C++', category: 'Programming Languages', value: 75, icon: 'C++' },
    { label: 'Java', category: 'Programming Languages', value: 85, icon: 'Jv' },
    { label: 'Python', category: 'Programming Languages', value: 75, icon: 'Py' },
    { label: 'React', category: 'Frontend', value: 90, icon: 'R' },
    { label: 'HTML', category: 'Frontend', value: 95, icon: 'H' },
    { label: 'CSS', category: 'Frontend', value: 85, icon: 'C' },
    { label: 'JavaScript', category: 'Frontend', value: 90, icon: 'JS' },
    { label: 'Node.js', category: 'Backend', value: 88, icon: 'N' },
    { label: 'Express', category: 'Backend', value: 86, icon: 'Ex' },
    { label: 'MySQL', category: 'Databases', value: 85, icon: 'DB' },
    { label: 'MongoDB', category: 'Databases', value: 80, icon: 'MDB' },
    { label: 'Git', category: 'Tools', value: 90, icon: 'G' },
    { label: 'GitHub', category: 'Tools', value: 90, icon: 'GH' },
  ]

  const filters = ['All Skills', 'Programming Languages', 'Frontend', 'Backend', 'Databases', 'Tools']
  const visibleSkills = activeFilter === 'All Skills' ? skillItems : skillItems.filter((s) => s.category === activeFilter)

  return (
    <div className="app-shell">
      <NavBar />
      <section className="skills-section">
        <div className="skills-top">
          <div>
            <p className="eyebrow">Skills</p>
            <h2>Technical Arsenal</h2>
            <p className="skills-sub">A showcase of technologies I've mastered on my journey as a developer.</p>
          </div>
        </div>

        <div className="skill-tags">
          {filters.map((f) => (
            <button key={f} className={f === activeFilter ? 'active' : ''} onClick={() => setActiveFilter(f)}>{f}</button>
          ))}
        </div>

        <div className="skill-grid">
          {visibleSkills.map((skill) => (
            <article className="skill-card" key={skill.label} style={{ '--progress': `${skill.value}%` }}>
              <div className="skill-head">
                <div className="skill-icon">{skill.icon}</div>
                <div>
                  <h4>{skill.label}</h4>
                  <span className="skill-percent">{skill.value}%</span>
                </div>
              </div>
              <div className="skill-bar"><div /></div>
              <div className="skill-meta">{skill.category}</div>
              <div className="hover-progress">Progress: {skill.value}%</div>
            </article>
          ))}
        </div>

        <div className="learning-journey">
          <h3>Learning Journey</h3>
          <p>My technical skill set is constantly evolving. Currently exploring:</p>
          <div className="journey-tags"><span>Docker</span><span>AWS</span><span>SpringBoot</span><span>TypeScript</span><span>Next.js</span></div>
        </div>
      </section>
    </div>
  )
}


const Projects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = React.useState('All Projects')
  const filters = ['All Projects', 'Full Stack', 'Data Visualization', 'Frontend', 'API Integration', 'Web App']
  const projectData = [
    {
      title: 'AIweatherForecaster',
      summary: 'AI-enabled weather app with responsive dashboard and local weather insights. Includes location detection, weather API integration, and clean UI cards for hourly/day forecasts.',
      tags: ['JavaScript', 'API', 'UI'],
      category: ['Frontend','API Integration'],
      featured: true,
      image: '/aipicss.jpg',
      demo: 'https://github.com/NAFISHAHAQUE/AIweatherproject',
      code: 'https://github.com/NAFISHAHAQUE/AIweatherproject'
    },
    {
      title: 'QuizzyPop',
      summary: 'Quiz platform with category-based questions, timed rounds, and adaptive scoring. Features clean responsive UI, instant feedback, and progress retention across sessions.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: ['Frontend','Web App'],
      featured: false,
      image: '/quizss.jpg',
      demo: 'https://github.com/NAFISHAHAQUE/quizformicroit',
      code: 'https://github.com/NAFISHAHAQUE/quizformicroit'
    },
    {
      title: 'FlexCore',
      summary: 'A full-stack dashboard for flexible workflow, role-based access, and analytics widgets. Built with React front-end, Node.js backend, and MongoDB persistence for real-time team tracking.',
      tags: ['React', 'Node.js', 'MongoDB'],
      category: ['Full Stack','Web App'],
      featured: false,
      image: '/flex.jpg',
      demo: 'https://github.com/NAFISHAHAQUE/FlexCore',
      code: 'https://github.com/NAFISHAHAQUE/FlexCore'
    },
    {
      title: 'BeatBrew',
      summary: 'Music playlist manager with drag-and-drop queue control, custom playlists, and responsive mobile UI. Includes track search, playback controls, and smooth transitions for modern user experience.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      category: ['Frontend','Web App'],
      featured: false,
      image: '/beatss.jpg',
      demo: 'https://github.com/NAFISHAHAQUE/musicplaylistmanager2',
      code: 'https://github.com/NAFISHAHAQUE/musicplaylistmanager2'
    }
  ]

  const visibleProjects = activeFilter === 'All Projects' ? projectData : projectData.filter((p) => p.category.includes(activeFilter))

  return (
    <div className="app-shell">
      <NavBar />
      <section className="project-header">
        <div>
          <p className="eyebrow">Projects</p>
          <h2>Featured Projects</h2>
          <p className="skills-sub">A showcase of my work spanning web applications, APIs, and responsive interfaces.</p>
        </div>
      </section>

      <section className="skills-section">
        <div className="skill-tags project-tags">
          {filters.map((f) => (
            <button key={f} className={f === activeFilter ? 'active' : ''} onClick={() => setActiveFilter(f)}>{f}</button>
          ))}
        </div>

        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
  <img src={project.image} alt={project.title} />
  {project.featured && <div className="project-pill">Featured</div>}
</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tags-row">{project.tags.map((t) => <span key={t}>{t}</span>)}</div>
                <div className="project-actions"><a className="btn primary" href={project.demo}>Live Demo</a><a className="btn outline" href={project.code} target="_blank" rel="noreferrer">Source Code</a></div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="cta-section">
  <h2>Interested in working together?</h2>
  <p>
    I'm always open to discussing new projects, creative ideas or opportunities
    to be part of your vision.
  </p>

  <button
    className="cta-btn"
    onClick={() => navigate("/contact")}
  >
    Let's Connect
  </button>
</div>
    </div>
    
  )
}

const About = () => (
  <div className="about">
    <section className="about">

      {/* Heading */}
      <div className="section-heading">
        <h2>About Me</h2>
        <div className="line"></div>
      </div>

      {/* Grid */}
      <div className="about-grid">

        {/* LEFT SIDE */}
        <div>

          <div className="card facts">
            <h3>Quick Facts</h3>
            <ul>
              <li><strong>Location:</strong> Bihar, India</li>
              <li><strong>Education:</strong> B.Tech in Computer Science</li>
              <li><strong>Experience:</strong> 2+ years</li>
            </ul>
          </div>

          <div className="card hobbies">
            <h3>When I'm Not Coding</h3>
            <div className="hobby-item">💻 Surfing Web</div>
            <div className="hobby-item">📚 Reading</div>
            <div className="hobby-item">🎵 Music</div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="card journey">

          <h3>My Journey</h3>
          <p>
            Hello! I'm NAFISHA HAQUE, a passionate developer with a deep fascination for transforming complex problems into elegant digital solutions.
          </p>

          <p>
            My journey in tech started with a strong curiosity to understand how things work behind the scenes and gradually turned into a dedicated path toward full-stack development. Over time, I have built practical experience by working on real-world projects and continuously sharpening my skills.
          </p>

          <p>
            I specialize in crafting responsive, user-centered applications using React, Node.js, and modern cloud infrastructure.
          </p>

          <p>
            What drives me is the intersection of technology and creativity—finding that perfect balance between functional code and intuitive design. I'm constantly expanding my skills through hands-on projects and keeping up with emerging technologies.
          </p>

          <h3>My Approach</h3>

          <p>
            I believe in creating technology that's not just functional but meaningful. Every line of code I write aims to solve real problems and enhance user experiences. I value clean architecture, collaborative development, and continuous learning as the foundations of great software.
          </p>

        </div>

      </div>

    </section>
  </div>
);


const Certifications = () => {
  const cards = [
    {
      title: 'MongoDB',
      provider: 'MongoDB',
      date: 'October 2024',
      skills: ['NoSQL', 'CRUD', 'Indexing', 'Node.js Integration'],
      description: 'Course teaches how to use a NoSQL database that stores data in flexible documents instead of tables. It covers collections, CRUD operations, and basic querying. You also learn indexing and how to connect MongoDB with apps like Node.js or PHP.',
      url: 'https://drive.google.com/file/d/1PNwtNiSmSVGWdapZPyNlmEPCp0UXrGsT/view?usp=drive_link',
      image: '/mongoss.jpg'
    },
    {
      title: 'Infosys',
      provider: 'Infosys',
      date: 'July 2025',
      skills: ['Node.js', 'Express', 'REST APIs'],
      description: 'Course teaches the basics of computational theory, including formal languages and finite automata. It explains how machines process input using states and transitions. The course helps in understanding the foundation of computer science and problem-solving models.',
      url: 'https://drive.google.com/file/d/1o-JXEjVcxH7CGtzdeE3ZExRs8KBGC8Qx/view?usp=drive_link',
      image: '/infoss.jpg'
    },
    {
      title: 'Web Development',
      provider: 'MicroIT',
      date: 'June 2025',
      skills: ['Responsive UI', 'Modern CSS', 'Web Fundamentals'],
      description: 'Focuses on practical learning of IT skills through real-world tasks and projects. It helps students gain experience in areas like programming, web development, or databases while improving problem-solving and teamwork. The internship also builds industry exposure and prepares learners for future job opportunities.',
      url: 'https://drive.google.com/file/d/1sVWtdRYtr1GYjZKItD9aCr9TK4vh-cAp/view?usp=drive_link',
      image: '/micss.jpg'
    }
  ]
  return (
    <div className="app-shell">
      <NavBar />
      <section className="project-header">
        <div>
          
          <h2>Certifications</h2>
          <p className="skills-sub">Credentials validating my technical expertise and continuous learning journey.</p>
        </div>
      </section>
      <section className="skills-section">
        <div className="project-grid certification-grid">
          {cards.map((cert) => (
            <article className="certification-card flip-card" key={cert.title}>
              <div className="flip-inner">
                <div className="flip-front">
                  <div className="cert-card-top" style={{ backgroundImage: `url(${cert.image})` }}>
                    <div className="project-pill">{cert.provider}</div>
                  </div>
                  <div className="cert-card-bottom">
                    <h3>{cert.title}</h3>
                    <p className="cert-description">{cert.description || 'Comprehensive training on cloud computing fundamentals, services, deployment models, and best practices.'}</p>
                    <div className="cert-meta-row"><span><strong>Issued by:</strong> {cert.provider}</span><span><strong>Date:</strong> {cert.date}</span></div>
                    <div className="cert-skills">Skills: {cert.skills?.join(' • ')}</div>
                  </div>
                </div>
                <div className="flip-back">
                  <div className="back-content">
                    <h3>{cert.title}</h3>
                    <div className="detail-row"><span>📌 Issued by:</span><strong>{cert.provider}</strong></div><br/>
                    <div className="detail-row"><span>📅 Date:</span><strong>{cert.date}</strong></div><br/>
                    <div className="detail-row"><span>💡 Skills:</span><strong>{cert.skills?.join(', ')}</strong></div><br/>
                    <a className="btn primary" href={cert.url} target="_blank" rel="noreferrer">View Certificate</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
// 🌊 Wave Background Component
// const WaveBackground = () => (
//   <div className="wave-bg">
//     <div className="wave"></div>
//     <div className="wave"></div>
//     <div className="wave"></div>
//   </div>
// );
const WaveBackground = () => (
  <div className="wave-bg">
    <svg
      className="waves"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#241466"
        fillOpacity="0.3"
        d="M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,176C672,171,768,213,864,218.7C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224V320H0Z"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="-200 0"
          dur="6s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
);
const App = () => (
  <BrowserRouter>
  <WaveBackground />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      
      <Route path="/certifications" element={<Certifications />} />

      {/* ✅ ADDED ROUTE */}
      <Route path="/achievements" element={<AchievementsPage />} />
       {/* ✅ RESUME ADDED HERE */}
      <Route path="/resume" element={
        <div className="app-shell">
          <NavBar />
          <Resume />
        </div>
      } />

      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
)

export default App