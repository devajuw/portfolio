import React, { useState, useEffect } from "react";

// A simple progress bar component
const LeetCodeProgressBar = ({ progress, color }) => (
  <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '2px' }}>
    <div style={{
      height: '20px',
      width: `${progress}%`,
      background: color,
      borderRadius: '3px',
      transition: 'width 0.5s ease-in-out'
    }}></div>
  </div>
);

// Main component to fetch and display stats
const LeetCodeStats = ({ username }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`user/${username}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('User not found or API error');
        }
        return res.json();
      })
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [username]);

  if (loading) return <p>Loading stats...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!stats || stats.totalSolved === undefined) return <p>No stats available for this user.</p>;

  const easyProgress = (stats.easySolved / stats.totalEasy) * 100;
  const mediumProgress = (stats.mediumSolved / stats.totalMedium) * 100;
  const hardProgress = (stats.hardSolved / stats.totalHard) * 100;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>LeetCode Stats for {username}</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
        <p><strong>Rank:</strong> {stats.ranking}</p>
        <p><strong>Reputation:</strong> {stats.reputation}</p>
        <p><strong>Contribution:</strong> {stats.contributionPoints}</p>
        <p><strong>Acceptance Rate:</strong> {stats.acceptanceRate}%</p>
      </div>

      <h4>Total Solved: {stats.totalSolved} / {stats.totalQuestions}</h4>

      <div style={{ marginBottom: '10px' }}>
        <p>Easy: {stats.easySolved} / {stats.totalEasy}</p>
        <LeetCodeProgressBar progress={easyProgress} color="linear-gradient(to right, #4caf50, #81c784)" />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <p>Medium: {stats.mediumSolved} / {stats.totalMedium}</p>
        <LeetCodeProgressBar progress={mediumProgress} color="linear-gradient(to right, #ff9800, #ffb74d)" />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <p>Hard: {stats.hardSolved} / {stats.totalHard}</p>
        <LeetCodeProgressBar progress={hardProgress} color="linear-gradient(to right, #f44336, #e57373)" />
      </div>

      {/* Placeholder for chart components */}
      <div style={{ marginTop: '30px' }}>
        <h4>Progress Charts</h4>
        {/* You would integrate a charting library here to visualize the data */}
        <p><i>Chart components would go here.</i></p>
      </div>
    </div>
  );
};

export default LeetCodeStats;
