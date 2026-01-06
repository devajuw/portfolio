import React, { useEffect, useState } from "react";
import "../css/GitHubStats.css";

function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const username = "devajuw";

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

        // Fetch total commits via search API
        const commitsRes = await fetch(`https://api.github.com/search/commits?q=author:${username}`, {
          headers: { 'Accept': 'application/vnd.github.cloak-preview+json' }
        });
        const commitsData = commitsRes.ok ? await commitsRes.json() : { total_count: 0 };

        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0);

        // Calculate days since account creation
        const createdDate = new Date(userData.created_at);
        const now = new Date();
        const daysSinceCreation = Math.floor((now - createdDate) / (1000 * 60 * 60 * 24));

        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          totalStars,
          totalForks,
          mergedPRs: prsData.total_count || 0,
          totalCommits: commitsData.total_count || 0,
          daysCoding: daysSinceCreation,
          memberSince: createdDate.getFullYear(),
        });
      } catch (err) {
        console.error("Error fetching GitHub data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  // GitHub contribution chart
  const contributionChartUrl = `https://ghchart.rshah.org/5a4e45/${username}`;

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

            {/* Custom Streak Card */}
            <div className="streak-card">
              <div className="streak-item">
                <span className="streak-icon">🔥</span>
                <span className="streak-value">{stats.totalCommits.toLocaleString()}</span>
                <span className="streak-label">Total Commits</span>
              </div>
              <div className="streak-divider"></div>
              <div className="streak-item">
                <span className="streak-icon">📅</span>
                <span className="streak-value">{stats.daysCoding.toLocaleString()}</span>
                <span className="streak-label">Days on GitHub</span>
              </div>
              <div className="streak-divider"></div>
              <div className="streak-item">
                <span className="streak-icon">⭐</span>
                <span className="streak-value">{stats.totalStars}</span>
                <span className="streak-label">Stars Earned</span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-value">{stats.publicRepos}</span>
                <span className="stat-label">Repositories</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{stats.totalForks}</span>
                <span className="stat-label">Total Forks</span>
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