// import React from "react";

// const Resume = () => {
//   return (
//     <div className="resume">

//       <h1>My Resume</h1>

//       {/* ✅ CONTACT (CLICKABLE) */}
//       <div className="contact-row">
//         <a href="mailto:nafishaque4@gmail.com">📧 nafishahaque4@gmail.com</a>
//         <a href="tel:+918935839718">📱 +91-8935839718</a>
//         <a href="https://linkedin.com/in/nafisha-haque/" target="_blank">🔗 LinkedIn</a>
//         <a href="https://github.com/NAFISHAHAQUE" target="_blank">💻 GitHub</a>
//       </div>

//       {/* ✅ EDUCATION */}
//       <h2>Education</h2>

//       <div className="resume-card">
//         <h3>Lovely Professional University</h3>
//         <p>Punjab, India</p>
//         <p>B.Tech - Computer Science and Engineering</p>
//         <p>CGPA: 6.74</p>
//         <span>Since August 2023</span>
//       </div>

//       <div className="resume-card">
//         <h3>R.J.S Inter College</h3>
//         <p>Hajipur, Bihar</p>
//         <p>Intermediate</p>
//         <p>89%</p>
//         <span>2020 - 2022</span>
//       </div>

//       <div className="resume-card">
//         <h3>F.K.A.N.S Girl’s High School</h3>
//         <p>Hajipur, Bihar</p>
//         <p>Matriculation</p>
//         <p>81%</p>
//         <span>2019 - 2020</span>
//       </div>

//       {/* ✅ SKILLS */}
//       <h2>Skills</h2>
//       <div className="resume-card">
//         <p><strong>Languages:</strong> C++, JavaScript, C, PHP, Java, Python</p>
//         <p><strong>Frameworks:</strong> HTML, CSS, Bootstrap, React, Node.js</p>
//         <p><strong>Tools:</strong> MySQL, MongoDB, DSA</p>
//         <p><strong>Soft Skills:</strong> Problem Solving, Teamwork, Leadership</p>
//       </div>

//       {/* ✅ PROJECTS */}
//       <h2>Projects</h2>

//       <div className="resume-card">
//         <h3>QuizzyPop</h3>
//         <p>Interactive quiz platform with category selection, timer & score tracking.</p>
//       </div>

//       <div className="resume-card">
//         <h3>AI Weather Forecaster</h3>
//         <p>AI-based weather app with chatbot & real-time API integration.</p>
//       </div>

//       {/* ✅ INTERNSHIP */}
//       <h2>Internship</h2>

//       <div className="resume-card">
//         <h3>Software Intern - MICRO IT</h3>
//         <p>Built quiz platform using React, Node.js, MongoDB.</p>
//         <span>May 2025 - June 2025</span>
//       </div>

//       <div className="resume-card">
//         <h3>Web Development Intern - BHARAT INTERN</h3>
//         <p>Developed music playlist manager with responsive UI.</p>
//         <span>Aug 2024 - Sep 2024</span>
//       </div>

//       {/* ✅ ACHIEVEMENTS */}
//       <h2>Achievements</h2>

//       <div className="resume-card">
//         <p>⭐ 5★ in C++ on HackerRank</p>
//         <p>🏆 First Prize - National Science Day Poster Competition</p>
//       </div>

//     </div>
//   );
// };

// export default Resume;

import React, { useState } from "react";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="resume">

      {/* TITLE */}
      <h1 className="resume-title">My <span>Resume</span></h1>

      {/* CONTACT BUTTONS */}
      <div className="contact-row">
        <a href="mailto:nafishahaque4@gmail.com" className="pill">📧 nafishahaque4@gmail.com</a>
        <a href="tel:+918935839718" className="pill">📱 +91-8935839718</a>
        <a href="https://linkedin.com/in/nafisha-haque/" target="_blank" className="pill">🔗 LinkedIn</a>
        <a href="https://github.com/NAFISHAHAQUE" target="_blank" className="pill">💻 GitHub</a>
      </div>

      {/* DOWNLOAD BUTTON */}
      <div className="download">
        <a href="/resume.pdf" download>⬇ Download Resume</a>
      </div>

      {/* TABS */}
      <div className="tabs">
        <button className={activeTab==="education" ? "active" : ""} onClick={()=>setActiveTab("education")}>Education</button>
        <button className={activeTab==="skills" ? "active" : ""} onClick={()=>setActiveTab("skills")}>Skills</button>
        <button className={activeTab==="projects" ? "active" : ""} onClick={()=>setActiveTab("projects")}>Projects</button>
        <button className={activeTab==="extra" ? "active" : ""} onClick={()=>setActiveTab("extra")}>Extracurricular</button>
        <button className={activeTab==="certificates" ? "active" : ""} onClick={()=>setActiveTab("certificates")}>Certificates</button>
      </div>

      {/* CONTENT */}
      <div className="tab-content">

        {/* EDUCATION */}
        {activeTab === "education" && (
  <div className="resume-container">

    <div className="resume-card">
      <div>
        <h3>Lovely Professional University</h3>
        <p className="location">Punjab, India</p>
        <p>Bachelor of Technology - Computer Science and Engineering</p>
        <p className="cgpa">CGPA: 6.74</p>
      </div>
      <span className="date">Since August 2023</span>
    </div>

    <div className="resume-card">
      <div>
        <h3>R.J.S Inter College</h3>
        <p className="location">Hajipur, Bihar</p>
        <p>Intermediate</p>
        <p className="cgpa">Percentage: 89%</p>
      </div>
      <span className="date">2020 - 2022</span>
    </div>

    <div className="resume-card">
      <div>
        <h3>F.K.A.N.S Girl’s High School</h3>
        <p className="location">Hajipur, Bihar</p>
        <p>Matriculation</p>
        <p className="cgpa">Percentage: 81%</p>
      </div>
      <span className="date">2019 - 2020</span>
    </div>

  </div>
)}

        {/* PROJECTS */}
        {activeTab === "projects" && (
          <>
            <div className="resume-card">
              <h3>QuizzyPop</h3>
              <p>Quiz platform with timer & score tracking</p>
            </div>
            <div className="resume-card">
              <h3>AI Weather Forecaster</h3>
              <p>Weather app with API & chatbot</p>
            </div>
          </>
        )}

        {/* EXTRACURRICULAR */}
        {activeTab === "extra" && (
          <div className="resume-card">
            <p>🏆 Science Competition Winner</p>
            <p>🤝 Team Collaboration Activities</p>
          </div>
        )}

        {/* CERTIFICATES */}
        {activeTab === "certificates" && (
          <div className="resume-card">
            <p>📜 Infosys Certification</p>
            <p>📜 MongoDB Certification</p>
            <p>📜 MicroIT Internship Certificate</p>
          </div>
        )}

      </div>

    </div>
  );
};

export default Resume;