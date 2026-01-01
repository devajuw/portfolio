import React, { useEffect, useState } from "react";
import "../css/GitHubStats.css";

function GitHubStats() {
  const [stats, setStats] = useState(null);
  const username = "devajuw";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => setStats(data))
      .catch((err) => {
        console.error("Error fetching GitHub stats:", err);
      });
  }, [username]);

  const chartUrl = `https://ghchart.rshah.org/5a4e45/${username}`;


  return (
    <div className="github-stats-component" data-aos="zoom-in-up">
      <div className="github-stats-container">
        <h3>GitHub Activity 🔥</h3>

        <div className="calendar-split-container">
          <div className="calendar-row row-top">
            <span className="row-label">Jan - Dec</span>
            <div className="calendar-crop">
              <img
                src={chartUrl}
                alt="GitHub Contributions"
                className="github-calendar-img split-first"
              />
            </div>
          </div>
        </div>

        <div className="github-widgets">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=default&hide_border=true&background=eee1c9&stroke=7c6c5b&ring=5a4e45&fire=5a4e45&currStreakNum=5a4e45&sideNums=5a4e45&currStreakLabel=5a4e45&sideLabels=5a4e45&dates=7c6c5b`}
            alt="GitHub Streak Stats"
            className="github-streak"
            loading="lazy"
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
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit GitHub Profile ➔
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitHubStats;
 