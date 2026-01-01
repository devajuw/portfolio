import React from "react";
import '../css/globals.css';
import '../css/Skills.css';
import GitHubStats from "./GitHubStats";

function Skills() {
  return (
    <>
      <div data-aos="flip-down">
        <div className="skills-container" id="skills">
          <h2>Skills 💻</h2>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>HTML5 & CSS3</li>
            <li>SQL</li>
            <li>Git & GitHub</li>
            <li>Firebase</li>
            <li>Python</li>
          </ul>
          
          <GitHubStats />
        </div>
      </div>
    </>
  );
}

export default Skills;
