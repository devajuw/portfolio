import React from "react";

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>UrbonSpot</h3>
          <p>
            Developed a comprehensive web application for renting/buying parking
            spots in your city.
            <br /> Tech: FireBase, Git
          </p>
          <a
            href="https://urbonspot.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit UrbonSpot
          </a>
        </div>
       
      </div>
    </div>
  );
}

export default Projects;