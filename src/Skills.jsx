import React, { useEffect, useState } from "react";
import './css/index.css';

function Skills() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/devajuw')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error("Error fetching GitHub stats:", err));
  }, []);

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
      
      <div className="github-stats" data-aos="zoom-in-up">
        <h3>GitHub Activity 🔥</h3>
        <div className="github-widgets">
          <div className="calendar-container">
            <img 
              src="https://ghchart.rshah.org/5a4e45/devajuw" 
              alt="GitHub Contribution Calendar"
              className="github-calendar-img"
            />
          </div>
          
          <div className="stats-wrapper">
            {stats && (
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-label">Repositories</span>
                  <span className="stat-value">{stats.public_repos}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Followers</span>
                  <span className="stat-value">{stats.followers}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Following</span>
                  <span className="stat-value">{stats.following}</span>
                </div>
              </div>
            )}
            
            <div className="github-link">
              <a href="https://github.com/devajuw" target="_blank" rel="noopener noreferrer">
                Visit GitHub Profile ➔
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    </>
  );
}

export default Skills;