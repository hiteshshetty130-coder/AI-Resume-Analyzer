import React from "react";

function SkillsGrid() {
  const resumeSkills = [
    "Python",
    "Flask",
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "Git",
    "GitHub",
    "Pandas",
    "NumPy",
    "Power BI",
    "SQLite",
    "C",
    "Data Visualization",
    "Leadership",
    "Web Design",
    "Event Coordination",
    "Problem Solving",
    "Communication",
  ];

  const jdSkills = [
    "Python",
    "Flask",
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "React",
  ];

  const matchedSkills = ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQL"];

  const missingSkills = ["React"];

  return (
    <div className="skills-grid">
      {/* Resume Skills */}
      <div className="skill-box">
        <div className="skill-box-header">
          <span className="skill-box-title">
            🟢 Resume Skills ({resumeSkills.length})
          </span>
        </div>
        <p className="skill-box-sub">Skills found in your resume</p>
        <div className="tags-wrap">
          {resumeSkills.map((skill, i) => (
            <span key={i} className="tag green-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* JD Skills */}
      <div className="skill-box">
        <div className="skill-box-header">
          <span className="skill-box-title">
            🔵 Job Description Skills ({jdSkills.length})
          </span>
        </div>
        <p className="skill-box-sub">Skills required in the job description</p>
        <div className="tags-wrap">
          {jdSkills.map((skill, i) => (
            <span key={i} className="tag blue-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Matched Skills */}
      <div className="skill-box">
        <div className="skill-box-header">
          <span className="skill-box-title">
            ✅ Matched Skills ({matchedSkills.length})
          </span>
        </div>
        <p className="skill-box-sub">Skills you have that match the job</p>
        <div className="tags-wrap">
          {matchedSkills.map((skill, i) => (
            <span key={i} className="tag green-tag">
              {skill}
            </span>
          ))}
        </div>
        <div className="matched-tip">
          ✅ Great! You have most of the required skills.
        </div>
      </div>

      {/* Missing Skills */}
      <div className="skill-box">
        <div className="skill-box-header">
          <span className="skill-box-title">
            ❌ Missing Skills ({missingSkills.length})
          </span>
        </div>
        <p className="skill-box-sub">Skills you need to learn/improve</p>
        <div className="tags-wrap">
          {missingSkills.map((skill, i) => (
            <span key={i} className="tag red-tag">
              {skill}
            </span>
          ))}
        </div>
        <div className="missing-tip">
          💡 Learning these skills will boost your profile and increase your
          chances.
        </div>
      </div>
    </div>
  );
}

export default SkillsGrid;
