import React, { useEffect, useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import "../css/GitHubStats.css";
import { sharedViewport } from "../motion/animations";

function GitHubStats() {
  const currentYear = new Date().getFullYear();
  const [stats, setStats] = useState(null);
  const [contributions, setContributions] = useState([]);
  const [yearTotalContributions, setYearTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const username = "devajuw";
  const fadeInProps = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
    viewport: sharedViewport,
  };

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

        // Fetch year-specific contributions so the chart always shows current-year data.
        const contributionsRes = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=${currentYear}`
        );
        if (!contributionsRes.ok) throw new Error("Failed to fetch contributions");
        const contributionsData = await contributionsRes.json();
        const contributionDays = contributionsData.contributions || [];
        const contributionTotal = contributionsData.total?.[String(currentYear)] || 0;

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
        setContributions(contributionDays);
        setYearTotalContributions(contributionTotal);
      } catch (err) {
        console.error("Error fetching GitHub data:", err);
        setError("Could not load GitHub stats right now. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username, currentYear]);

  const getContributionClass = (level) => {
    if (level <= 0) return "level-0";
    if (level === 1) return "level-1";
    if (level === 2) return "level-2";
    if (level === 3) return "level-3";
    return "level-4";
  };

  const monthlyContributionData = useMemo(() => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthTotals = Array(12).fill(0);

    contributions.forEach((day) => {
      const monthIndex = new Date(day.date).getMonth();
      monthTotals[monthIndex] += day.count;
    });

    const maxCount = Math.max(...monthTotals, 1);

    return monthNames.map((month, index) => ({
      month,
      count: monthTotals[index],
      intensity: Math.round((monthTotals[index] / maxCount) * 100),
    }));
  }, [contributions]);

  if (loading) {
    return (
      <Motion.div className="github-stats-component" {...fadeInProps}>
        <div className="github-stats-container">
          <div className="loading-spinner">Loading GitHub stats...</div>
        </div>
      </Motion.div>
    );
  }

  if (error) {
    return (
      <Motion.div className="github-stats-component" {...fadeInProps}>
        <div className="github-stats-container">
          <h3>GitHub Activity</h3>
          <div className="loading-spinner">{error}</div>
        </div>
      </Motion.div>
    );
  }

  return (
    <Motion.div className="github-stats-component" {...fadeInProps}>
      <div className="github-stats-container">
        <h3>GitHub Activity 🔥</h3>

        {stats && (
          <>
            {/* Contribution Chart */}
            <div className="contribution-section">
              <h4 className="section-title">Contribution Activity ({currentYear})</h4>
              <div className="contribution-chart">
                <div className="month-summary" aria-label={`Monthly contributions in ${currentYear}`}>
                  {monthlyContributionData.map((item) => (
                    <div key={item.month} className="month-item" title={`${item.month}: ${item.count} contributions`}>
                      <span className="month-name">{item.month}</span>
                      <span className="month-count">{item.count}</span>
                      <div className="month-bar-track">
                        <div className="month-bar-fill" style={{ width: `${item.intensity}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="contribution-grid" aria-label={`GitHub contributions in ${currentYear}`}>
                  {contributions.map((day) => (
                    <div
                      key={day.date}
                      className={`contribution-cell ${getContributionClass(day.level)}`}
                      title={`${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
                    />
                  ))}
                </div>
                <p className="contribution-total">
                  {yearTotalContributions.toLocaleString()} contributions in {currentYear}
                </p>
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
    </Motion.div>
  );
}

export default GitHubStats;