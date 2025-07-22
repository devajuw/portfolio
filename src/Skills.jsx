import React from "react";
import './css/index.css';

function Skills() {
  return (
    <>
    <div data-aos="flip-down">
    <div className="skills-container" id="skills">
      <h2>Skills</h2>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>HTML5 & CSS3</li>
        <li>SQL</li>
        <li>Git & GitHub</li>
        <li>Firebase</li>
        <li>Python</li>
      </ul>
      
      <div className="github-stats">
        <h3>GitHub Activity</h3>
        <div className="github-widgets">
          <img 
            src="https://github-readme-streak-stats.herokuapp.com/?user=devajuw&theme=default&hide_border=true&background=eee1c9&stroke=7c6c5b&ring=5a4e45&fire=5a4e45&currStreakNum=5a4e45&sideNums=5a4e45&currStreakLabel=5a4e45&sideLabels=5a4e45&dates=7c6c5b"
            alt="GitHub Streak Stats"
            className="github-streak"
          />
          <img 
            src="https://github-readme-stats.vercel.app/api?username=devajuw&show_icons=true&theme=default&hide_border=true&bg_color=eee1c9&text_color=5a4e45&icon_color=7c6c5b&title_color=5a4e45"
            alt="GitHub Stats"
            className="github-stats-img"
          />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Skills;