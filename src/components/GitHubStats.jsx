import React, { useEffect, useState } from "react";
import "../css/GitHubStats.css";

function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const username = "devajuw";
  const currentYear = 2026;

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error("Failed to fetch user");
        const userData = await userRes.json();

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
        if (!reposRes.ok) throw new Error("Failed to fetch repos");
        const reposData = await reposRes.json();

        // Fetch merged PRs count
        const prsRes = await fetch(`https://api.github.com/search/issues?q=author:${username}+type:pr+is:merged`);
        const prsData = prsRes.ok ? await prsRes.json() : { total_count: 0 };

        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);

        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          totalStars,
          mergedPRs: prsData.total_count || 0,
        });
      } catch (err) {
        console.error("Error fetching GitHub data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  // GitHub contribution chart - shows last 12 months
  const contributionChartUrl = `https://ghchart.rshah.org/5a4e45/${username}`;
  
  // GitHub streak stats
  const streakStatsUrl = `https://streak-stats.demolab.com/?user=${username}&theme=default&hide_border=true&background=eee1c9&stroke=7c6c5b&ring=5a4e45&fire=5a4e45&currStreakNum=5a4e45&sideNums=5a4e45&currStreakLabel=5a4e45&sideLabels=5a4e45&dates=7c6c5b`;

  if (loading) {
    return (
      <div className="github-stats-component" data-aos="zoom-in-up">
        <div className="github-stats-container">
          <div className="loading-spinner">Loading GitHub stats...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="github-stats-component" data-aos="zoom-in-up">
      <div className="github-stats-container">
        <h3>GitHub Activity 🔥</h3>

        {stats && (
          <>
            {/* Contribution Chart */}
            <div className="contribution-section">
              <h4 className="section-title">Contribution Activity</h4>
              <div className="contribution-chart">
                <img 
                  src={contributionChartUrl} 
                  alt="GitHub Contributions" 
                  className="chart-img"
                />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="stats-cards">
              <img 
                src={streakStatsUrl} 
                alt="GitHub Streak" 
                className="stats-card-img"
              />
            </div>

            {/* Quick Stats Grid */}
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-value">{stats.publicRepos}</span>
                <span className="stat-label">Repositories</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{stats.totalStars}</span>
                <span className="stat-label">Total Stars</span>
              </div>
              <div className="stat-item highlight">
                <span className="stat-value">{stats.mergedPRs}</span>
                <span className="stat-label">PRs Merged</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{stats.followers}</span>
                <span className="stat-label">Followers</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{stats.following}</span>
                <span className="stat-label">Following</span>
              </div>
            </div>

            <div className="github-link">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit GitHub Profile ➔
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default GitHubStats;