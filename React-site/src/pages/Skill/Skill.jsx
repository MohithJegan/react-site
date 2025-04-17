import "./Skill.css";
import { useState, useEffect } from "react";

export default function Skill() {
  const [skillList, setSkillList] = useState([]);

  // API request
  useEffect(() => {
    fetch("https://http5222-assignment-1-1.onrender.com/api/skills", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((skills) => {
        setSkillList(skills);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <main className="skills-main">
      <div className="skills-container">
        <div className="skills-header">
          <h1 className="gradient-text">My Skills</h1>
          <p className="skills-subtitle">
            Technologies I've mastered and tools I work with daily
          </p>
        </div>

        <div className="skills-grid">
          {/* Iterate the skillList array and display the info */}
          {skillList.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon-container">
                <i className={`${skill.icon} skill-icon mb-2`} />
              </div>
              
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-category">
                  {skill.category}
                </span>
              </div>

              <div className="skill-details">
                <div className="skill-progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.proficiencyLevel}%` }}
                  >
                    <span>{skill.proficiencyLevel}%</span>
                  </div>
                </div>

                <div className="skill-meta">
                  <div className="meta-item text-center">
                    <span className="meta-label">Experience</span>
                    <span className="meta-value">
                      {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'year' : 'years'}
                    </span>
                  </div>

                  <div className="meta-item text-center">
                    <span className="meta-label">Certification</span>
                    <span className="meta-value">
                      {skill.certification}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}