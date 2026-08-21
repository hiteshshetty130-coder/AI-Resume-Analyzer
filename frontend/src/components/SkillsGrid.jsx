import React from "react";


function SkillsGrid({result}) {
  return (
    <div className="skills-grid">
      {/* Resume Skills */}
      <div className="skill-box">
        <div className="skill-box-header">
          <span className="skill-box-title">
            🟢 Resume Skills ({result.resume_skills.length})
          </span>
        </div>
        <p className="skill-box-sub">Skills found in your resume</p>
        <div className="tags-wrap">
          {result.resume_skills.map((skill, i) => (
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
            🔵 Job Description Skills ({result.description_skills.length})
          </span>
        </div>
        <p className="skill-box-sub">Skills required in the job description</p>
        <div className="tags-wrap">
          {result.description_skills.map((skill, i) => (
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
            ✅ Matched Skills ({result.matched_skills.length})
          </span>
        </div>
        <p className="skill-box-sub">Skills you have that match the job</p>
        <div className="tags-wrap">
          {result.matched_skills.map((skill, i) => (
            <span key={i} className="tag green-tag">
              {skill}
            </span>
          ))}
        </div>
        
        <div className={result.percentage>70 ? "matched-tip": "matched-tip-red"}>
          {result.percentage>70 ? "✅ Great! You have most of the required skills.": "Update your skills most of the required skills are missing !!!"}
        </div>
      </div>

      {/* Missing Skills */}
      <div className="skill-box">
        <div className="skill-box-header">
          <span className="skill-box-title">
            ❌ Missing Skills ({result.missing_skills.length})
          </span>
        </div>
        <p className="skill-box-sub">Skills you need to learn/improve</p>
        <div className="tags-wrap">
          {result.missing_skills.map((skill, i) => (
            <span key={i} className="tag red-tag">
              {skill}
            </span>
          ))}
        </div>
        
        <div className={result.percentage<100?"missing-tip":"missing-tip-green"}>
          {result.percentage<100?"💡 Learning these skills will boost your profile and increase your chances.": "Congratulations All the skills have matched."}
        </div>
      </div>
    </div>
  );
}

export default SkillsGrid;
