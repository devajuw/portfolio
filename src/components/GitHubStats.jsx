import React, { useState } from 'react';

function GitHubStats() {
  const [error, setError] = useState(false);

  const handleImageError = () => {
    setError(true);
  };

  if (error) {
    return (
      <div className="github-stats">
        <h3>GitHub Activity</h3>
        <p>Unable to load GitHub stats at the moment.</p>
      </div>
    );
  }

  return (
    <div className="github-stats">
      <h3>GitHub Activity</h3>
      <div className="github-widgets">
        <img 
          src="https://github-readme-streak-stats.herokuapp.com/?user=devajuw&theme=default&hide_border=true&background=eee1c9&stroke=7c6c5b&ring=5a4e45&fire=5a4e45&currStreakNum=5a4e45&sideNums=5a4e45&currStreakLabel=5a4e45&sideLabels=5a4e45&dates=7c6c5b"
          alt="GitHub Streak Stats"
          className="github-streak"
          onError={handleImageError}
          loading="lazy"
        />
        <img 
          src="https://github-readme-stats.vercel.app/api?username=devajuw&show_icons=true&theme=default&hide_border=true&bg_color=eee1c9&text_color=5a4e45&icon_color=7c6c5b&title_color=5a4e45"
          alt="GitHub Stats"
          className="github-stats-img"
          onError={handleImageError}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default GitHubStats; 