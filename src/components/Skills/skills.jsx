import React from "react";
import "./skills.css";

const programmingLanguages = [
  { name: "JavaScript", level: 75 },
  { name: "Java", level: 60 },
  { name: "HTML/CSS", level: 95 },
  { name: "SQL", level: 75 },
  { name: "C#", level: 70 },
  { name: "Python", level: 55 },
];

const developmentTools = [
  { name: "React", level: 70 },
  { name: "JSP/Servlets", level: 70 },
  { name: "Node.js", level: 75 },
  { name: "PostgreSQL", level: 60 },
  { name: "MongoDB", level: 40 },
  { name: "Figma", level: 85 },
  { name: "GitHub", level: 80 },
  { name: "Netlify", level: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className="skillsSection">
      <h2 className="skillsTitle">My Skills</h2>
      <p className="skillsDesc">
        I’m passionate about building responsive and scalable applications. Here
        are the languages and tools I enjoy working with.
      </p>

      <div className="skillsGroup">
        <h3 className="skillsGroupTitle">Programming Languages</h3>
        <div className="skillsContainer">
          {programmingLanguages.map((skill) => (
            <div className="skillItem" key={skill.name}>
              <div className="skillName">{skill.name}</div>
              <div className="skillBarWrapper">
                <div
                  className="skillBarFill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skillsGroup">
        <h3 className="skillsGroupTitle">Development Tools</h3>
        <div className="skillsContainer">
          {developmentTools.map((tool) => (
            <div className="skillItem" key={tool.name}>
              <div className="skillName">{tool.name}</div>
              <div className="skillBarWrapper">
                <div
                  className="skillBarFill"
                  style={{ width: `${tool.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
